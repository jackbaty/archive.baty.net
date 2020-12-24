---
author: Jack
categories:
- Tech
date: "2018-08-28T12:21:19+00:00"
mf2_mp-syndicate-to:
- a:1:{i:0;s:4:"none";}
tags:
- blogging
- hugo
- static
- wordpress
title: The Downsides of a Static Site Generator – Drinking Caffeine
url: /2018/the-downsides-of-a-static-site-generator-drinking-caffeine/
---
<a class="u-like-of" href="https://www.drinkingcaffeine.com/2018/08/26/the-downsides-of-a-static-site-generator/" rel="like-of">Martyn Chamberlin</a>:

> On the whole, the cons of a static file generator seem less tangible than the pros

This is a topic I&#8217;m a little obsessed with. I struggle with static-vs-CMS on a regular basis. Martyn makes good points, but also a few that make less sense to me. Each of his points favoring static site generators are spot on, although just saying they&#8217;re &#8220;geekier&#8221; would be enough. No need to blame it on ego.

It&#8217;s the downsides that I have some issues with.

> Database-driven design gives you better flexibility

I&#8217;d say it gives you _different_ flexibility. Some of the things done using a database come easily for us ego-driven nerds using text files and our favorite editor. The SSG handles most of the rest.

> Every time you do a new deploy in a file-driven system, you have to rebuild the entire website

That&#8217;s true. On the other hand, with a WordPress site you have to rebuild each page _every time it&#8217;s requested_ <sup id="fnref-1764-cache"><a class="jetpack-footnote" href="#fn-1764-cache">1</a></sup>.

> Yes, there’s a slight performance cost to increasing the number of rows in the wp_posts table, but it’s infinitesimal compared to increasing the file count in a file-driven system

Re-rendering my entire 3000+ page Hugo site takes about 2 seconds, so I don&#8217;t agree with this one. &#8220;Infinitesimal&#8221; seems a bit of an exaggeration, at least. I don&#8217;t feel at all like I&#8217;m slowing anything down by adding new static posts to Hugo. And again, any performance hit is once-per-deployment rather than once-per-view.

> Related, every time you write a new post in Hugo, you’re creating a new file in a flat directory. Pretty soon you have hundreds or thousands of files

Yep. I have thousands of small, easily manageable, storable, backup-able, versionable text files in whatever directory structure I want on my own machine. So soothing!

> WordPress has 28% of the global market. How much does Jekyll have? How much does Hugo have? A lot less than that.

True. The ecosystem around a product is important. There are two parts of the longevity consideration: How long the platform is available, and how long the content is available. He misses the second part here. I&#8217;m convinced that the odds of my content being available as a static site in 40 years is higher than if I were running it with WordPress. And even the platform availability matters less with a static generator, as I expect to be able to render static Markdown files using _something_ for the foreseeable future. Still, he&#8217;s right about the ecosystem. WordPress offers a ton of resources.

> It’s harder to get Go compiled and running than PHP and MySQL, simply because PHP and MySQL are more popular

I don&#8217;t understand this one, since you don&#8217;t even need to have Go installed to use Hugo. Hugo is a self-contained, pre-compiled binary with basically zero dependencies. Jekyll is a different story, but for some reason he didn&#8217;t use that in his example.

> Getting your content from WordPress is a lot easier than from Jekyll or Hugo. That’s because it’s easier to get importable data out of a database than it is from a collection of markdown files.

I don&#8217;t understand this one either. I don&#8217;t have to &#8220;get my content&#8221; from Hugo. I already have it, no? It&#8217;s more like I have to put my content into Hugo than get it out.

Anyway, I&#8217;m not trying to pick on the article, really. I struggle with these same issues so I&#8217;m just using it as a way to think things through.

I run both static sites (Hugo and Blot) and CMS-managed sites (WordPress and SquareSpace). Both have merits, which is why I can never pick just one!

For me it tends to come down to convenience. I find WordPress more convenient to publish with. Click&#8230;type&#8230;click&#8230;done. The decision is harder with longer, more text-heavy writing, but I frequently post short pieces containing images and there&#8217;s no contest there. Drag a photo into WordPress and everything is taken care of for me. Some UIs for SSGs are starting to make this easier, though.

With a SSG, there&#8217;s more distance between the writing and the results (although Blot comes close here). See [WordPress is a Typewriter][1].

Other things I think about&#8230;

Backups are pretty easy both ways. I don&#8217;t worry about losing content due to a database. Anything longer than a paragraph is usually written locally as text first, so I always have that copy. I also run httrack occasionally (gives me a static version of my entire WP site) and export everything occasionally to XML or whatever. That last bit is beyond what &#8220;regular&#8221; people are likely to do, but for me it works.

For me the biggest difference is on the hosting side. Static sites can just be dropped anywhere and will be fast, secure, and easy. WordPress is, while not difficult, more of a pain to host. It&#8217;s also prone to security and performance issues.

With all that said, I&#8217;m typing this in MarsEdit for posting to my WordPress blog. So there&#8217;s that.

[Previously][2], [previously][1], [previously][3], [previously][4], [previously][5].

<li id="fn-1764-cache">
  I&#8217;m conveniently ignoring the option of WP static caching here. <a href="#fnref-1764-cache">↩</a></fn></footnotes>

 [1]: https://www.baty.net/2017/wordpress-is-a-typewriter/
 [2]: https://www.baty.net/2016/leaning-toward-static-again/
 [3]: https://www.baty.net/2009/wordpress-vs-static/
 [4]: https://www.baty.net/2016/hugo/
 [5]: https://www.baty.net/2016/almost-switched-to-wordpress-again/