---
date: "2016-12-30T19:59:49-05:00"
slug: previewing-markdown-in-emacs-using-marked
tags:
- Emacs
- Markdown
title: Previewing Markdown in Emacs using Marked
---


In some cases I prefer to edit files using Markdown rather than Org
Mode. Marked App works great for previewing Markdown and quickly sharing
or saving in various formats.

The [Marked Bonus Pack](https://github.com/kotfu/marked-bonus-pack)
contains a bit of Lisp for sending my current Emacs buffer to Marked for
preview…

``` {.example}
(defun markdown-preview-file ()
  "use Marked 2 to preview the current file"
  (interactive)
  (shell-command 
   (format "open -a 'Marked 2.app' %s" 
       (shell-quote-argument (buffer-file-name))))
)
(global-set-key "\C-cm" 'markdown-preview-file)
```

Now I just hit “C-c m” and the current buffer is instantly previewed in
Marked App. Nice.
