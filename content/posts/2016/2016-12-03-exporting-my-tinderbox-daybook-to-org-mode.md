---
date: "2016-12-03T09:34:12-05:00"
slug: exporting-my-tinderbox-daybook-to-org-mode
tags:
- Tinderbox
- Org mode
- journaling
title: Exporting my Tinderbox Daybook to Org Mode
---

Every month I export my [Tinderbox](http://www.eastgate.com/Tinderbox/)
"Daybook" entries so that I can print and bind them (a whole other story). I
have a pretty good [Org Mode](http://orgmode.org) setup for creating PDFs so I
wanted the output to be Org Mode files. 

Previously, I used the built-in OPML templates and then converted the output to
Org Mode using [Pandoc](http://pandoc.org). This was all a bit cumbersome, so I
created simple Org Mode export templates, based on the default OPML templates.

Template: Org Mode

```
#+TITLE: Daybook ^value(attributeEncode($Name))^ 2016
#+DATE: 
#+SETUPFILE: ~/Dropbox/org/_SETUP_DAYBOOK
#+OPTIONS: toc:nil num:nil >:nil ^:nil <:nil H:2
#+STARTUP: overview

^action($HTMLExportExtension=".org")^

^children(/Templates/Org Mode/Org Mode Item item)^
```

The front matter sets up my preferred options and LaTeX settings.

Template: Org Mode Item

```
^if(ChildCount)^*^indent("*",^value($OutlineDepth(parent)-1))^ ^value($Name)^ - ^value(format($StartDate,"M0-D w"))^

^value($Text)
^children(/Templates/Org Mode/Org Mode item)^*^indent("*",^value($OutlineDepth(parent)-1))^
^else^*^indent("*",^value($OutlineDepth(parent)-1))^ ^value($Name)^  - ^value(format($StartDate,"M0-D w"))^

^value($Text)^
^endIf^
```

This just loops over the notes and outputs org-formatted text.

So, to process my monthly Tinderbox Daybook I do this...

1. Select the month in Tinderbox
1. Choose "Export Selected Note"
1. Open the exported file in Emacs
1. Hit "CTRL-x CTRL-e l o" to export a PDF
1. Print.

It looks like this:

![Daybook](/img/2016/daybook-export.jpg)

Much better!
