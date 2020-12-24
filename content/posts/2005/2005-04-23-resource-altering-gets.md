+++
author = "Jack"
categories = ["Journal"]
date = "2005-04-23T07:53:01+00:00"
title = "Resource altering GETs"
url = "/2005/resource-altering-gets/"

+++

I've seen a number of rants recently complaining about HTTP misuse, many of which were triggered by Jon Udell's [End HTTP abuse][1]. The problem isn't that they're wrong, the problem is that much of the real world doesn't care. I've written APIs which use HTTP GET to alter server resources. Guess what, it worked! It's not technically correct (at least not read-the-RFC correct), but it got the job done, and continues to do so. The folks a Bloglines, Flickr, and del.icio.us did the same thing &#8211; and those services and APIs work also &#8211; for a whole lot of folks. From the Udell article&#8230;

> 
> 
> "GET's purpose, however, is only to retrieve information. When you offer a service that updates a resource, you should disallow GET and require clients to use POST"
> 
> 

It's not a matter of right or wrong. I think it's an issue of solving today's problem vs solving tomorrow's. Besides, when's the last time anything great resulted from using something in only the way it was originally conceived?

 [1]: http://www.infoworld.com/article/05/04/20/17OPstrategic_1.html