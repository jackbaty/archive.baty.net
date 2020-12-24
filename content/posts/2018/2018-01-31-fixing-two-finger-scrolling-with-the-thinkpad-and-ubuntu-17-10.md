---
author: Jack
categories:
- Misc
date: "2018-02-01T01:14:00+00:00"
mf2_mp-syndicate-to:
- a:1:{i:0;s:4:"none";}
tags:
- linux
title: Fixing two-finger scrolling with the ThinkPad and Ubuntu 17.10
url: /2018/fixing-two-finger-scrolling-with-the-thinkpad-and-ubuntu-17-10/
---
Let me start by saying that I have no idea what I&#8217;m doing when it comes to desktop Linux. I&#8217;ve been running Ubuntu on this new ThinkPad for less than a week, and Ubuntu 17.10 for maybe two days.

One of the first unpleasant discoveries after upgrading from 16.04 to 17.10 was that two-finger scrolling on the trackpad stopped working. This took a bad situation and made it completely unbearable. I found the following workaround somewhere (I&#8217;ve misplaced the reference):

<pre class="example">$ sudo modprobe -r psmouse
$ sudo modprobe psmouse
</pre>

This works, but must repeated with each reboot. Looking forward to a more permanent fix.