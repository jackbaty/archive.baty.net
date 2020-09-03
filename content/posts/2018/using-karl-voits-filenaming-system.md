---
title: "Using Karl Voit's File Naming System"
date: 2018-05-06T16:21:19-04:00 
lastmod: 2018-05-06T16:21:23-04:00 
draft: false
description: ""
tags: ["workflow"]
---

I name most of my files with an ISO formatted date and then some descriptive text. For example...

`2018-05-06 This is a File.txt`

A couple years ago I ran into Karl Voit's article about [Managing Digital
Files](http://karl-voit.at/managing-digital-photographs/). I originally wrote it
off as a bit over the top and I didn't give it another thought. Then today I decided
to go all in with it.

You can read his entire article if you like, but the gist of it is that he names
files using a pattern like this:

```
2018-05-06 This is some file -- tag1 tag2.jpg
|_date___| |_description___||___tags_____|
```

It's a little verbose but that hasn't gotten in the way. The trick of the
whole thing is to use his suite of tools to help manage things.

- [date2name](https://github.com/novoid/date2name) for prepending the file's creation date
- [appendfilename](https://github.com/novoid/appendfilename) for adding to the filename without disturbing the date or tags
- [move2archive](https://github.com/novoid/move2archive) for moving the files to a dated folder hierarchy 
- [filetags](https://github.com/novoid/filetags) for managing tags and creating a tag hierarchy

Seems like a lot of fuss, but the goal is to have a future-proof collection of
well-organized files with no chance of lock-in or abandonment. This is one way
of achieving that. Voit's tools aren't necessary, just helpful. If they went
away nothing would be lost. The whole thing lines up nicely with my preference
for keeping files in organized, date-based folders.

I often use the [Ranger file browser](https://github.com/ranger/ranger) and so I
added a few key mappings to make managing filetags, etc. easier. Here's part of
my Ranger config file:

```
map Fm shell m2a %s
map Ft shell filetags %s
map Fn shell date2name %s
map Fa shell appendfilename %s
```

I mark one or more files in Ranger and hit "F" then one of m, t, n, or a to
move, tag, add the date, or rename them.

A nice side effect of this is that all files named using YYYY-MM-DD... are swept
up by my [Memacs](https://github.com/novoid/Memacs) scripts. This causes any
file or photo in the archive to show up in my Org-mode agenda on the day it was
created.

<img src="/img/2018/2018-05-06_agenda.png" alt="Agenda"/>

That's a nice bonus. The Memacs thing is going to have to be a whole other post.
