---
title: 'Git a Grip: Part 1 - Initial Setup'
date: '2021-02-18'
---

# Git a Grip: Part 1 - Initial Setup 💻

The goal of this series is to create small, easy-to-digest lessons that get progressively more in-depth. Hopefully, this can turn into a quick reference guide while also being a non-intimidating way to learn Git.

## What is Git?

In this article, we will be going over the basic steps to get you started with Git and GitHub.

> [Git](https://git-scm.com/) is a free open-source version control program written by the creator of Linux, Linus Torvalds. It is used for keeping track of changes in files and coordinating work among programmers who are collaboratively developing software.

## Install

No matter which operating system you use, installing Git is usually as simple as downloading a single file. In some cases, you may already have it installed on your computer.

If you are unsure if you already have Git installed or want to check which version you currently have, type `git --version` into your terminal to find out. It should return something like `git version 2.30.1`

### Windows

The Windows operating system does not come with Git pre-installed, but here are two simple ways to install it onto your PC:

- Download [Git](https://git-scm.com/)
- Install with [chocolatey](https://chocolatey.org/) by entering `choco install git -y` into the terminal.

If installing via chocolatey, remember to open Power Shell as an administrator. You can do this by right-clicking on the Start menu and selecting _Power Shell (Admin)_. If you have the Power Shell pinned to your taskbar, you can also hold down the Shift key and right-click the icon to select _Run as administrator_.

### macOS

macOS already comes with Git pre-installed, however, it is most likely an older version. To get the latest version use one of the following methods:

- Download [Git](https://git-scm.com/)
- Install with [homebrew](https://brew.sh/) by entering `brew install git` into the terminal.

### Linux

There is a good chance that Git will already be on most Linux distributions. If not, there is an official [install guide](https://git-scm.com/download/linux) for most of the popular distros.

## GitHub

GitHub is essentially Git for the cloud. It gives you a safe place to store your code and makes collaboration easier. It has all of the standard features of Git along with many more added-in. Arguably one of its biggest features is its social networking, which allows users from all around the globe to share their work and contribute to others.

### Create a GitHub account

If you don't have an account yet, signing up at https://github.com/ is painless. Also, if you are a student make sure to apply for the [Github Student Developer Pack](https://education.github.com/pack). It provides a TON of high-quality free resources including a GitHub Pro account, Frontend Masters subscription, free domain names, and much more!

### GitHub Desktop

While you are there, you might as well download the [GitHub Desktop](https://desktop.github.com/) application too. It is very useful and quite easy to use. Just be aware that this app cannot do everything that Git is capable of and we will be using the command line only in this series. Currently, it is only officially available for macOS and Windows, but there are some workarounds to get it on a few of the Linux distros. Check out [this](https://dev.to/rahedmir/is-github-desktop-available-for-gnu-linux-4a69) DEV article on installation instructions for Debian/Ubuntu and Red Hat/CentOS/Fedora distributions.

## Configure

We're almost finished with our initial setup. The last thing we need to do is configure Git to associate our work with ourselves. Open up your terminal and enter the following commands to update your Git profile:

1. Set your name:<br>
   `git config --global user.name "Your Name"`

2. Add your email address:<br>
   `git config --global user.email "youremail@address.com"`

3. Link to your GitHub account:<br>
   `git config --global user.username "github username"` (case sensitive!)

Make sure you are inputting `user.username` and not `user.name` otherwise you will overwrite your name and you will not be correctly synced to your GitHub account.

You can double-check any of your settings by typing `git config --global user.name` and so on. To make any changes just type the necessary command again as mentioned in steps 1-3 to overwrite.

One last configuration I make is to change the name of the initial branch from 'master' to 'main'. I'd rather use more inclusive terms when possible, and another popular name to use for it is 'trunk'. We will go over branches in depth later but for now, here is how to do this:<br>
`git config --global init.defaultBranch main`

_Edit: The above method only works after you have made your first commit._

Another way to do this without having to commit first is found [here.](https://stackoverflow.com/a/64769110/8298834) These are the steps listed in the post:

1. Navigate to the directory where your project sits.
2. In it, show hidden files since, by default, .git would be hidden.
3. Inside .git, there is a file, HEAD, open it in a text editor.
4. You'd see, ref: refs/heads/master. Simple enough, change, master to main.

## Conclusion

That should cover everything we need to get started, I'll see you in the next article where we will learn some basic terminal commands and create our first repository.
