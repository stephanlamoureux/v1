---
title: 'Git a Grip: Part 1 - Initial Setup'
date: '2021-02-22'
---

# Git a Grip: Part 2 - Don't Fear Commitment 💍

In this lesson, we will start using some basic shell commands and the Git CLI (command line interface) to navigate the file system and to create our first repository. We will then cover the different steps taken until a file is officially committed into our local repository.

## The Terminal

Before we start working with Git, let's learn a few basic commands to help us move about our system. For this tutorial, the default shell will be fine to use with any operating system, just be aware that they all differ slightly. Windows uses PowerShell, macOS uses Zsh, and Linux typically defaults to Bash. However, if you are running Windows, I would recommend using [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) or Git Bash (comes bundled with the Git Windows installer) instead of PowerShell.

### Creating our workspace

Open your terminal and enter the command `mkdir git-a-grip`.
This will create a new directory named 'git-a-grip' inside of your home folder (unless you have changed your shell's default directory). We will be working in this directory for the rest of the series. Following that up, use the `ls` command to display all the files and folders in your current directory. You should see our newly created one.

Next, move into that new directory by entering `cd git-a-grip`.

## Git Started

Now that we are inside the 'git-a-grip' directory, we want to tell Git to start tracking any changes here. We simply type the `git init` command, and this will initialize Git in our current directory. You should see a message stating "Initialized empty Git repository in [your current location]". Great! now we have a working repository. A repo (repository) is just a collection of files related to a project.

_Note that any time we use a command that starts with 'git', we are using the Git CLI, which is just a way to run Git commands through the command line._

### Create a README

Open a text editor and create a file with "Hello World!" as its content - or anything else you would like. Save the file as 'README.md' into the 'git-a-grip' directory. We want to save it as markdown because that is what GitHub uses for its readme files. Notice that readme files are generally written in all uppercase, but it will not cause any issues if not. Back inside of your terminal, use the `ls` command to confirm that 'README.md' exists in your 'git-a-grip' folder.

## Ready For Commitment

Git tracks when files are added, removed, or even when just a single letter inside of a file has changed. It also tracks who made these changes and when they were made.

### Tracking

Since we have created a new file inside of our repository, let's check that Git has tracked this change. Inside of your 'git-a-grip' directory, check the status by entering `git status`. This should return a message that shows there is an untracked file called README.md and that we should use "git add" to track.<br>
![git status](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tcenq7kpq6xg1q101amc.png)

### Staging

Before our new file is committed, there is an intermediary step called staging that takes place. This is where you select all the changes you would like to go forward with. [Here](https://softwareengineering.stackexchange.com/a/119790/385595) is an answer from StackExchange that sums it up perfectly:

> Say you are working on two features - one is finished, and one still needs some work done. You would like to make a commit and go home (5 o'clock, finally!) but would not like to commit the parts of the second feature, which is not done yet. You stage the parts you know belong to the first feature, and commit. Now, your commit is your project with the first feature done, while the second is still in work-in-progress in your working directory.

To stage our README.md file, enter the `git add README.md` command from inside of your repository's directory. Running the `git status` command will now show that there is one new file ready to be committed.
![git add](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1bdoawl079tnvfbzc5k.png)

#### Adding multiple files

If you wanted to stage multiple files at once, you only need to add a space between file names: `git add file-1 file-2 file-3`.

To add **ALL** files, it just takes a period: `git add .`

#### Uh-oh

But what if you made a mistake and staged the wrong file? That problem is easily fixed with a single command: `git rm --cached README.md`

With `git rm --cached` the file is removed from staging, but the file itself is not deleted from the working directory. Test it out for yourself! Remove the README.md file, run `git status`, add the file back again, `git status` one last time and see how it all works.

### Committing

We are finally ready to commit our file. To do so, use the following command: `git commit -m "Created README"`. The "-m" flag stands for "message", and it's important to put a detailed description with each one of your commits. You will thank yourself later and if other developers look at the commit history it helps to see more than "I hope this works" in the description.

If you make a typo or want to change your description, use the following command to edit your commit message:
`git commit --amend -m "New message"`

### More changes

Open your README.md file, add another line to it and save. We can view the difference between the file now and from its last commit with the `git diff` command. You should see a + sign displaying the updated content. You may have to hit the 'Q' key on your keyboard to close the git diff message.
![git diff](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ww5s9ombr8wq58t0i582.png)

`git status` shows us that the README.md file has been modified. Stage and commit your latest change again, and that is it for now!

## Conclusion

We have gone over the basics of creating a local repository and learned a few Git commands.

Here is a quick reference:

- `mkdir` - make directory
- `cd` - change directory
- `ls` - list files and folders
- `git init` - initializes a new repository
- `git status` - shows any changes
- `git add` - stages your files
- `git rm --cache "filename"` - unstages the file
- `git commit -m "message"` - commits your changes with a description
- `git diff` - the difference from your last commit

In part 3, we will learn about connecting our local repository to a remote one and pushing the changes there.
