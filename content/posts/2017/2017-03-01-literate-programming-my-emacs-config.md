---
date: "2016-12-27T19:34:10-05:00"
slug: literate-programming-my-emacs-config
tags:
- Emacs
title: Literate Programming My Emacs Config
---


Inspired by [Sacha Chua](http://sachachua.com/), I decided to move my
Emacs configuration into an Org Mode file. This lets me organize things
nicely and keep notes about my progress, as I’m still learning a lot.

I use [Spacemacs](http://spacemacs.org/) and keep all of my
customizations in \~/.spacemacs.d/ so that \~/.emacs.d/ can belong
entirely to the Spacemacs installation. My init.el file had grown a bit
unwieldy, so I was looking forward to the opportunity to tidy things up.

First, I created a new file named jack.org, and copied all of my
customizations into it. Then I wrapped each section in a SRC block so I
could “tangle” it using Babel. Then I added Org headings around each
section and rearranged the sections so they made sense, at least to me.

Now, whenever I update something in jack.org I just press C-c C-v t and
all of the SRC blocks are rendered out to a file named jack.el

Spacemacs’ init.el file contains things I don’t know how to move, so I
kept that file in place and I simply load my customizations into the
appropriate section, like this…

``` {.commonlisp}
(defun dotspacemacs/user-config ()
  "Configuration function for user code.
This function is called at the very end of Spacemacs initialization after
layers configuration.
This is the place where most of your configurations should be done. Unless it is
explicitl specified that a variable should be set before a package is loaded,
you should place your code here."

  (load "~/Dropbox/Sync/dotfiles/spacemacs.d/jack.el")

)
```

I don’t know if that was the best way of doing things, but it worked.
Having my entire configuration as an Org Mode file is pretty nice. I’m
finding it to be much easier to manage and it’s made me less nervous
about cluttering things up in the future.

I’ve uploaded a [copy of my
configuration](http://static.baty.net/code/baty-emacs.html#org3dc9714)
for anyone interested.
