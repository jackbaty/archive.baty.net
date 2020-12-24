---
date: "2018-05-05T15:02:35-04:00"
description: A reasonably simple way to manage dotfiles
draft: false
lastmod: "2018-05-05T15:02:35-04:00"
tags:
- config
title: Managing Dotfiles With GNU Stow
---


Every so often I reconfigure the way I manage my dotfiles. There are all sorts of tools out there for this.

- [Dotbot](https://github.com/anishathalye/dotbot)
- [Dotdrop](https://github.com/deadc0de6/dotdrop)
- [Mackup](https://github.com/lra/mackup)
- [yadm](https://github.com/TheLocehiliosan/yadm)
- [RCM](https://github.com/thoughtbot/rcm)

You get the idea. I never got along with any of them for one reason or another.

I'm now trying [GNU Stow](https://www.gnu.org/software/stow/manual/stow.html). Stow isn't made specifically for managing dotfiles but it does the job pretty easily. I like it because I can easily organize things and install/update them as needed. To do this I group related dotfiles into folders in `~/.dotfiles`. Like this...

<img src="/img/2018/2018-05-05_dotfile-tree.png" alt="Dotfile tree"/>

Each directory contains the folders full of dotfiles organized the way I want them to be symlinked in $HOME. For example, I can have Stow create and symlink dotfiles for Vim by typing `stow vim`. This creates symlinks for both the .vimrc file and the .vim directory. I like grouping things by app, but I could also group by environment or machine if I wanted.

I like this because it makes sense to me and there's not too much magic involved. Stow can be installed on macOS using Homebrew.

`brew install stow`

Here are a few articles that helped me get started.

- [Managing dotfiles with GNU Stow - taihen.org](https://taihen.org/managing-dotfiles-with-gnu-stow/)
- [Managing dotfiles with GNU stow - Alex Pearce](https://alexpearce.me/2016/02/managing-dotfiles-with-stow/)
- [Dotfile Management With GNU Stow - Jon Leopard](https://www.jonleopard.com/dotfile-management-with-gnu-stow/)
- [Using GNU Stow to manage your dotfiles - Brandon Invergo](http://brandon.invergo.net/news/2012-05-26-using-gnu-stow-to-manage-your-dotfiles.html)

datetime-separator
