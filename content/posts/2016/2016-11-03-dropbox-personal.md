---
date: 2016-11-03T16:01:54-04:00
slug: dropbox-personal
tags:
- Dropbox
title: Dropbox (Personal)
---

A few weeks ago Dropbox notified me that I could have a "Team" Dropbox account
in addition to my normal account. This seemed worth checking into, so I went
ahead and linked my "Personal" and Team ("Fusionary") accounts. 

What I ended up with was a mess. The original ~/Dropbox folder was replaced by
"~/Dropbox (Personal)" and a symlink was created at the original location. There
was a new folder, "~/Dropbox (Fusionary)" which was linked to the Team account.

After trying and failing to work the team folder into my process, I wanted to
get rid of the team account and folder. No problem, I unlinked the account and
deleted the folder. With only a single Dropbox account remaining, I decided I
wanted to remove the symlink and rename "~/Dropbox (Personal)" back to just
"~/Dropbox".

This left me with a bunch of broken paths in other apps. I shouldn't have done
_any_ of this. If I were smart, which I'm not, I'd just leave the old symlink in
place and live with having everything really in the stupidly-named "~/Dropbox
(Peronal)" folder but I refuse to do that. Guess I'll just fix the broken links
as I find them.

Lesson: Don't change things, and if you do, don't change them back later.
