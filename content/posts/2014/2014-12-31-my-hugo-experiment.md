---
author: Jack
categories:
- Journal
date: "2014-12-31T23:12:21+00:00"
tags:
- Blogging
- CMS
title: My Hugo Experiment
url: /2014/my-hugo-experiment/
---

&nbsp;

[<img class=" size-full wp-image-4633 aligncenter" src="/img/2014/12/hugo.jpg" alt="hugo" width="435" height="116" />][1]

I promised myself I'd never switch blogging tools again<sup id="fnref-4212-liar"><a href="#fn-4212-liar" rel="footnote">1</a></sup>. Then yesterday I ran
  
across [Hugo][2].

I've tried static blogs before using Tinderbox, Octopress, Second Crack,
  
Blosxom, etc. They all work, some more easily than others, but they all took
  
too much effort and could be a dependency nightmare. Here's why I'm trying Hugo
  
and finding it so encouraging:

  1. **Speed**. Octopress/Jekyll took around 7 minutes to render my blog. That
  
    was always a deterrent to publishing.
  2. **No dependencies**. Hugo is written using [Go][3] and comes as
  
    a single binary with no dependencies. A breath of fresh air compared to the
  
    spiderweb of ruby gems and versions required by Jekyll/Octopress.
  3. **Live Reload**. Hugo comes with a mini web server built in and renders the
  
    site locally each time any content or template is changed and reloads the
  
    browser _instantly_. This shortens the feedback loop so much that it feels
  
    like I'm editing the static files directly.

Speaking of speed&#8230;

    baty.net hugo
    0 draft content
    0 future content
    1875 pages created
    96 tags created
    3 categories created
    in 579 ms
    

Rendering speed is no longer an issue.
  
The good news is that I don't think I broke anything critical this time.
  
There's still a lot of theme cleanup I'd like to do yet.

Converting from WordPress was surprisingly easy. I used a [plugin by Cyrill Schumacher][4] and had all of my 1800+ posts, images, etc. converted for use with Hugo in less than an hour. All links were preserved so I don't need to create a bunch of rewrite rules in Apache like every other time I've done this. Every step was easier than expected so I just kept going!

**UPDATE February 03, 2015:** I think Hugo may be the best static site generating CMS available. That said, I've gone back to WordPress for baty.net. Mostly because I'm lazy.

<li id="fn-4212-liar">
  I am a liar&#160;<a href="#fnref-4212-liar" rev="footnote">&#8617;</a> </fn></footnotes>

 [1]: /img/2014/12/hugo.jpg
 [2]: http://gohugo.io
 [3]: http://golang.org
 [4]: https://github.com/SchumacherFM/wordpress-to-hugo-exporter