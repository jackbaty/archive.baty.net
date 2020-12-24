---
title: "New theme: CodeIT"
date:  2020-12-24
categories:
- Blogging
slug: "new-theme-codeit"
description: "It's a fork of the old theme, but maintained"
---

The theme I've used for this site, LoveIt, is no longer being maintained. This isn't that big a deal, but I prefer to have someone keeping an eye on things and making small fixes and improvements.

An earlier fork, uBlogger, strayed to far from the original (see [this post](/2020/a-fork-of-the-loveit-theme-ublogger/)).

A new fork showed up recently: [CodeIT](https://codeit.suntprogramator.dev), and they've been updating it and fixing little issues, so I decided to follow along.

First I had to remove the old theme, which was a git submodule...

```
git submodule deinit -f themes/LoveIt
rm -rf .git/modules/themes/LoveIt/
git rm -f themes/LoveIt
```

Then I added the new theme as a submodule...

```
git submodule add https://github.com/sunt-programator/CodeIT.git themes/codeit
```

Of course after this the site wouldn't build due to some missing content errors. I'd tweaked my old theme with some template conditionals to solve this, but decided to fix it for real this time.

There were entries with not content, empty tags definition, etc. I spent a couple hours finding and fixing these, and now the site renders just fine.

Feels good to clean things up once in a while.