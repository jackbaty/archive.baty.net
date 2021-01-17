---
date: "2016-09-08T15:16:00+00:00"
description: ""
draft: false
tags:
- blogging
- hugo
title: Forestry.io
topics: []
---

In 2003 I was using [Blosxom](http://blosxom.sourceforge.net) to publish this blog. Even though Blosxom rendered via Perl, it was essentially a static blogging engine. All content was maintaned as simple text files. I tired of always editing text files and so I built a very simple static blogging CMS for Blosxom. I called it [PHPetal](/phpetal/). It worked well for what I needed, which was a web UI for editing content in a static CMS.

More than a dozen years later, I'm again using a static blogging engine for my blog ([Hugo](http://gohugo.io)). And once again, I sometimes miss having a simple UI for editing content, but there's no way I'm going to write another editor for it.

Enter [forestry.io](https://forestry.io).

Forestry is "A simple CMS for Jekyll and Hugo sites." The fact that it works with both Jekyll and Hugo is great (since I use Hugo but Jekyll seems to get all the love).

I imported my blog (via  Gitlab repo) and am writing this post directly in the
Forestry CMS. When a post is saved, it commits the file to the Gitlab repo,
which then automatically publishes and deploys via Netlify. It may be another
moving part, but it's optional and doesn't actually take away any control.

And in the end, it's still just HTML files on a server.
