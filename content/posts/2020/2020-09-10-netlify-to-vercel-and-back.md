---
categories:
- Software
date: "2020-09-10"
tags:
- Static
title: From Netlify to Vercel and Back
---

Baty.net has been a [Hugo](https://gohugo.io)-managed static site for a few years now. I've been using [Netlify](https://netlify.com) for hosting this latest iteration, but I thought I'd give [Vercel](https://vercel.com) (formerly Zeit) a try.

Getting things running with Vercel was simple and worked very well. The site was at least as fast or faster as it was on Netlify. This was encouraging.

One downside of these services is that it takes a little time to build and deploy sites. This is especially true with my site, which generates something like 6,000 pages and more than 1GB of images and supporting files. Netlify takes between 2 and 3 minutes to build and deploy updates. Vercel, on the other hand, was taking more than 10 minutes. That's too slow for me.

I tend to just type and publish. It's only _after_ I see the post in production that I spot errors. Yes, I should edit first, but that's no fun, so I don't. I don't want to wait 10 minutes until a fixed typo is deployed.

Honestly, my preference would be to just put the site files on an EC2 instance or wherever and just rsync changes. That only take a few seconds each time. But, I don't get the benefits of a CDN and I have to keep any eye on things like SSL, etc. and I'm less interested in mantaining servers and apps lately.

So, for now, it's back to Netlify.
