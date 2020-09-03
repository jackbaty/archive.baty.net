---
author: Jack
categories:
- Journal
date: 2003-05-09T01:32:12+00:00
title: Please test PHPetal 0.5
url: /2003/please-test-phpetal-05/
---

I have a new build of PHPetal available [here][1]

Here's a brief list of the changes&#8230;

Story is written using &#8216;w' rather that &#8216;a' mode.

Story text is wrapped to $maxlinelen before being written to disk.

Backslashes are stripped (using stripslashes()) if magic\_quotes\_gpc is
  

  
set.

Added system call which will "static render" the site using blosxom
  

  
after creating the story file

I'm not using blosxom, so if somecould spend a little time testing the
  

  
static rendering, it would help. I'll push it out as version 0.5 if
  

  
everyting looks good

 [1]: //www.jackbaty.com/downloads/phpetal-0_5-20030309.tgz"