package testworkflowprocessor

import (
	"maps"

	"github.com/pkg/errors"

	"github.com/kubeshop/testkube/pkg/expressions"
	"github.com/kubeshop/testkube/pkg/imageinspector"
)

type groupStage struct {
	stageMetadata
	stageLifecycle
	children []Stage
	virtual  bool
}

type GroupStage interface {
	Stage
	Children() []Stage
	RecursiveChildren() []Stage
	Add(stages ...Stage) GroupStage
}

func NewGroupStage(ref string, virtual bool) GroupStage {
	return &groupStage{
		stageMetadata: stageMetadata{ref: ref},
		virtual:       virtual,
	}
}

func (s *groupStage) Len() int {
	count := 0
	for _, ch := range s.Children() {
		count += ch.Len()
	}
	return count
}

func (s *groupStage) HasPause() bool {
	return s.paused || (len(s.Children()) > 0 && s.Children()[0].HasPause())
}

func (s *groupStage) Signature() Signature {
	sig := []Signature(nil)
	for _, ch := range s.Children() {
		si := ch.Signature()
		_, ok := ch.(GroupStage)
		// Include children directly, if the stage is virtual
		if ok && si.Name() == "" && !si.Optional() && !si.Negative() {
			sig = append(sig, si.Children()...)
		} else {
			sig = append(sig, si)
		}
	}

	return &signature{
		RefValue:      s.ref,
		NameValue:     s.name,
		CategoryValue: s.category,
		OptionalValue: s.optional,
		NegativeValue: s.negative,
		ChildrenValue: sig,
	}
}

func (s *groupStage) ContainerStages() []ContainerStage {
	c := []ContainerStage(nil)
	for _, ch := range s.children {
		c = append(c, ch.ContainerStages()...)
	}
	return c
}

func (s *groupStage) Children() []Stage {
	return s.children
}

func (s *groupStage) RecursiveChildren() []Stage {
	res := make([]Stage, 0)
	for _, ch := range s.children {
		if v, ok := ch.(GroupStage); ok {
			res = append(res, v.RecursiveChildren()...)
		} else {
			res = append(res, ch)
		}
	}
	return res
}

func (s *groupStage) GetImages() map[string]struct{} {
	v := make(map[string]struct{})
	for _, ch := range s.children {
		maps.Copy(v, ch.GetImages())
	}
	return v
}

func (s *groupStage) Flatten() []Stage {
	// Flatten children
	next := []Stage(nil)
	for _, ch := range s.children {
		next = append(next, ch.Flatten()...)
	}
	s.children = next

	// Delete empty stage
	if len(s.children) == 0 {
		return nil
	}

	// Flatten when it is completely virtual stage
	if s.virtual {
		return s.children
	}

	// Merge stage into single one below if possible
	first := s.children[0]
	if len(s.children) == 1 && (s.name == "" || first.Name() == "") && (s.timeout == "" || first.Timeout() == "") && (!s.paused || !first.Paused()) {
		if first.Name() == "" {
			first.SetName(s.name)
		}
		first.AppendConditions(s.condition)
		if first.Timeout() == "" {
			first.SetTimeout(s.timeout)
		}
		if s.negative {
			first.SetNegative(!first.Negative())
		}
		if s.optional {
			first.SetOptional(true)
		}
		if s.paused {
			first.SetPaused(true)
		}
		return []Stage{first}
	}

	return []Stage{s}
}

func (s *groupStage) Add(stages ...Stage) GroupStage {
	for _, ch := range stages {
		if ch != nil {
			s.children = append(s.children, ch.Flatten()...)
		}
	}
	return s
}

func (s *groupStage) ApplyImages(images map[string]*imageinspector.Info, imageNameResolutions map[string]string) error {
	for i := range s.children {
		err := s.children[i].ApplyImages(images, imageNameResolutions)
		if err != nil {
			return errors.Wrap(err, "applying image data")
		}
	}
	return nil
}

func (s *groupStage) Resolve(m ...expressions.Machine) error {
	for i := range s.children {
		err := s.children[i].Resolve(m...)
		if err != nil {
			return errors.Wrap(err, "group stage container")
		}
	}
	return expressions.Simplify(&s.stageMetadata, m...)
}
