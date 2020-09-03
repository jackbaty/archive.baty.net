+++
title = "Let's try using ox-hugo again"
date = 2018-05-20T13:52:00-04:00
tags = ["blogging", "hugo", "org-mode"]
draft = false
+++

Last year, while looking for ways to create a blog using Org-mode, I ran across
[ox-hugo](https://github.com/kaushalmodi/ox-hugo). It was clever, but I was uncomfortable with yet another layer of
abstration between the source text and the rendered HTML. I may have gotten over
that fear.

I'm slowly standardizing on using org-mode files for all of my writing. I'll
hate myself for this if I ever decide to stop using Emacs, but I'll deal with
that then.

[Hugo](https://gohugo.io) has org-support [built-in](https://gohugo.io/content-management/formats/), but it only supports a subset of org-mode's
features. For example, URLs or org-formatted links in footnotes are not rendered
as links in the final HTML files.

Ox-hugo works via the standard org-mode export dispatcher. The
result is rendered as a normal Hugo Markdown file. This means that if I decide to stop
using Org-mode for blog posts, or even move to another markdown-based site
builder, all of my posts are still there and usable as-is.

Another nice feature is that all of my posts are in a single org-mode file, one
subtree per post. I like this because I don't have to create a
properly-formatted markdown file in a specific folder in order to create a post.
I just set the `EXPORT_FILE_NAME` property and ox-hugo takes in from there.

Of course I'm using a handy capture template, as provided by the ox-hugo docs.
This lets me type `C-c c h` to quickly create a new draft post.

```emacs-lisp
(with-eval-after-load 'org-capture
  (defun org-hugo-new-subtree-post-capture-template ()
    "Returns `org-capture' template string for new Hugo post.
See `org-capture-templates' for more information."
    (let* ((title (read-from-minibuffer "Post Title: ")) ;Prompt to enter the post title
           (fname (org-hugo-slug title)))
      (mapconcat #'identity
                 `(
                   ,(concat "* TODO " title)
                   ":PROPERTIES:"
                   ,(concat ":EXPORT_FILE_NAME: " fname)
                   ":END:"
                   "%?\n")          ;Place the cursor here finally
                 "\n")))

  (add-to-list 'org-capture-templates
               '("h"                ;`org-capture' binding + h
                 "Hugo post"
                 entry
                 ;; It is assumed that below file is present in `org-directory'
                 ;; and that it has a "Blog Ideas" heading. It can even be a
                 ;; symlink pointing to the actual location of all-posts.org!
                 (file+olp "all-posts.org" "Blog Ideas")
                 (function org-hugo-new-subtree-post-capture-template))))
```

\`\`\`

All subtrees marked as `TODO` are considered to be drafts. Toggling the
status to `DONE` sets "draft = false" and also sets the publish date to the
current time.

Tags are set just like normal org headings (e.g. "tag1:tag2").

Being able to directly publish to my Hugo-based blog while still living in an
Org-mode is pretty sweet.
