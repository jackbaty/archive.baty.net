---
author: Jack
categories:
- Journal
date: 2005-11-20T19:40:26+00:00
title: VIM syntax coloring
url: /2005/vim-syntax-coloring/
---

I'm used to having lovely syntax coloring in VIM using a terminal. Alas, when logging in to my Textdrive account it was not to be. It didn't bother me enough to do anything about until just a few minutes ago.

So. Put the following in .profile

    TERM=xterm-color; export TERM
    CLICOLOR=1; export CLICOLOR

And make sure the following is in your .vimrc file&#8230;

    syn on

Ooooh. Pretty.