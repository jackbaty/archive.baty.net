---
author: Jack
categories:
- Journal
date: "2006-01-28T06:02:04+00:00"
title: OS X Permissions
url: /2006/os-x-permissions/
---

I've been struggling with my G5 iMac at home recently. A number of applications just refused to run and others crashed at strange times. I repaired permissions, trashed prefs, uninstalled "extra" crap, ran AppleJack, but nothing helped. Poking around I found that the ownership on my ~/Library/Application Support/ directory was set incorrectly (501 instead of jbaty (503)). A quick&#8230; 

\`find /Library -user 501 -exec chown jbaty:admin {} ;\` 

&#8230;did the trick. And to think, I was planning on reinstalling the OS this weekend. Whew! Still can't figure out why none of the "repair permissions" tools worked properly. I also don't understand why I'm not user 501, since I'm the first user installed on this machine. Anyway, now I can go back to my usual time-wasting nonsense instead.