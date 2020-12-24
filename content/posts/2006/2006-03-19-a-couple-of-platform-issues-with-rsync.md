---
author: Jack
categories:
- Journal
date: "2006-03-19T17:07:05+00:00"
dsq_thread_id:
- 3131255761
title: A couple of platform issues with rsync
url: /2006/a-couple-of-platform-issues-with-rsync/
---

I've been writing scripts the past couple of days for synching things up between a few servers. I've wasted too much time already with 2 issues: 

1. When using rsync anywhere near mounted Windows shares, always include the option `-modify-window=1`. This will prevent rsync from trying to copy nearly \*every\* file each time. It has something to do with the differences in how Windows stores modification times. 

2. The latest OS X update to Tiger broke the &#8211;delete option. Target deletion simply doesn't work any more. As a workaround, I've installed the [DarwinPorts][1] version instead.&nbsp; Then I moved the broken binary out of the way and symlinked the ports version in its place. Something like this (assuming you already have DarwinPorts)&#8230; 


`
<pre>

sudo port install rsync

sudo mv /usr/local/bin/rsync /usr/local/bin/rsync-tiger

sudo ln -s /opt/local/bin/rsync /usr/local/bin/rsync

</pre>
</p>
<p>`

[1]: <http://darwinports.opendarwin.org/>