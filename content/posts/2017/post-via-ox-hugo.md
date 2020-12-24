---
date: "2017-08-02T06:31:56-04:00"
description: It's possible to publish Hugo posts via Org Mode
draft: false
tags:
- blogging
- hugo
- orgmode
title: Posting to Hugo from Org Mode using ox-hugo
---

> [ox-hugo](https://github.com/kaushalmodi/ox-hugo) is an Org exporter backend that exports Org to Hugo-compatible Markdown (Blackfriday). That also includes the generation of front matter (in TOML or YAML format) required for Hugo posts.

What that means is that I can have an org file and each headline will become a
hugo-compatible markdown file with all the appropriate front matter? Awesome!

I'll have to think about whether to use it regularly for baty.net since it adds
a level of abstraction between the original "master" post in Org Mode
and the final Markdown post used to render the site. Basically, I need
to "render" each post twice. I'll try it with a few posts to see how
it feels. (You're soaking in it!)
