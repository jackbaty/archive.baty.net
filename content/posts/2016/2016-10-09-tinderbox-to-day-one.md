+++
date = "2016-10-09T11:27:22-04:00"
slug = "tinderbox-to-day-one"
tags = ["Tinderbox", "Day One"]
title = "Tinderbox to Day One"

+++

I use both [Day One](http://dayoneapp.com)
and [Tinderbox](http://www.eastgate.com/Tinderbox/) for journaling.

Day One is nice when I'm out and about and want to include photos and location
information. The Day One mobile app is great.

Creating a Day One entry would go something like...

Snap a photo, then type...

> "Had dinner at Amore and ordered this delicious lasagna"

This would create an entry with the photo, put a pin on the map, and record the weather. For
logging travel, events, food, and people, Day One is great.

I use Tinderbox for all other entries. It's my "Daybook". Tinderbox lends itself
to data analysis and text processing, so I put as much in there as possible.

An example Tinderbox entry might be...

> Ordered replacement filter for CPAP

Boring, but useful. There's no need for location information or a photo. I just
want to record it so I can find it later.

I used to import all of my Day One entries into my Daybook but found the process
a bit clumsy and error-prone. 

What I'm finding more useful is copying specific entries from the Tinderbox
Daybook into Day One, rather than the other way around. This is easily done
using a Stamp in Tinderbox and the dayone CLI. Tinderbox "Stamps" are simply a
convenient way of setting attributes or running scripts on a note or collection
of Tinderbox notes.

Here's the Stamp I'm using...

```
runCommand("/usr/local/bin/dayone -d="+$StartDate.format("y-M0-D")+" new", $Name+"\r\r"+$Text)
```

This Stamp calls `runCommand`, which allows Tinderbox to pass things to the
shell. In this case, it's calling the dayone command-line utility using the
selected note's date, title, and text as input. I just select a note, apply the
Stamp, and Poof! a new entry appears in Day One.

