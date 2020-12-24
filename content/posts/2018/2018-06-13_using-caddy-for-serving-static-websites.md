---
date: "2018-06-13T18:17:00-04:00"
draft: false
slug: using-caddy-for-serving-static-content
title: Using Caddy for serving static content
---

I have a bunch of static files/websites laying around so I stood up an Amazon
Lightsail instance and installed the [Caddy](https://caddyserver.com) web server.

[static.baty.net](https://static.baty.net)

<!--more-->

A cool thing about Caddy is that it handles provisioning and installing SSL
certificates automatically from Let's Encrypt without me doing _anything_. It
also automatically redirects from http to https.

Here's the entire config file (Caddyfile)

```nil
static.baty.net {
  root /home/jbaty/apps/static
  log /home/jbaty/logs/static.baty.net.log
  gzip
  browse
}
```

The `browse` directive enables directory browsing, and it even looks decent.

{{< figure src="/img/2018/2018-06-13_caddy-browse.png" >}}

Caddy can do all sorts of neat tricks, like serving up Markdown files as HTML
pages. Just drop Markdown files in a folder and add a `markdown` directive. I'm
sure I'll find a use for that. It would be neat if it could do the same with
Org-mode files.

I'm sure I'll explore the various plugins available. I see there's one for Hugo
sites, which looks interesting.

Having super-simple HTTPS automatically should be compelling for people looking
to get on the HTTPS-everywhere train.
