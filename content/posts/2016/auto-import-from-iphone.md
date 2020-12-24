---
categories: []
date: "2016-01-23T09:12:20-05:00"
description: ""
tags:
- workflow
- iPhone
title: Auto Import From iPhone
---

I don't use Photos app and still don't trust iCloud, so I manually import
photos from my iPhone to my Mac.

I've been using Image Capture for this, but today I read
[This Engadget post](http://www.engadget.com/2014/03/19/how-to-autoimport-your-iphone-photos-using-os-xs-image-capture/)
and learned about using AutoImporter.app instead. I didn't know that was an
option.

Now, when I plug in my iPhone, AutoImporter opens and automatically copies all
the photos to ~/Photos/AutoImport and closes. The only issue was that the
photos were not automatically deleted after import, even though I had the
"Delete after import" option checked in Image Capture.

![Image Capture setting that doesn't do what I expected](/img/2016/delete-after-import.jpg)

I had to set a preference in the AutoImporter app itself. The app doesn't live
in an obvious location, so this will open it.

`open "/System/Library/Image Capture/Support/Application/AutoImporter.app"`

Then, in AutoImporter's preferences, check the "Delete items from camera after
successful import" option.

![AutoImporter preferences](/img/2016/AutoImporter_Preferences.jpg)



<!--more-->
