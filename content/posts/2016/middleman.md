---
date: "2016-08-27T16:07:46-04:00"
description: ""
tags:
- static
- blogging
title: Middleman
topics: []
---

![Middleman](/img/2016/middleman-logo.jpg)

I spent today learning how to create a static website with
[Middleman](https://middlemanapp.com).

> Middleman is a static site generator using all the shortcuts and tools in
> modern web development.

I'm a fan of static websites and excited to see that static site generators are
[proliferating like mad](https://www.staticgen.com) lately.

I've created static sites using Movable Type, Emacs (org mode), Hugo, Jekyll,
and completely hand-coded HTML files. I wanted to try something new, and decided
upon Middleman. Middleman uses Ruby and feels much like working with a Ruby on
Rails app, which I'm familiar with.

The installation went pretty well. I did need to deal with some RubyGems issues,
which is par for the course. Once installed, I had no further problems.

Middleman isn't as easy out of the box as something like Jekyll, but it seems
significantly more flexible. It's mostly just Ruby in Erb templates.

For a simple blog, I'd go with something else. Most of the static generators
lean toward creating blogs by default. Middleman requires extra configuration
and setup in order to get rolling with a blog. Middleman should shine for
building sites that are more complex than a basic blog.

As a test, I ported [Fusionary's site](http://fusionary.com/) (currently built
with CraftCMS). It took a few hours, and I don't have the asset pipeline stuff
worked out, but it was easy. I'll try a few more, but so far so good with
Middleman.
