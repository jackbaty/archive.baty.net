+++
author = "Jack"
categories = ["Journal"]
date = "2015-07-03T16:10:00+00:00"
tags = ["Blogging", "org-mode"]
title = "Posting to WordPress via Org2Blog"
url = "/2015/posting-to-wordpress-via-org2blog/"

+++

Today I discovered [Org2Blog][1], which is "a tool to publish directly from Emacs’ org-mode to WordPress blogs". I've been learning Org Mode for the past few weeks so this seemed useful.

If all goes well, this will be my first post using Org2Blog. My plan is to use a single file and write each post as a subtree. It happens something like this…

<pre class="example">M-x org2blog/wp-login
M-x org2blog/wp-post-subtree
</pre>

That's it! I'll eventually need to figure out how to put my password in .authinfo rather than typing it each time, but so far this is pretty simple.

 [1]: https://github.com/punchagan/org2blog