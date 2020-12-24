---
date: "2016-01-09T12:37:54-05:00"
description: ""
tags:
- blogging
- Github
title: Hosting My Blog Using Github Pages
---

Baty.net is now using [Github Pages](https://pages.github.com) for hosting. This
might be the only hosting option I _haven't_ tried.

I usually host the site on my VPS at Linode. I can handle most sysadmin-type
tasks so this works fine. After last week's DDoS attacks at Linode I started
considering other options again.

<!--more-->

For a while I used [Netlify](https://www.netlify.com) which worked very
well, but it limited how many times I could push updates. I tend to publish,
say "Oops!", and re-publish a number of times for each new post. For some reason
no amount of proofreading beforehand helps with that.

Then I tried S3. For the life of me I can't get my head around Amazon's web
services so S3 was never my favorite option.

Which brings me to Github. I already keep the source files for baty.net in Git
so adding a "gh-pages" branch and pushing there wasn't too difficult. The only
downside with the way I'm doing it is that all of the rendered files need to be
in the source tree. Not ideal, but it's only a minor annoyance.

To deploy I use the following shell script (stolen from the Hugo tutorial
[here](http://gohugo.io/tutorials/github-pages-blog/)):

~~~bash
#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo

# Add changes to git.
git add -A

# Commit changes.
msg="Rebuild site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
git subtree push --prefix=public git@github.com:jackbaty/baty.net.git gh-pages
~~~

A couple of other requirements:

- Put a CNAME file in /static (if using Hugo) with `baty.net` as the only line
- Create an ANAME DNS record aliasing jackbaty.github.io to baty.net

So far, so good.

The nice thing about a static site is that I can easily push it
anywhere that serves plain old HTML files. There are very few moving parts
and I like that.
