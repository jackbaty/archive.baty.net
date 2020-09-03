---
title: "Posting From Emacs to Hugo With Easy-Hugo"
date: 2018-02-17T12:06:12-05:00
lastmod: 2018-02-17T12:06:12-05:00
draft: false
description: ""
tags: ["hugo","blogging","emacs"]
---

When blogging with a static site renderer such as [Hugo](https://gohugo.io), creating new posts can be a point of friction. The default way is to call `hugo new`, type the name of the file, then find and open the file for editing. Not that difficult, but not simple either.

Since I use Emacs, the ideal solution would be to simply call something that would do the hard work for me right within Emacs. For a while I used a collection of lisp functions that prompted for a file, created the file with the correct frontmatter, and then opened the new file in a buffer. That worked, but for some reason I had deleted it in my config and rather than digging throught the git history I just did a quick search and found [easy-hugo](https://github.com/masasam/emacs-easy-hugo) by Мasashí Мíyaura.

Easy-hugo is an "Emacs major mode for writing blogs made with hugo by markdown or org-mode or AsciiDoc or reStructuredText or mmark or html." 

<img src="/img/2018/easy-hugo-screen.png" alt="Easy Hugo Screen" width="100%"/>

I added the package and configuration variables to my .spacemacs file and started writing this post. 
