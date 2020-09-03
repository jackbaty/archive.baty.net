---
author: Jack
categories:
- Journal
date: 2004-03-31T17:18:36+00:00
title: Did I mention that I hate IE?
url: /2004/did-i-mention-that-i-hate-ie/
---

Turns out there's an obscure bug in some versions of internet explorer that choke on http POSTs when using SSL. Suddenly, form validation scripts get inadvertently triggered and variables that you're absolutely _certain_ are there just go POOF! but only once in a while. Makes it a bugger to debug.

For those interested, the following addition to either httpd.conf or a valid .htaccess file in Apache seems to be the solution:

SetEnvIf User-Agent &#194;".MSIE.&#194;"
  

  
nokeepalive ssl-unclean-shutdown
  

  
downgrade-1.0 force-response-1.0