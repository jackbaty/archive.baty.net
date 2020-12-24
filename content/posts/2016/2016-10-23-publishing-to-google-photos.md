+++
date = "2016-10-23T14:14:38-04:00"
slug = "publishing-to-google-photos"
tags = ["Photography", "Workflow"]
title = "Publishing to Google Photos Using Lightroom"

+++

I've really come to like Google Photos[^1]. 
I've been syncing my entire photos folder and it's seamless.

The problem I'm finding with publishing my entire ~/Photos folder is that photos
are copied to Google _before_ I've finished editing them. Even then, the
Lightroom edits aren't included. This means the published photos don't include
my carefully-applied cropping, color corrections, etc. I'm also finding that I
don't need _every_ photo published to Google Photos. I already have a solid
backup process. Google Photos is meant for finding and sharing my favorite
photos.

I solved the problem of selective publishing using Jeffrey Friedl's
excellent
[Folder Publisher Lightroom Plugin](http://regex.info/blog/lightroom-goodies/folder-publisher).
I have the plugin configured to publish to the appropriately-named "Publish to
Google Photos" folder. Friedl's plugin uses collections to determine which photos to
publish. I have a Smart Collection that collects all starred
photos from my entire library. When I Publish, all of the images in the Smart Collection are
exported using configured settings to a directory tree that mimics the original
files' locations. The Google Photos uploader is watching the "_Publish to Google
Photos" folder. 

![Plugin config](/img/2016/friedl-plugin.jpg)

![Exported photos](/img/2016/publish-to-google-photos.jpg)

The result is that Google Photos only contains specific, edited photos that I've
determined worthy of publishing. If my criteria for which photos to include
changes later, I only need adjust the Smart Collection and republish.

One shortcoming of this approach is that if I modify a photo after publishing,
the plugin will re-export the file, but Google Photos does not update the
published image. I just need to make sure to wait until I'm certain that edits
are complete before publishing the first time.


[^1]: Privacy concerns aside
