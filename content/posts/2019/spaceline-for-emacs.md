+++
title = "Spaceline for Emacs"
date = 2019-08-26T15:29:00-04:00
tags = ["emacs"]
draft = false
+++

I'm trying [Spaceline](https://github.com/TheBB/spaceline) in Emacs.

> This is the package that provides Spacemacs with its famous mode-line theme. It has been extracted as an independent package for general fun and profit.

I'd been using a super minimal mode line and was finding it a bit _too_ minimal. Rather than just add things to my config, I let Spaceline do it for me. Looks like this:

{{< figure src="/img/Posts/2019-08-26-spaceline-2019-08-26.png" >}}

The relevant config looks like this...

```emacs-lisp
(use-package spaceline
  :ensure t)

(use-package spaceline-config
  :ensure spaceline
  :config
  (spaceline-helm-mode 1)
  (spaceline-emacs-theme)
  (spaceline-toggle-org-clock-on)
  (spaceline-toggle-minor-modes-off)
  (spaceline-toggle-version-control-off))
```
