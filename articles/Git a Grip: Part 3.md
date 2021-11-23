# Git a Grip: Part 3 - Ah, push it - push it real good 🔊

In the last part, we created a repository on our local system. However, if we want to share our code or collaborate, it needs to be available in a public location. [GitHub](https://github.com) is one of the many hosts that provides this service. Some of the other popular platforms include [GitLab](https://about.gitlab.com/), [BitBucket](https://bitbucket.org/), and [SourceForge](https://sourceforge.net/). GitHub is by far the most popular (and what I use) - that is why I chose it for this series.

## Create a Remote Repository

Now we are going to sync the local 'git-a-grip' repository to GitHub. Head over to GitHub.com, and in the top right corner click the '+' dropdown and select 'New repository'.

For the repository name make sure it matches the local one, 'git-a-grip'. You can add a description if you like but it's not needed here.

Keep it public and leave the three checkboxes blank for:

- initialize with a README
- Add .gitignore
- choose a license

We already have a README file made and the other two will not be used in this lesson.

Click the 'Create repository' button and on the next page, you will see _Quick setup_ at the top. Make sure that the HTTPS box is selected and then copy the link to the right of it. This is the address to the remote repository.

### README

A README file explains what the project is, where to get it, how to use it, and so on.

### .gitignore

Files that you wish to ignore are saved in a special file named _.gitignore_. These will often be files with passwords, hidden system files (like .DS_Store in macOS), and node packages/modules. There is no git command to add or remove files to .gitignore. The file must be edited and committed manually when you wish to make changes.

Since .gitignore is a dot file, you will have to turn on the hidden files view to see it with your file manager. In the terminal, you must add the `-a` flag within the `ls` command to show _all_ files.

I usually use `ls -lah` when displaying files from the command line. `-l` is to use _long list format_, and `-h` stands for _human-readable_, which just displays file sizes in a more friendly manner.

![ls -lah](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1egehaipbb1td1bkgmgy.png)

### Licenses

A software license lets others know what they can and can't do with your source code.

> Public repositories on GitHub are often used to share open-source software. For your repository to truly be open source, you'll need to license it so that others are free to use, change, and distribute the software.

To make things easier, [GitHub](https://www.github.com) created [choosealicense.com](https://choosealicense.com/) to help us understand the options.

## Connect Local to Remote

Next, open your terminal inside the local repository directory. We are going to tell Git what the remote address is on GitHub. In this example, we only have one remote, but it is possible to have many for the same repo. The primary remote is typically named 'origin'. To add a remote named 'origin' use the `git remote` command:
`git remote add origin "URL from GitHub"`

![git remote](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m5dakp39jfi4c2my3adc.png)

As shown above, I also used the `git remote -v` command. This is how you can view the remote address URL.

The local repository now knows where the remote repository is located, which means we can send our files to GitHub!

## Push to Remote

Sending your local changes to a remote is called _pushing_. Since we have previously added our README file and committed it, the last step is to use the `git push` command. We can push our README file to GitHub by using:
`git push origin main`

If you didn't change your branch name to 'main' earlier, you will have to use 'master' instead. Remember, 'origin' is the name of the remote, and 'main' is the name of the branch.

Go to your repository's page at GitHub.com and refresh it if needed - you should now see that it matches your local repository.

![git push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3m081luezisghwanz7d6.png)

## Pull

The `git pull` command is used to keep your files up to date by _pulling_ in changes from other contributors. It finds and downloads the latest changes, and then merges them into the selected branch.

`git pull` is actually two commands - `git fetch` and `git merge` combined.

If others were working on this project and we wanted to make sure our local file was up to date, we would use the following command: `git pull origin main`.

If there are no changes, a message will appear that says, "Already up-to-date." Otherwise, the changes will be merged.

It is also possible to see available changes without pulling them in. This is done by entering: `git fetch --dry-run`.

## Conclusion

We are now properly synced with GitHub - enabling us to push and pull data between local and remote servers.

Here is a quick recap of the commands we used:

- `ls -lah` - long list format, human-readable, and show hidden files.
- `git remote add` - add a new remote address
