+++
author = "Jack"
categories = ["Journal"]
date = "2005-05-08T00:52:48+00:00"
title = "Typo running lighttpd and fastcgi"
url = "/2005/typo-running-lighttpd-and-fastcgi/"

+++

I have finally been able to get this Typo install running under [lighttpd][1] and fastcgi. This is good. All it took was a little irb> debugging and a small change to dispatch.fcgi. Once lighttpd was running I had to ProxyPass port 80 using Apache to a reserved port and viola!, the site is 10-15 times faster than running Apache/CGI.

 [1]: http://www.lighttpd.org/