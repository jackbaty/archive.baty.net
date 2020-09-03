---
author: Jack
categories:
- Journal
date: 2013-07-27T00:00:00+00:00
tags:
- Tinderbox
title: Easier publishing of my Tinderbox blog
url: /2013/easier-publishing-of-my-tinderbox-blog/
---

I sometimes forget that [Tinderbox][1] can do everything. I was shuffling some things around here today and that means repeatedly needing to push the changes out to the server. This normally consists of exporting the HTML out of Tinderbox and switching to Terminal to run rsync. I have a tiny shell script called "pushblog" which runs rsync with all of the correct switches, etc. 

It dawned on my that I could run the pushblog script directly using Tinderbox's "runCommand()". I created a Stamp that looked like this&#8230;

![Creating the Publish stamp][2]

Then, whenever I want to sync my local site files to the server I just use Stamps->Publish. 

![Using the Publish stamp][3]

No more switching to a terminal to run it via command line. It's a small thing, but small things add up.

 [1]: http://www.eastgate.com/Tinderbox/
 [2]: /img/2013/pushblog-stamp.jpg
 [3]: /img/2013/using-publish-stamp.jpg