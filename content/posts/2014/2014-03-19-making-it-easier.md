---
author: Jack
categories:
- Journal
date: 2014-03-19T00:00:00+00:00
tags:
- Tinderbox
title: Making it easier
url: /2014/making-it-easier/
---

This site <del>is</del> was built using [Tinderbox][1]. I continue to find ways to improve the process so that publishing is as easy as I can make it. One thing I still didn’t like was getting images in the right place and linking them. So I fixed it.

First I added an "ArticleImage" attribute so I don't have to type in the entire path for images links. I just type in the image's filename and the Tinderbox export template figures out the rest.

![][2]

That manages the lead image anyway, which is usually the only one.

That works well, but there was a little nagging thing remaining; opening the blog image folder in the Finder. It’s not like it’s actually difficult, and there are a number of quick solutions. For example, I could put the folder in the Finder sidebar or in the Dock. The trouble with those solutions is that those folders would _always_ be in my way even when I'm not writing a blog post.

So I made it easier to get to the folder right from the Tinderbox document. I just added a "Stamp" which opens the folder in the Finder.

![][3]

The Action for the Stamp is this:

<pre>runCommand("open /Users/myuser/Dropbox/baty.net/img/2014/")</pre>

Now I can select "Stamps->Open Image Folder" and up pops the Finder window. A small but useful tweak I think.

 [1]: http://www.eastgate.com/Tinderbox/
 [2]: /img/2014/keyattribs.jpg
 [3]: /img/2014/stamps-2014-03-19.jpg