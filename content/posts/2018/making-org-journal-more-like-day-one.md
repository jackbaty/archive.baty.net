+++
date = "2018-10-26T10:02:57-04:00"
description = ""
tags = ["journaling", "dayone", "orgmode"]
title = "Making org-journal more like Day One"

+++

I sometimes think having only _one_ journal would be ideal, but that's not likely to happen. I know me, and I'll never stick with just one.

Currently, my primary (non-paper) journals are kept in <a
href="https://dayoneapp.com">Day One</a> and <a href="https://orgmode.org">Org
Mode</a>.

Day One is a pleasure to use. It looks great and makes journaling quick and easy
on every platform I use. It automatically adds location and weather data to each
entry, which is a nice bonus. The printed books from Day One are also great.

In Org Mode I use <a
href="https://github.com/bastibe/org-journal">org-journal</a>. I like writing in
Emacs/Org-mode and I like plain text and I like Org-mode's flexible export
options. Basically, for writing things down, I generally prefer to do it in
Org-mode.

I'm trying to level the playing field between Day One and Org Mode. To this end, I've added a couple of tweaks to my org-journal.

First, I've made it easier to drag and drop images into entries. To do this, I
used a [bit of code from John
Kitchin](http://kitchingroup.cheme.cmu.edu/blog/2015/07/10/Drag-images-and-files-onto-org-mode-and-insert-a-link-to-them/). Still not as easy as Day One, but better than it was.

Next, I added a quick way to insert the current weather conditions into an
entry. This is done using [wu](https://github.com/sramsay/wu), a command-line
interface to [Weather Underground](http://www.wunderground.com/). Wrap the
command in a SRC block and
[org-babel](https://orgmode.org/worg/org-contrib/babel/) renders the results
right in the entry.

```
#+BEGIN_SRC sh :results value verbatim
wu 
#+END_SRC
```
I just put the cursor on the BEGIN_SRC line and hit CTRL-C CTRL-C. Neat.

I could probably find a good way to have the SRC block automatically created
with new entries, but for now, I just use a TextExpander snippet. Close enough.

Here's what today's entry looks like so far. Not bad.

![Screenshot of Org Journal](/img/2018/2018-10-26_weather-orgmode-screen.png)


