+++
date = "2018-10-04T09:23:38-04:00"
description = ""
tags = ["blogging", "hugo"]
title = "Hugo newContentEditor"

+++


Oh for crying out loud. I've wasted so much time working on ways to automatically edit new [Hugo](https://gohugo.io/) content immediately after typing e.g. `hugo new post/my-new-post.md`. I had no idea there was a built-in [setting](https://gohugo.io/getting-started/configuration/) for it.

```
newContentEditor = "bbedit" # or vim or emacs or whatever
```

Now all new posts are opened in BBEdit as soon as they're generated. That was easy. 