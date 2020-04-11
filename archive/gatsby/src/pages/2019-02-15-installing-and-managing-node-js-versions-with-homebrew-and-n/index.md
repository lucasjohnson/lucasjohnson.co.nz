---
path: "/blog/2019-02-15/installing-and-managing-node-js-versions-with-homebrew-and-n"
date: "2019-02-15"
title: "Installing and Managing Node.js Versions with Homebrew and n"
tags: ['Node.js', 'Homebrew']
excerpt: "This tutorial will show you how to install Node with Homebrew, and how to manage Node versions with n."
bannerImage: "homebrew_logo.png"
thumbImage: "homebrew.png"

---

[Homebrew](https://brew.sh/ 'Homebrew homepage'), the self described "missing package manager for macOS and Linux," is and excellent all-in-one solution for installing, updating, and deleting packages that didn't come with your Mac.

This tutorial will show you how to install [Node.js](https://nodejs.org/en/) with Homebrew, and how to manage Node versions with [n](https://www.npmjs.com/package/n).

## Install Node with Homebrew

Open terminal and paste this into the prompt:

```bash
‌/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Now install Node by simply running `brew install node`.

> Pro tip: if you want to view the Node homepage, or any other package you have installed with Homebrew, you can do this easily by using the `brew home node` command.

## Switching Node versions with n

Sometimes a project you are working on requires an older version of Node. Luckily installing and switching between different versions is easy with the NPM package n.

Since you already have Node installed, install n globally with [NPM](https://www.npmjs.com/) (Node's Package Manager):

```bash
npm install -g n
```

## Switching between Node Versions with n

Now that you have n installed you can switch between Node versions easily with the following commands:

- `n ls` lists all versions of Node that are available.
- `n 10.15.1` installs a specific version of Node.
- `n` lists all locally installed versions of Node. If you want to switch to a different version use the `j` and `k` keys to select a version, then press enter to select that version. If you don't want to switch versions press `control + c` to exit.
- `node -v` reveals the version of Node you are currently using.
- `n latest` installs and switches to the latest, bleeding edge release.
- `n stable` installs and switches to the newest stable release.
- `n lts` installs and switches to the Long Term Supported (LTS) version.
- `n - 10.15.1` will remove that version of Node.
- `n prune` will remove all versions except the one you are currently using.

Happy switching!
