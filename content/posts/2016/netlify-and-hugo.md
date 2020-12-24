+++
date = "2016-09-05T11:12:10-04:00"
description = ""
tags = ["Hugo", "Netlify", "static", "blogging"]
title = "Netlify and Hugo"
topics = []

+++

I upgraded my iMac to the latest macOS Sierra beta. I thought everything was working
fine until I tried to publish a short blog post about the experience.

My [Hugo](http://gohugo.io) and/or Go installation was broken so I could not
build my site. This meant I couldn't publish to my blog. Ironic, no? Rather than
waiting for things to be fixed, I decided to find a way around the problem.

Enter [Netlify](https://www.netlify.com/).

I've wanted to use Netlify again ever since they'd removed the builds-per-day
limit. (I tend to make a lot of corrections after publishing). I added my site's
configuration to Netlify, pointed it to my
[Gitlab repo](https://gitlab.com/jackbaty/baty.net-hugo) and added the
appropriate DNS records. Five minutes later the site was built (via Hugo) and
deployed to Netlify's servers and CDN.

Now, every time I commit to master and push to Gitlab, Netlify automatically
builds and deploys everything for me. I'm a fan of simple, static files on a
server I control, but Netlify offers benefits that make it worth giving up a
little control. For example, I can fix a typo by editing a file using the
Gitlab web UI and the site will be built and deployed automatically. This lets
me make edits on my iPad, which can be handy.

Continuous Deployment, a CDN, easy rollbacks, CLI, free one-click SSL, and a
generous free tier. Pretty nice, Netlify.







