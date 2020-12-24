---
author: Jack
categories:
- Journal
date: "2016-04-10T13:15:31+00:00"
tags:
- hosting
title: SSL by default on baty.net
url: /2016/ssl-by-default-on-baty-net/
---

ServerPilot handles SSL via [Let's Encrypt][1] and will configure it automatically. All it took was a couple of button clicks and I have a cert configured and all non-SSL requests are automatically redirected to their https counterparts. I can't think of a good reason not to use it.

 [1]: https://letsencrypt.org