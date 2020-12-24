---
author: Jack
categories:
- Software
date: "2020-02-29T13:45:00+00:00"
tags:
- Org-mode
- Roam
title: Org-roam and aliases
type: posts
url: /2020/org-roam-and-aliases/
---
I just learned that&nbsp;[Org-roam][1]&nbsp;supports aliases. This means that I can reference pages in my Org-roam database in more than one way.&nbsp;

For example, I might want to have a page for “World War II” but when mentioning it I would just use “WWII”. It’s done like this…

<pre class="wp-block-code"><code>#+TITLE: World War II #+ROAM_ALIAS: "WWII" "World War 2" </code></pre>

This is really handy. Even “real”&nbsp;[Roam][2]&nbsp;doesn’t support this as easily yet.

It’s&nbsp;[in the docs][3]. I should read them more often.

 [1]: https://github.com/jethrokuan/org-roam
 [2]: https://roamresearch.com/
 [3]: https://org-roam.readthedocs.io/en/latest/anatomy/