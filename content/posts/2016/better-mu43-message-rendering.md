---
date: 2016-01-01T09:05:55-05:00
description: ""
tags:
- Emacs
- email
- mu4e
title: Better Mu4e Message Rendering
---

When viewing an email message in
[Mu4e](http://www.djcbsoftware.nl/code/mu/mu4e.html), HTML is converted to text
using Emacs' built-in html2text by default. The results aren't always very
readable. Fortunately there are other options.

<!--more-->

The first thing I tried (since I'm on a Mac) was this:

```
(setq mu4e-html2text-command
      "textutil -stdin -format html -convert txt -stdout")
```

This converted things pretty well (and better than html2text) but it would lose
all of the links and much of the text alignment was off.

I then [read about](http://www.djcbsoftware.nl/code/mu/mu4e/Displaying-rich_002dtext-messages.html) `shr` and changed my configuration like so:

```
(require 'mu4e-contrib)
(setq mu4e-html2text-command 'mu4e-shr2text)
(add-hook 'mu4e-view-mode-hook
          (lambda()
            ;; try to emulate some of the eww key-bindings
            (local-set-key (kbd "<tab>") 'shr-next-link)
            (local-set-key (kbd "<backtab>") 'shr-previous-link)))
```

This works very well. Most HTML emails are now nicely readable right in Emacs
and the links are preserved. Plus, I can quickly jump to links by using the Tab
key.

Of course I can still just press `a V` to open any messages that _really_ needs
to be seen as HTML right in my browser.
