---
author: Jack
categories:
- Journal
date: 2016-04-23T13:28:12+00:00
title: mirror.baty.net
url: /2016/mirror-baty-net/
---

I love the idea of running a completely static site, but I don't like the process of publishing one. Still too finicky for me. Having a bunch of html files in a directory feels so good though!

Baty.net is currently running WordPress, which is in my opinion the easiest and most complete way to run a personal (self-hosted) blog. I've tried most everything available, and I keep coming back to WordPress because it really is capable of anything I'd want to do and it does it without fuss. Contrary to popular opinion, it doesn't feel "complicated" or "bloated" at all. I click "New Post", start typing, and click "Publish". Everything else is taken care of.

I do worry about longevity. Today, I'm still involved enough to not mind making sure WordPress and the server it runs on are up to date and running smoothly. Some day that will change and this site will likely languish and eventually break. The same thing applies if you're using Tumblr or Medium, etc. That is, eventually something will happen and you won't have access to your stuff. There's also the fear of being hacked or having the database explode or whatever.

This is where static sites shine. Drop some files in Amazon S3 or Github Pages and the site will work perfectly. At least until someone pulls the plug on your S3 or Github account. Point is, it's a piece of cake to drop a bunch of static HTML files on a web server somewhere.

I'd like to continue publishing with Wordpress while also having a long-term copy of everything. To that end, I've created a static copy of my entire blog and dropped it on Github (using Github Pages).

It's at [mirror.baty.net][1].

I created the copy using the command-line version of [htrack][2]. The following did the trick.

<pre class="lang:default decode:true  ">httrack "https://baty.net/" -O "/Users/jbaty/Desktop/batydotnet" \
"+baty.net/*" "-*share=*" "-*wordfence*" "-*/wp-json/oembed*" -v</pre>

I'll run httrack every few months or so and push the updates to github. Now I can blog using my preferred tool for the job and still have the benefits I want from static files. If I feel really ambitious I could probably automate the whole thing.

 [1]: http://mirror.baty.net/
 [2]: http://www.httrack.com