---
date: "2018-06-15T08:55:00-04:00"
title: Fun With Server Apps This Week
toc: false
---

I've been having fun with a few new, and new to me, servers and apps this week.
Here's a quick summary.

<!--more-->

### Fathom

<img src="/img/2018/2018-06-15_fathom.jpg" alt="Fathom" />

Brett Terpstra
[mentioned](http://brettterpstra.com/2018/06/13/web-excursions-for-june-13-2018/])
the release of [Fathom](https://usefathom.com/) web analytics. I've been keeping
my eye open for a simple replacement to the no-longer-supported
[Mint](https://haveamint.com) and Fathom looked close. It's a single (Go) binary
and was super easy to install. I'm testing it with baty.net and so far so good.
It's a lightweight alternative to [Matomo](https://matomo.org) for simple
web stats.

I see people claim to have no interest in analytics on their blogs and good for
them. While I'm in no way obsessed with analytics or "engagement," it's nice to
know what and how often people are reading. Feel free to block the tracker.

### GoAccess

<img src="/img/2018/2018-06-15_goaccess.png" alt="GoAccess" />

> [GoAccess](https://goaccess.io) is an open source real-time web log analyzer and interactive viewer that runs in a terminal in *nix systems or through your browser.

When all I need is to quickly get a nice view of web server activity logs, GoAccess is very nice. It's easy to install and use via either a terminal or web browser. 

### Gitea

<img src="/img/2018/2018-06-15_gitea.png" alt="Gitea" />


I often wish we all used Mercurial or Fossil for source code management, but we
don't. We use Git. That's where all the tooling is, and it's where
[Magit](https://magit.vc) is, so I'm stuck with Git.

I don't want to store my private projects in someone else's app but I want a
wiki an issue tracking so I've installed [Gitea](https://gitea.io/en-us/). Gitea is 
a single-binary app written in Go and runs against an SQLite database. It's like
the opposite of running a self-hosted Gitlab instance. Works great.

### Caddy

[Caddy](https://caddyserver.com) is a clever, easy to use web server that automatically handles HTTPS. It's also my favorite thing, a single binary, so installation was basically just copying a file to the server.

My needs are simple, so Caddy has fit the bill quite nicely. I'm running all of
the above apps using Caddy as a proxy and it's all handled by a 20-line config
file. Nice.

