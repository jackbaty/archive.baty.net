+++
date = "2020-08-29T10:54:17.637Z"
tags = ["Emacs"]
title = "Respecting visual lines in Doom Emacs"

+++

When using writing modes such as Org or Markdown in Emacs, I use `visual-line-mode` and prefer that vertical movements (using j & k) operate via visual lines and not logical ones. This does not seem to be the default behavior of [Doom Emacs](https://github.com/hlissner/doom-emacs). Of course there's a setting for this and of course I needed to look it up; `evil-respect-visual-line-mode`.

I tried adding the following to my config.el...

`(setq evil-respect-visual-line-mode t)`

It didn't work. I learned that the setting had to be configured _before_ loading Evil. But how to do that in Doom? I first tried moving it into Emacs 27's new `early-init.el`, which worked, but since early-init.el is part of Doom and not part of my personal config, I didn't love that solution.

The answer was to use Doom's `use-package-hook!` in `init.el`, like so...

```lisp
(use-package-hook! evil
  :pre-init
  (setq evil-respect-visual-line-mode t) ;; sane j and k behavior
  t)
```

Much better. If there's a more appropriate way, let me know.
