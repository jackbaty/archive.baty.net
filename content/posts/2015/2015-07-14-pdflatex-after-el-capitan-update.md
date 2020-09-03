---
author: Jack
categories:
- Journal
date: 2015-07-14T04:00:00+00:00
tags:
- LaTeX
- sysadmin
title: Fixing pdflatex after El Capitan update
url: /2015/pdflatex-after-el-capitan-update/
---

I upgraded both my Macs to the El Capitan beta and could no longer convert Org Mode or Markdown files to PDFs. My scripts were returning an error: "command not found: pdflatex". Where could it be?

I soon noticed that I had lost the symlink to the TeX distribution, which is usually /usr/texbin. Easy enough to recreate it, I thought, but was wrong. Apparently, in El Capitan you're not allowed to write to /usr, even using sudo. Digging around I found [this PDF on tug.org][1] which explained things in detail.

The symlink should be at /Library/TeX/texbin instead. So it was a matter of running the following and updating my $PATH

<pre class="example">cd /Library/TeX
sudo ln -s Distributions/Programs/texbin texbin
</pre>

That made the TeX distribution available again and all is well.

 [1]: https://tug.org/mactex/UpdatingForElCapitan.pdf