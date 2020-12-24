+++
author = "Jack"
categories = ["Journal"]
date = "2007-01-27T23:13:44+00:00"
title = "Tech Notes for today mod_ssl and mod_deflate"
url = "/2007/tech-notes-for-today-mod_ssl-and-mod_deflate/"

+++

It's the little things in a sysadmin's life that can drive him to drink. Example? Certainly&#8230; 

Been fighting a problem for days with Flash loading XML generated from a Rails app. Worked fine everywhere but IE 6. For some reason, the XML just would not load into a Flash movie. Tried everything, versions of edge Rails, Mongrel, Apache proxy issues, you name it. Running telnet sessions into Apache and watching headers fly by was where most of yesterday went. Decided to look at \*anything\* that might affect what was being sent over the wire and found that disabling compression (via mod_deflate) fixed things up nicely. So, moral of that story, if you're proxying Apache to Mongrel and dishing up XML from a Rails app, **don't use output compression.** 

Second, I needed to configure SSL on an existing Apache 2.2 install. Built everything, reconfigured/rebuilt apache, added the directives to http.conf and poof! everything started segfaulting. On a whim I moved the LoadModule directives around and found that **the mod\_ssl directive must go \*before\* the php5\_module** loads. Like so&#8230; 

LoadModule ssl\_module modules/mod\_ssl.so

LoadModule php5_module modules/libphp5.so

Sheesh.