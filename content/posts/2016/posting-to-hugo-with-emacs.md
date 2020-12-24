---
date: "2016-07-01T13:26:30-04:00"
description: ""
tags:
- blogging
- Hugo
- Emacs
title: Posting to Hugo with Emacs
topics: []
---

The thing I like least about blogging with Hugo is creating new posts. The
process involves hopping into a terminal, moving into the blog's directory,
typing `hugo new post/2016/ my-file-name.md` and then opening the generated file
in emacs and fixing the title.

I found
[this post by Toke Høiland-Jørgensen](https://blog.tohojo.dk/2015/10/integrating-hugo-into-emacs.html)
and things got much easier. Now it's a matter of C-x hugo-new-post, enter a
title and start editing.
