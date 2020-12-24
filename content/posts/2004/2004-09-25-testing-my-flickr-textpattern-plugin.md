---
author: Jack
categories:
- Journal
date: "2004-09-25T19:34:22+00:00"
title: Testing my Flickr Textpattern Plugin
url: /2004/testing-my-flickr-textpattern-plugin/
---

My work-in-progress gallery using the Flickr API took a bit of turn tonight, as I quickly converted it into a simple [Textpattern][1] plugin. The thumbnails below are generated using following tag:
  


    
    <txp:jab_gallry set="14145"
    linkTarget="window"
    columns="3" /></p> 

Where the set attribute is the id of a flickr photoset. Currently it can be configured to display any number of columns and the full image can be any size supported by the flickr account.&nbsp; The link target can also be set to "flickr" for opening the image page on flickr, "self" for viewing the large image on the same page as the thumbnails, or "window" for opening the large image in a new window.

It's just a proof-of-concept at this point, and only runs on PHP 5, as it uses the new SimpleXML extension. I'll try to clean it up and post the plugin soon.

 [1]: http://www.textpattern.com