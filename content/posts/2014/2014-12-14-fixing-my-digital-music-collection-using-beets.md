---
author: Jack
categories:
- Journal
date: "2014-12-14T22:15:15+00:00"
tags:
- music
title: Fixing my digital music collection using Beets
url: /2014/fixing-my-digital-music-collection-using-beets/
---

I usually listen to music on vinyl, just as I have for 40 years. Keeping my vinyl library up to date is easy. Whatever is on the shelves is what I have. I keep albums in basically alphabetical order by artist. Easy, and there’s not much that can go wrong with such a system.

I also use streaming services (my current favorite being [Deezer][1]). There’s not much to organizing streamed music other than favoriting albums and picking which I want to have downloaded to my phone.

My iTunes library, on the other hand, needed work. Files were named inconsistently, tagged incorrectly, and stored in various places. I tend to think about music in terms of complete albums, yet I had hundreds of single tracks that I never listen to.

I used [Beets][2] to clean things up and it worked very well. Among other things Beets is "an infinitely flexible automatic metadata corrector and file renamer.” It is a command line utility so be prepared to sit at your $TERM for a while.

I enabled a few extra plugins before importing everything: fromfilename, fetchart, and chroma. That last one, chroma, takes an audio signature of each file and uses that for comparisons. Fancy.

The steps I took were, in summary:

  1. `pip install beets`
  2. Edit config file in ~/config/beets/config.yml so Beets knew where to put everything
  3. `beet import -q ~/Volumes/Media/MusicImport` First import using “quiet” option to let it do what it can without interaction
  4. `beet import ~/Volumes/Media/MusicImport` Interactive import. This requires paying attention and making decisions so plan on being around a while (depending on the size of your library

It took maybe 2 hours for me to respond to all of the prompts and let Beets do its thing. My digital music library is now a collection of complete and consistent music files.

&nbsp;

 [1]: http://www.deezer.com
 [2]: http://beets.radbox.org