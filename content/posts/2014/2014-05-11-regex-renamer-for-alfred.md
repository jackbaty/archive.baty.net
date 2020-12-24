---
author: Jack
categories:
- Journal
date: "2014-05-11T19:00:00+00:00"
tags:
- productivity
- software
title: RegEx Renamer for Alfred
url: /2014/regex-renamer-for-alfred/
---

If you're an [Alfred][1] user and frequently need to rename files in the Finder, you should take a look at [RegEx Renamer][2]

![Screenshot][3]

I use this all the time for things like changing case, removing spaces, adding dates, and so on. It's also helping with my recent decision to consistently name files. I use the following format&#8230;

`YYYY-MM-DD_NNN_descriptive name here.md`

That's basically a date, topic, and name, separated by underscores. The Topic, "NNN", can be anything. For me it's usually a project abbreviation. I of course have many files _not_ named like this. I use RegEx Renamer to prepend the date to the filename using the files creation date. Select the target files in Finder, bring up Alfred and enter

`regex (.*)@$cy$cm$cd_JAB_$1{-l}`

This takes a file created on say, Jan 3 2013, named "my file.txt" and renames it to "2013-01-03\_JAB\_my file.txt".[^initials]

There are many was to rename files, but this one works pretty well for me.

[^initials]:    
    I use my initials, "JAB", for personal files]

 [1]: http://www.alfredapp.com
 [2]: http://www.alfredforum.com/topic/1754-regex-renamer-20-batch-rename-files-or-folders-with-regular-expression/
 [3]: /img/2014/regex_last.png