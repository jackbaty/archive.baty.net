+++
date = "2020-02-08T10:09:00-05:00"
draft = false
tags = ["meta", "sysadmin"]
title = "Moving sites around"

+++

This is just me taking notes about where stuff is and where it's going,
server-wise.

[Running Cloudron](https://jack.baty.net/2020/cloudron/) has been a great experience, but I don't know that I can swing
the $30/month fee for the convenience. Rumor has it that they are
working on a more palatable pricing structure for personal use. I'll look
forward to that, but for now...

I've spun up a fresh EC2 instance and installed and moved a few
things from other servers.

First, everything is served using v2 of the [Caddy web server](https://caddyserver.com). Caddy is
delightful and simple. Automatic HTTPS, Markdown rendering, one-line reverse
proxying, and it's written in Go so there's just a single binary to manage.

I've moved the static sites [baty.net](https://baty.net/) and [static.baty.net](https://static.baty.net/) there so far.

I've moved my [Gitea](https://gitea.io/en-us/) instance. Gitea is also written in Go so that was pretty easy.
I'm using Sqlite for the Gitea database, which keeps things simple.

Up next is node.js for my [RudimentaryLathe.org](https://rudimentarylathe.org/) wiki. The wiki is the only thing
remaining on that instance so once it's moved I can delete the instance.

For now I'm leaving Ghost ([jack.baty.net](https://jack.baty.net/)) and Lychee ([galleries.baty.net](https://galleries.baty.net/)) on
Cloudron since I get two apps there for free.

I recently mirrored the defunct [copingmechanism.com](https://copingmechanism.com) blog and dropped it into an
S3 bucket with a CloudFront distribution in front of it (for SSL). I may want to
move that into a static site on the new instance, just to help keep things together.

This leaves me with two EC2 instances, one for Cloudron and one for the stuff I
manage myself. The self-managed one is currently sized at t3.small but I bet I
could get away with a t3.micro instance so I may size that down if I decide to
keep Cloudron.

It's fun to tidy things up once in a while.
