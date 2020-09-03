+++
title = "Org-Journal May Replace My Daybook.org File"
date = 2018-05-21T15:34:00-04:00
tags = ["org-mode", "journal"]
draft = false
+++

The more I use Bastian Bechtold's [Org-journal](https://github.com/bastibe/org-journal) the more I like it.

For the past few years I've kept a sort of "Daybook" using a datetree in a
single Org-mode file. This works pretty well, but it's always felt more suitable
for shorter entries. I wanted something that would work with longer entries, so
I tried Org-journal.

Org-journal uses one file per day. I first thought that this would make browsing
my journal difficult, but it doesn't. I find the built-in search to be easier to
manage than using sparse trees or other search methods in an ordinary Org file.

I have found myself creating a journal entry using Org-journal for everything,
including the things I'd normally put into my Daybook.

Org-journal even handles TODOs, and carries forward any unfinished TODOs from
the previous day. It's kind of like an automated Bullet Journal.

I export things I write each month to PDF files and print them out. (Yes, I'm
that guy). With separate files for each day, I can do this by running
something like `cat 2018-05*.org > 2018-05-Journal.org` and export the resulting
file to a nicely-typeset PDF easily enough.

I'm not quite ready to completely let go of my habit of logging things into
my Daybook, but the writing is on the wall.
