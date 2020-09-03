---
title: "Fixing Easy Hugo"
date: 2019-01-16T13:20:50-05:00
tags: ["hugo","emacs"]
---

I'd been fighting with what I thought was a [bug in easy-hugo](https://github.com/masasam/emacs-easy-hugo/issues/47), but when I stopped posting with Hugo I sort of forgot about it.

Now that [I'm back](https://www.baty.net/2019/burning-down-the-other-blogs/) I finally dug in and tried solving the problem.

The solution was simple but took me hours to find. I had put the following in my `config.toml` file...

`newContentEditor = "vim"`

Posting with Emacs/easy-hugo would obviously (in hindsight) not care for that. I removed the setting and I'm off and running with [easy-hugo](https://github.com/masasam/emacs-easy-hugo/).

Here's my config, fwiw...

```
;; Hugo config

;; This fixes an easy-hugo error when switching publish directories
;; when there are many
(setq max-specpdl-size 10000)
(setq max-lisp-eval-depth 10000)

(use-package easy-hugo
  :ensure t
  :init
  (setq easy-hugo-basedir "~/Dropbox/sites/blog/")
  (setq easy-hugo-url "https://www.baty.net")
  (setq easy-hugo-image-directory "img/2019")
  (setq easy-hugo-postdir "content/post/2019")
  (setq easy-hugo-previewtime "300")
  (setq easy-hugo-preview-url "http://localhost:1313/")
  (setq easy-hugo-bloglist
	;; blog2 setting
	'(((easy-hugo-basedir . "~/Desktop/quickstart/")
	(easy-hugo-url . "http://example2.com")
	(easy-hugo-sshdomain . "myblogdomain")))))
```
