---
title: "Using Flickr for my blog images"
date: 2018-09-18T20:06:22-04:00
lastmod: 2018-09-18T20:06:22-04:00
tags: ["flickr","blogging"]
---

I'm considering reversing my "no external dependencies" policy when it comes to my blog. The difficulty of dealing with images when using a static site generator (e.g. [Hugo](https://gohugo.io)) deters me from posting.

What if I used embedded Flickr photos instead? Like this...

<a data-flickr-embed="true" data-footer="true"  href="https://www.flickr.com/photos/jbaty/26577328563/in/dateposted-public/" title="Nikon F3"><img src="https://farm8.staticflickr.com/7789/26577328563_3ee4219452_b.jpg" width="1024" height="1024" alt="Nikon F3"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

It's super easy to copy a photo's Flickr embed code and paste it into a blog post. Otherwise I have to export from Capture One, copy the file to Hugo's image folder, copy or remember the filename, and then create a markdown image link in the post. I've got this somewhat automated, but still.

Embedding images has the benefit of making Flickr into a sort of CDN. Plus, the images can't get lost when I inevitably shuffle things around.

But there's of course one really solid argument against doing this, and that is: "What if Flickr goes away?" It's a great point, and one I've used to convince myself not to embed photos for about fifteen years now. I think maybe it's safe. Besides, if something _should_ happen to Flickr, I bet I'll be able to export everything and do some regular expression jiggery pokery to fix it all up.

I think I'll try it for a while.
