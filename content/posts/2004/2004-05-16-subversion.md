---
author: Jack
categories:
- Journal
date: "2004-05-16T22:44:36+00:00"
title: Subversion
url: /2004/subversion/
---

I hadn't noticed, but [Subversion][1] went 1.0 a few months ago. This is meant to be a replacement for the aging CVS version control system. The idea is to "fix" the long-standing problems with CVS without completely abandoning its concepts. It has directory versioning, common-sense branching, file renaming support and efficient handling of binary files. Sounds great! Let's try it out&#8230;

First off, it's a bitch to install.

I just spent the past 3 or 4 hours doing it. Gotta install Apache 2.0 with web-dav modules, can't find the Berkeley DB libraries, autoconf is too old, gotta compile arp-utils first, then configure and make so it's bootstrapped, then checkout the _real_ svn client, then configure make make install that one.&nbsp; I honestly don't know how I actually ended up with everything working, but it does &#8211; and it's nice.

I'll probably tinker with it more tomorrow, but I'm definitely going to find a project to import into it for real-world testing. Don't tell anyone at the [office][2]. They'll **kill** me if they think I'm even considering switching yet another software package out from under them!

 [1]: http://subversion.tigris.org/
 [2]: http://www.fusionary.com/