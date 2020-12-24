+++
author = "Jack"
categories = ["Journal"]
date = "2015-05-09T12:11:40+00:00"
tags = ["connectedtext"]
title = "ConnectedText via Parallels vs Crossover"
url = "/2015/connectedtext-via-parallels-vs-crossover/"

+++

I love [ConnectedText][1] but have been struggling with using it via Parallels on my Mac. Everything works fine, but requires many moving parts in order to make it something I can live in.

It was suggested<sup id="fnref-4519-thanks"><a href="#fn-4519-thanks" rel="footnote">1</a></sup> that I try running things via [Crossover][2] so I did and have been surprised by how well it works. It's too soon to tell if the experience with Crossover will be good enough, but early signs are encouraging.

Here are some quick notes after the first few hours&#8230;

TextExpander works as-is. No need to also run Breevy and deal with configuring sync between Breevy and TextExpander.

Projects are stored in ~/ConnectedText on the main Mac partition. I've been synching with Bittorent Sync and with Parallels the mapped [C] drive holding project files is only available while Parallels is running. With Crossover the project files are always available for sync. I had also tried using SyncBackSE under Parallels for syncing to a Dropbox folder but again, too many moving parts.

Menu items (e.g. Topic->Edit use Command-E vs Alt-E). This feels more natural.

Crossover uses way fewer resources on my Mac than Parallels. Watching CPU and RAM usage was a surprise, since ConnectedText/Crossover seems to use no more resources than a "normal" Mac app. So far between wine server and ConnectedText I'm seeing CPU usage at about 5%. With Parallels it was more like a steady 30%. No partitions, drive mapping, or reserved drive space to deal with either.

The biggest drawback so far is that I can't seem to dock windows. Dragging, say, the Topics window to the edge of the editor window has no effect. The upside is that all "child" windows drag along with the main window, so once they're arranged how I like them they stay put. Still not ideal.

Another issue is that I don't know if I can run Python scripts or other Windows utilities. I don't use AutoHotKeys or anything fancy so this may not be a problem for me.

Parallels is much more polished and complete, but so far everything feels stable and much simpler under Crossover, at least as far as running ConnectedText goes.

<li id="fn-4519-thanks">
  Thank you Alan Sandercock&#160;<a href="#fnref-4519-thanks" rev="footnote">&#8617;</a> </fn></footnotes>

 [1]: http://connectedtext.com
 [2]: https://www.codeweavers.com/products/crossover-mac/