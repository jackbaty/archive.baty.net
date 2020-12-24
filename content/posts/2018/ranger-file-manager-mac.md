---
date: "2018-02-19T10:25:41-05:00"
description: ""
draft: false
lastmod: "2018-02-19T10:25:41-05:00"
tags:
- cli
- app
title: Deleting files Using Ranger on My Mac
---

I recently learned about [Ranger](https://github.com/ranger/ranger) and have been loving it on Linux. Ranger "is a console file manager with VI key bindings". Turns out that it also works on macOS so I've been using it there too.

One thing that I wanted to change was the way ranger deleted files. I'm new here, but I think ranger deletes using `rm` which I find a little scary when using a new tool. What I wanted was for deleted files to be moved to the Trash instead.

I found a small command-line program called [trash](https://github.com/ali-rantakari/trash) which does just that. All I needed to do is install it using `brew install trash` and add the following to ranger's `rc.conf` file.

`map DD shell trash %s`

Now I can select one or more files and press "DD" to have them moved to the macOS Trash. The original method is still available via "dD".
