---
layout: default
title: A fork of the LoveIt theme - uBlogger
excerpt: Someone is trying to revive the abandoned theme I use for this blog.
date:  2020-12-06
tags: ["Hugo"]
categories: ["Blogging"]
slug: a-fork-of-the-loveit-theme-ublogger
---

After years of using the [Jane theme](https://github.com/xianmin/hugo-theme-jane) here at baty.net, I recently switched to [LoveIt](https://github.com/dillonzq/LoveIt). I like the theme. It's fancy enough without being _too_ fancy. The problem now is that the LoveIt theme seems to be abandoned by the author. Various people have attempted to contact them with no luck.

In what looked like good news, [uPagge](https://github.com/uPagge) announced that he was forking the theme, has made a number of significant changes, and has renamed it to [uBlogger](https://github.com/uPagge/uBlogger).

I was eager to take advantage of the improvements, but quickly ran into issues. Here are the notes I took while working to get the uBlogger theme running.

* Had to update the the theme "version" in config.toml to prevent incompatibility warnings. Even when using the sample config.
* Needed to create ./authors/jack.en.json or it was errors everywhere. Docs aren't loud enough about this.
  * I feel that "Author" is over-engineered. How many sites using this theme have more than one author?
* The home page design varies too much from the original LoveIt version. I don't like the separated post summaries.
  * I mean, I like dropshadows as much as the next person, but get rid of most of them. And the rounded corners.
  * preview.jpg images are broken when used in a post directory. Not the case with LoveIt.
  * Too much space around things. An over-abundance of whitespace is too popular :)
* Blockquotes are not formatted anything like how they were, breaking the flow of many posts
* Emphasis (`<em>`) is not rendered as italic, but rather shown as yellow highlights. That's not how I use `<em>`.
* Something in my content breaks tags so the build fails. Had to delete the Tags code in templates while figuring it out.
* Speaking of Tags, I prefer the old Tags display. The giant pills are too loud.

I'm not serious enough about any of this yet to formally submit bug reports, but I'll keep an eye on it.

**UPDATE**: There's another fork that may be more suitable: [CodeIT](https://github.com/sunt-programator/CodeIT)
