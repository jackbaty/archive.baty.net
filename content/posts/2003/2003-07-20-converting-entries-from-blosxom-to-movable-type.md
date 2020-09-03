---
author: Jack
categories:
- Journal
date: 2003-07-21T01:14:21+00:00
title: Converting entries from blosxom to Movable type
url: /2003/converting-entries-from-blosxom-to-movable-type/
---

I had several hundred weblog entries formatted for use in blosxom, and couldn't find any converters for creating a movable type import file from them. Being the resourceful fellow that I am, I wrote my own. It's a Python script that is called from within the directory of story files. It creates a single text file, mtimport, for importing into MT. I know very little Python, but it worked. If you're feeling brave, you can grab a copy of it for yourself, [blosxom2mt.py][1]

 [1]: /downloads/blosxom2mt.py