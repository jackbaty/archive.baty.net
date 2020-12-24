+++
date = "2016-11-16T20:43:36-05:00"
slug = "selfhosted-gitlab"
title = "Self-hosted Gitlab"

+++

As I get older I'm less inclined to want to manage my own servers, but I've been
enamored with [Gitlab](http://gitlab.com) lately, so I decided to try installing
my own copy of Gitlab CE.

It turned out to be easy enough. I used a
pre-configured [Digital Ocean](https://digitalocean.com) droplet. I then
installed an SSL cert from [Let's Encrypt](https://letsencrypt.org), imported a
few of my repos and I was off and running.

I have not yet tried adding any Runners or other CI tools but so far it's pretty
painless. Hard to beat having control over the environment and the
privacy/security that brings. All for the price of a $20/month server instance.


