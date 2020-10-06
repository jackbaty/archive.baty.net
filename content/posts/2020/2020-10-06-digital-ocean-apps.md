---
title: "Digital Ocean App Platform"
date: 2020-10-06
tags: ["DevOps","Digital Ocean","Hosting"]
categories: ["Tech"]
---

Digital Ocean released their new [App Platform](https://www.digitalocean.com/products/app-platform/) so I thought I'd test it with this blog's Hugo build since I'm a big fan of Digital Ocean.

I've learned a couple things.

First, any submodules must use the `https:` protocol. Using `git:` doesn't work. This was confirmed by DO support (which was fast, by the way).

My site won't build because it times out after 20 minutes. In contrast Netlify takes 3 minutes and Render.com takes 8 minutes. Not sure what can be done to speed things up, but I'm still playing with it.

