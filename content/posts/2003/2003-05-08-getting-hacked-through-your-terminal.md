---
author: Jack
categories:
- Journal
date: 2003-05-09T01:32:12+00:00
title: Getting Hacked Through Your Terminal
url: /2003/getting-hacked-through-your-terminal/
---

A recent [Slashdot article][1] alerted me to an old problem of people dumping escape sequences into an apache log, causing all sorts of Bad Things to happen if someone reads the log file in a terminal. I love reading log files, so this was a concern. I use SecureCRT, which is not supposed to be vulnerable. The cool thing is that in one of the Article's comments, it was suggested that instead of using #tail -f /logfile to use #less +F /logfile, which opens the file in less, but behaves like tail and removes any escape sequences. Plus, I can move around in the file while I'm watching it.

 [1]: http://slashdot.org/article.pl?sid=03/03/01/2144223