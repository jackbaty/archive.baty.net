---
author: Jack
categories:
- Journal
date: "2006-07-09T10:08:00+00:00"
dsq_thread_id:
- 3131256223
title: Terminal.app directory colors
url: /2006/terminalapp-directory-colors/
---

Using Terminal in OS X is pretty nice overall. One thing that can be annoying is that when viewing directory listings, directories are rendered in blue, which is difficult to see if you're like me and use a dark background color. I found the following somewhere and it makes things a bit better by changing directories to cyan. Just add this to your ~/.profile &#8230;

export LSCOLORS=gxfxcxdxbxegedabagacad # cyan directories

There, that's better.