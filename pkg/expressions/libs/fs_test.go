package libs

import (
	"testing"

	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"

	"github.com/kubeshop/testkube/pkg/expressions"
)

func MustCall(m expressions.Machine, name string, args ...interface{}) interface{} {
	list := make([]expressions.StaticValue, len(args))
	for i, v := range args {
		if vv, ok := v.(expressions.StaticValue); ok {
			list[i] = vv
		} else {
			list[i] = expressions.NewValue(v)
		}
	}
	v, ok, err := m.Call(name, list...)
	if err != nil {
		panic(err)
	}
	if !ok {
		panic("not recognized")
	}
	return v.Static().Value()
}

func TestFsLibGlob(t *testing.T) {
	fsys := &afero.IOFS{Fs: afero.NewMemMapFs()}
	_ = afero.WriteFile(fsys.Fs, "etc/file1.txt", nil, 0644)
	_ = afero.WriteFile(fsys.Fs, "else/file1.txt", nil, 0644)
	_ = afero.WriteFile(fsys.Fs, "another-file.txt", nil, 0644)
	_ = afero.WriteFile(fsys.Fs, "etc/nested/file2.json", nil, 0644)
	machine := NewFsMachine(fsys, "/etc")
	assert.Equal(t, []string{"/etc/file1.txt", "/etc/nested/file2.json"}, MustCall(machine, "glob", "**/*"))
	assert.Equal(t, []string{"/etc/file1.txt"}, MustCall(machine, "glob", "*"))
	assert.Equal(t, []string{"/etc/nested/file2.json"}, MustCall(machine, "glob", "**/*.json"))
	assert.Equal(t, []string{"/etc/file1.txt", "/etc/nested/file2.json"}, MustCall(machine, "glob", "**/*.json", "*.txt"))
	assert.Equal(t, []string{"/another-file.txt", "/else/file1.txt", "/etc/file1.txt"}, MustCall(machine, "glob", "/**/*.txt"))
	assert.Equal(t, []string{"/another-file.txt", "/etc/file1.txt"}, MustCall(machine, "glob", "/**/*.txt", "!/else/**/*"))
}

func TestFsLibRead(t *testing.T) {
	fsys := &afero.IOFS{Fs: afero.NewMemMapFs()}
	_ = afero.WriteFile(fsys.Fs, "etc/file1.txt", []byte("foo"), 0644)
	_ = afero.WriteFile(fsys.Fs, "another-file.txt", []byte("bar"), 0644)
	machine := NewFsMachine(fsys, "/etc")
	assert.Equal(t, "foo", MustCall(machine, "file", "file1.txt"))
	assert.Equal(t, "foo", MustCall(machine, "file", "/etc/file1.txt"))
	assert.Equal(t, "bar", MustCall(machine, "file", "../another-file.txt"))
	assert.Equal(t, "bar", MustCall(machine, "file", "/another-file.txt"))
}
