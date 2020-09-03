---
author: Jack
categories:
- Journal
date: 2006-05-05T15:16:33+00:00
title: Visual Diff on OS X
url: /2006/visual-diff-on-os-x/
---

I just found a python script that will take the output from `svn diff` and run it through FileMerge.app so there's a nice pretty visual diff to look at. 

It's called svndiffshim.py and can be found [here][1]. 

To use it, copy the script somewhere (like ~/bin) and make sure it's executable (`chmod +x ~/bin/svndiffshim.py`) 

Then add something like the following to your ~/.subversion/config file&#8230; 


`
<pre>

[helpers]

diff-cmd = /path/to/svndiffshim.py

</pre>
</p>
<p>`

[1]: <http://svn.red-bean.com/bbum/trunk/hacques/svndiffshim.py>