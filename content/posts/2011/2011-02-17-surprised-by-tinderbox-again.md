---
author: Jack
categories:
- Journal
date: 2011-02-17T18:40:05+00:00
tags:
- Tinderbox
title: Surprised by Tinderbox Again
url: /2011/surprised-by-tinderbox-again/
---

It's no secret that I'm a huge fan of [Tinderbox][1]. I'm always finding some new trick or useful feature. Today, I discovered "$NameStrike."

Crossing out words on paper is not only satisfying, it serves a purpose. For me, it means "I'm done with this" or sometimes "This is no longer valid." Not long ago, Eastgate added a Strikethrough format to note text. That may seem trivial, but I use it all the time. It may not be as enjoyable as the pen and paper version, but still.

What I didn't know is that I could also strike out a note's _name_ in map views. I manage projects using Tinderbox and discovering the $NameStrike attribute was immediately useful. As an example, here is what a new project map looks like&#8230;

[<img class="alignnone size-full wp-image-4440" src="/img/2015/04/project.jpg" alt="project" width="600" height="447" srcset="/img/2015/04/project.jpg 600w, /img/2015/04/project-300x224.jpg 300w" sizes="(max-width: 600px) 100vw, 600px" />][2]

&nbsp;

See those notes in the Tasks area? Those are based on the built-in "Task" prototype. However, the built-in prototype doesn't do anything fancy with the text, so I added the following Rule:

    if($Checked==true){$NameStrike=true}else{$NameStrike=false}
    

Like so&#8230;

[<img class="alignnone size-full wp-image-4441" src="/img/2015/04/Rule.jpg" alt="Rule" width="367" height="600" srcset="/img/2015/04/Rule.jpg 367w, /img/2015/04/Rule-184x300.jpg 184w" sizes="(max-width: 367px) 100vw, 367px" />][3]

This Rule then applies to every note that is based on the Task prototype. If the "$Checked" attribute of a note is true (checked), the note's name in the map is displayed nicely crossed out. Now all of my completed tasks instantly and automatically _look_ completed. And I'm happy.

 [1]: https://web.archive.org/web/20110226021616/http://www.eastgate.com/Tinderbox/
 [2]: /img/2015/04/project.jpg
 [3]: /img/2015/04/Rule.jpg