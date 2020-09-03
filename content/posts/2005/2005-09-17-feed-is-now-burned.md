---
author: Jack
categories:
- Journal
date: 2005-09-17T22:02:26+00:00
title: Feed is now burned
url: /2005/feed-is-now-burned/
---

I've moved my RSS feed to [Feedburner][1]. Now I get free usage stats and they deal with the bandwidth. Not bad. The catch was that I needed to, as quietly as possible, redirect the existing URL for my feed (<xml/rss20/feed.xml>) to the feedburner location (<http://feeds.feedburner.com/jackbaty>.) [Lighttpd][2] makes it even easier than apache, since version 1.4 supports nested conditionals. Thanks to [Poocs.net][3], I just added the following to the lighttpd config&#8230;

    
    $HTTP["useragent"] !~ "FeedBurner" {
    url.redirect = (
    "^/xml/(rss|atom)" => "http://feeds.feedburner.com/jackbaty"
    )
    }
    

The more I use [lighttpd][2] the more I like it.

 [1]: http://www.feedburner.com
 [2]: http://lighttpd.org
 [3]: http://poocs.net