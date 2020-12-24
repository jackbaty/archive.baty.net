+++
date = "2018-08-04T16:34:47-04:00"
description = ""
tags = ["org-mode", "ios", "beorg"]
title = "Beorg and Sync"

+++

[Beorg](https://beorgapp.com) is a pretty good implementation of Org-mode on iOS. The latest version
introduced a couple new sync options and much better editing features.

My problem is that I keep my Org files in ~/org on my Mac and sync them between
machines using [Syncthing](https://syncthing.net). I don't want them in Dropbox
or iCloud, but I'd probably choose iCloud first. What I haven't figured out is
how to nicely create a symlink to the ~/org directory in the iCloud Drive directory. None
of the crazy paths I've tried seem to work. I suppose I could go the other way
and make ~/org a symlink into iCloud but I'd rather go the other way. Any ideas?
