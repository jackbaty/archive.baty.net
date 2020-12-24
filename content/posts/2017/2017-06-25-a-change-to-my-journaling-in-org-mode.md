---
date: "2017-06-25T12:05:07-04:00"
slug: a-change-to-my-journaling-in-org-mode
tags:
- Journaling
- Org-Mode
title: A change to my Org Mode journaling
---

Keeping up with a journal every day is hard. I've tried to make it easier by
using capture templates in Org Mode. My usual approach is to have the capture
template create a "datetree" entry in my Daybook.org file. This works well for
short, individual entries like the following:

``` orgmode
** Received the Hasselblad back from David Odess
   <2017-06-24 Sat>
   
   Total cost: $1,244
   
   He fixed and CLA'd the 500C/M, 80mm, and the older A12 back
   
```

I've been trying to write longer posts every day, so the capture template
approach wasn't ideal. I needed a way to write journal entries as more than
just headlines. A few years ago I was writing
at [750words.com](http://750words.com) and I liked the pressure and style of
just making sure I wrote at least 750 words every day. The only thing that
mattered was getting the words out. I didn't have to care what to write about or
that it was written well or, hell, that it was
even [coherent](https://baty.net/2012/750-words/).

There are a couple problems with using 750words.com. First, I'm more concerned
about privacy these days, so I don't want everything sitting out on their server
somewhere. More importantly, I prefer writing in Emacs to writing in a browser.

I made a few changes in order to use Emacs more like 750words.com.

I want my journal entries to be individual .org files, one for each day. As it
happens [org-journal](https://github.com/bastibe/org-journal) by Bastian
Bechtold works that way by default. Org-journal lets me open today's journal
file by hitting C-c C-j any time. A new file is created if one doesn't already
exist. I can simply start typing and it goes at the end of the day's entry.

I've changed a few of the default org-journal settings. For example, I don't
want a timestamped heading to be created each time I trigger a new entry.
Here are my settings...

``` orgmode
 '(org-journal-file-format "%Y-%m-%d.org")
 '(org-journal-time-format "")
 '(org-journal-time-prefix "")

```

To keep an eye on my word count, I
installed [wc-mode](https://github.com/bnbeckwith/wc-mode) which displays the
buffer's word count in the modeline. To get a running word count I can use the
command line and simply run the following in the journal directory...

`wc -w *.org` which outputs something like this...

```
496 2017-06-23.org
788 2017-06-24.org
 80 2017-06-25.org
1364 total
```

This all works great. Some day I'd like to create a way to better visualize word
count and missed days over time, but for now this is an improvement over the
capture template approach I was using.






