package commands

import (
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	"github.com/otiai10/copy"

	"github.com/kballard/go-shellquote"
	"github.com/spf13/cobra"

	"github.com/kubeshop/testkube/pkg/testworkflows/testworkflowprocessor/constants"
	"github.com/kubeshop/testkube/pkg/ui"
)

func NewCloneCmd() *cobra.Command {
	var (
		paths    []string
		username string
		token    string
		sshKey   string
		authType string
		revision string
	)

	cmd := &cobra.Command{
		Use:   "clone <uri> <outputPath>",
		Short: "Clone the Git repository",
		Args:  cobra.ExactArgs(2),

		Run: func(cmd *cobra.Command, args []string) {
			uri, err := url.Parse(args[0])
			ui.ExitOnError("repository uri", err)
			destinationPath, err := filepath.Abs(args[1])
			ui.ExitOnError("output path", err)

			// Disable interactivity
			os.Setenv("GIT_TERMINAL_PROMPT", "0")

			authArgs := make([]string, 0)

			if authType == "header" {
				ui.Debug("auth type: header")
				if token != "" {
					authArgs = append(authArgs, "-c", fmt.Sprintf("http.extraHeader='%s'", "Authorization: Bearer "+token))
				}
				if username != "" {
					uri.User = url.User(username)
				}
			} else {
				ui.Debug("auth type: token")
				if username != "" && token != "" {
					uri.User = url.UserPassword(username, token)
				} else if username != "" {
					uri.User = url.User(username)
				} else if token != "" {
					uri.User = url.User(token)
				}
			}

			// Use the SSH key
			if sshKey != "" {
				sshKeyPath := filepath.Join(constants.DefaultTmpDirPath, "id_rsa")
				err := os.WriteFile(sshKeyPath, []byte(sshKey), 0400)
				ui.ExitOnError("saving SSH key temporarily", err)
				os.Setenv("GIT_SSH_COMMAND", shellquote.Join("ssh", "-o", "StrictHostKeyChecking=no", "-o", "UserKnownHostsFile=/dev/null", "-i", sshKeyPath))
			}

			// Keep the files in temporary directory
			outputPath := filepath.Join(constants.DefaultTmpDirPath, "repo")

			// Mark directory as safe
			configArgs := []string{"-c", fmt.Sprintf("safe.directory=%s", outputPath), "-c", "advice.detachedHead=false"}

			// Clone repository
			if len(paths) == 0 {
				ui.Debug("full checkout")
				if revision == "" {
					err = Run("git", "clone", configArgs, authArgs, "--depth", 1, "--verbose", uri.String(), outputPath)
				} else {
					err = Run("git", "clone", configArgs, authArgs, "--depth", 1, "--branch", revision, "--verbose", uri.String(), outputPath)
				}
				ui.ExitOnError("cloning repository", err)
			} else {
				ui.Debug("sparse checkout")
				err = Run("git", "clone", configArgs, authArgs, "--filter=blob:none", "--no-checkout", "--sparse", "--depth", 1, "--verbose", uri.String(), outputPath)
				ui.ExitOnError("cloning repository", err)
				err = Run("git", "-C", outputPath, configArgs, "sparse-checkout", "set", "--no-cone", paths)
				ui.ExitOnError("sparse checkout repository", err)
				if revision != "" {
					err = Run("git", "-C", outputPath, configArgs, "fetch", authArgs, "--depth", 1, "origin", revision)
					ui.ExitOnError("fetching revision", err)
					err = Run("git", "-C", outputPath, configArgs, "checkout", "FETCH_HEAD")
					ui.ExitOnError("checking out head", err)
					// TODO: Don't do it for commits
					err = Run("git", "-C", outputPath, configArgs, "checkout", "-B", revision)
					ui.ExitOnError("checking out the branch", err)
				} else {
					err = Run("git", "-C", outputPath, configArgs, "checkout")
					ui.ExitOnError("fetching head", err)
				}
			}

			// Copy files to the expected directory. Ignore errors, only inform warn about them.
			err = copy.Copy(outputPath, destinationPath, copy.Options{
				OnError: func(src, dest string, err error) error {
					if err != nil {
						if src == outputPath && strings.Contains(err.Error(), "chmod") {
							// Ignore chmod error on mounted directory
							return nil
						}
						fmt.Printf("warn: copying to %s: %s\n", dest, err.Error())
					}
					return nil
				},
			})
			ui.ExitOnError("copying files to destination", err)
		},
	}

	cmd.Flags().StringSliceVarP(&paths, "paths", "p", nil, "paths for sparse checkout")
	cmd.Flags().StringVarP(&username, "username", "u", "", "")
	cmd.Flags().StringVarP(&token, "token", "t", "", "")
	cmd.Flags().StringVarP(&sshKey, "sshKey", "s", "", "")
	cmd.Flags().StringVarP(&authType, "authType", "a", "basic", "allowed: basic, header")
	cmd.Flags().StringVarP(&revision, "revision", "r", "", "commit hash, branch name or tag")

	return cmd
}
