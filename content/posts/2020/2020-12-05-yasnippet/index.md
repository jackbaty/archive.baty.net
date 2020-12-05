---
layout: default
title: YASnippet for Hugo frontmatter
excerpt: Tweaking my Emacs snippets for posting to Hugo
date:  2020-12-05
tags: ["Emacs"]
categories: ["Emacs"]
slug: yasnippet-for-hugo
---

I feel like I've never taken full advantage of [YASnippet](https://github.com/joaotavora/yasnippet) in Emacs.

YASnippet is a template system for Emacs that works a lot like other expansion tools such as TextExpander or Keyboard Maestro, but is built specifically for Emacs.

I have a few Keyboard Maestro snippets that I use in Org mode or Markdown mode and I'm slowly migrating them to Emacs. My most-used snippet is probably `hugo`, which helps with creating the YAML frontmatter used in Hugo posts. Here is the current version...

```
# -*- mode: snippet -*-
# name: Hugo
# key: hugo
# uuid: hugo
# --
---
layout: default
title: ${1:title}
excerpt: ${2:excerpt}
date:  `(format-time-string "%Y-%m-%d")`
tags: [""]
categories: ["${3:Misc}"]
featuredImagePreview:  preview.jpg
slug: ${1:$(replace-regexp-in-string " " "-" (downcase yas-text))}
---
$0
```

Here it is in action...


{{< image src="demo.gif" width="100%" caption="Inserting and using a snippet" >}}


In any Markdown file I type `hugo` and hit Tab and the snippet is inserted. Notice how I can simply tab between the "fields" and start typing, but if I just hit Tab again the default text remains. Also notice that it inserts today's date. The best part is the `slug:`. It mirrors whatever I type in the Title field but also transforms it by replacing spaces with hyphens and converting it to lowercase. One day I'll make the regex include more unwanted characters, but for now it does the job 90% of the time.

I've not even scratched the surface of what YASnippet can do, but even this little thing is pretty cool.
