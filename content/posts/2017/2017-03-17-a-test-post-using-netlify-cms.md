+++
date = "2017-03-17T14:05:28.481Z"
tags = ["Netlify", "CMS", "Static"]
title = "A test post using Netlify CMS"

+++

One of the things preventing “normal” people from using a static CMS is that there’s not a comfortable way to for them to edit and preview content. I myself *prefer* editing markdown in a local text editor. Most people don’t work well that way.

This post is being written in my browser using [Netlify CMS](https://github.com/netlify/netlify-cms). When saving, it’ll create a new markdown file in the Github repo and [Netlify](https://www.netlify.com) will automatically re-build the site and push it to the Netlify CDN.

*Update 2017-03-17* It worked very well. The only thing I still need to deal with is adding Tags to the CMS UI. I tried using a "String" type but that put single quotes around the entire thing, breaking the build. Oh well. This is a nice way of editing existing posts via an easy-to-use web control panel, for times I'm not at my desktop computer.
