---
title: "Updates to my ox-hugo publishing setup"
date: 2020-09-01T17:25:00-04:00
tags: ["Emacs", "Hugo"]
draft: false
---

My [previous post](https://www.baty.net/2020/its-all-emacs/) was mostly a way to test updates to how I handle images and
publish posts using Org mode and [ox-hugo](https://github.com/kaushalmodi/ox-hugo).

New posts are created using the following Org mode capture template.

```emacs-lisp
(with-eval-after-load 'org-capture
  (defun org-hugo-new-subtree-post-capture-template ()
    "Returns `org-capture' template string for new Hugo post.
See `org-capture-templates' for more information."
    (let* ((title (read-from-minibuffer "Post Title: ")) ;Prompt to enter the post title
           (fname (org-hugo-slug title))
           (date (format-time-string "%Y-%m-%d")))
      (mapconcat #'identity
                 `(
                   ,(concat "* TODO " title)
                   ":PROPERTIES:"
                   ,(concat ":EXPORT_FILE_NAME: " date "-" fname)
                   ":END:"
                   "%?\n")          ;Place the cursor here finally
                 "\n")))

  (add-to-list 'org-capture-templates
               '("h"                ;`org-capture' binding + h
                 "Hugo post"
                 entry
                 ;; Make sure this file exists. I shouldn't hard-code the path but
                 ;; it's not in org-directory so oh well.
                 (file+olp "~/Dropbox/pub/baty.net-hugo/content-org/posts.org" "Posts" "2020")
                 (function org-hugo-new-subtree-post-capture-template))))
```

This is nearly identical to the one offered in the ox-hugo docs except that I
prepend an ISO date as part of the exported file name.

New posts are added to the `Posts->2020` heading in `./content-org/posts.org`.

One of my least favorite things about using static site generators is
that images are harder to manage. I'm letting [org-attach](https://orgmode.org/manual/Attachments.html) handle most of it. Image files
dragged into posts.org are copied to `./content-org/attach/` and automatically
renamed and linked in the post. I use the following setting:

`(setq org-attach-id-dir "./attach")`

When exporting the Markdown file, ox-hugo puts any attachments in
`./static/ox-hugo/`. At first I was put off by this since all my other images
go into `./static/img/YYYY`, but I came to realize that it makes sense to isolate
them in their own directory so it's easy to spot that they are managed by
ox-hugo. I may change this at some point.

I sometimes feel that the extra level of abstraction introduced by going from
Org->Markdown->HTML is a bit much, but it sure is clever and makes writing and
publishing easy and pleasant.
