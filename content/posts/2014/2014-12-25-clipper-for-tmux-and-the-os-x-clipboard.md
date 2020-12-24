+++
author = "Jack"
categories = ["Journal"]
date = "2014-12-25T17:54:53+00:00"
tags = ["cli"]
title = "Clipper for tmux and the OS X clipboard"
url = "/2014/clipper-for-tmux-and-the-os-x-clipboard/"

+++

[wincent/clipper][1]:

> Clipper is an OS X "launch agent" that runs in the background providing a service that exposes the local clipboard to tmux sessions and other processes running both locally and remotely. 

I'm trying this as a replacement for the "reattach-to-user-namespace" workaround when dealing with tmux sessions and the OS X clipboard. Seems to work just fine.

 [1]: https://github.com/wincent/clipper