---
title: "Back to Netlify"
date: 2018-05-19T09:21:15-04:00 
lastmod: 2018-05-19T09:21:21-04:00
draft: false
description: "Netlify is so easy"
tags: ["blogging", "netlify", "aws"]
---

baty.net is back to being built and deployed using
[Netlify](https://netlify.com). I [moved everything to Amazon
S3](/2018/moving-to-amazon-s3/) a couple of months ago as a way to figure out
how to do that. I still think S3 is a great way to host static sites that don't
change often, but I haven't liked it quite as much for hosting a site that is
updated frequently, like my blog. 

Using S3 required a combination of sync scripts, invalidations, keys, cloudfront
distribution configuration, etc. Overall it felt like more trouble than it was worth.

So, back to Netlify. It goes something like this:

1. Create a "site" in Netlify
2. Point it at a Github repo
3. Update DNS

Now I have continuous deployment, automatic SSL, a global CDN, and a bunch of
other stuff I don't even use yet. For free.


