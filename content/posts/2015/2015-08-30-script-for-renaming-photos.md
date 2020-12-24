---
author: Jack
categories:
- Journal
date: "2015-08-30T19:38:44+00:00"
tags:
- photography
title: Script for renaming photos
url: /2015/script-for-renaming-photos/
---

<div id="attachment_4860" style="width: 310px" class="wp-caption alignnone">
  <img class="size-medium wp-image-4860" src="/img/2016/03/20150829_Wall_with_painted_stones-300x225.jpg" alt="Wall with painted stones" width="300" height="225" srcset="/wp-content/uploads/2016/03/20150829_Wall_with_painted_stones-300x225.jpg 300w, /wp-content/uploads/2016/03/20150829_Wall_with_painted_stones-768x576.jpg 768w, /wp-content/uploads/2016/03/20150829_Wall_with_painted_stones.jpg 800w" sizes="(max-width: 300px) 100vw, 300px" />
  
  <p class="wp-caption-text">
    Wall with painted stones
  </p>
</div>

I manage my image files manually and like them named in a particular way. Each image is named using its capture date and description. I write a description for _every_ photo I keep so I can easily see and find things using just my Mac’s Finder.

The above image is captioned “Wall with painted stones” and was taken on August 29th, 2015 so its filename should be “20150829_Wall with painted stones.jpg”. I use [Photo Mechanic][1] to ingest, name, tag, and file my photos but it will not allow renames to use the Description IPTC field. I was told that was because it’s too easy to create files with invalid characters. On the other hand, Lightroom handles this fine, but I’m trying to wean myself from Lightroom so I had to come up with something else.

I used the wonderful [exiftool][2] to create the following one-liner and it works perfectly…

    exiftool '-FileName<${CreateDate}_$Description.jpg' -d %Y%m%d%%-c -ext jpg .

 [1]: http://www.camerabits.com/