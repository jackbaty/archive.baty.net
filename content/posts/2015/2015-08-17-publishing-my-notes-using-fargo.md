+++
author = "Jack"
categories = ["Journal"]
date = "2015-08-17T21:09:52+00:00"
excerpt = "I'm once again using Fargo to publish my \"notes\" blog.\n"
tags = ["Blogging"]
title = "Publishing  my \"notes\" using Fargo"
url = "/2015/publishing-my-notes-using-fargo/"

+++

I've had an on-again-off-again relationship with Dave Winer's [Fargo][1] outliner/publisher. I love outliners, and Fargo is a nice outliner, but I don't really need a new one. My [old one][2] works just fine for general note-taking.

On the other hand, _publishing_ with Fargo is pretty slick, so I fired up an outline and made it available at [notes.baty.net][3].

Why? Good question. Mostly, I wanted a place to write things that may or may not be tweet-worthy, but that I feel like sharing. What I _should_ do is keep that sort of crap to myself but I'm way past the ability to do that. I think we all are.

Fargo works by hooking into Dropbox. It writes my outline to an OPML file and keeps it in Dropbox. Also, if configured to do so, Fargo will automatically create a folder (also in Dropbox) of HTML files that comprise a simple website/blog. All I needed to do is get those HTML files to a server somewhere, which I do via Rsync but it could use Github pages or S3 or whatever.

Here are screenshots of my outline and the accompanying rendered site.

&nbsp;

<img class="alignnone size-large wp-image-4822" src="/img/2015/08/Fargo-869x1024.png" alt="Fargo.png" width="700" height="825" srcset="/img/2015/08/Fargo-869x1024.png 869w, /img/2015/08/Fargo-255x300.png 255w, /img/2015/08/Fargo-768x905.png 768w, /img/2015/08/Fargo.png 1018w" sizes="(max-width: 700px) 100vw, 700px" />

<img class="alignnone size-large wp-image-4823" src="/img/2015/08/Jack_Baty_-_Notes-869x1024.png" alt="Jack_Baty_-_Notes.png" width="700" height="825" srcset="/img/2015/08/Jack_Baty_-_Notes-869x1024.png 869w, /img/2015/08/Jack_Baty_-_Notes-255x300.png 255w, /img/2015/08/Jack_Baty_-_Notes-768x905.png 768w, /img/2015/08/Jack_Baty_-_Notes.png 1018w" sizes="(max-width: 700px) 100vw, 700px" />

If you don't need more than a simple timeline of posts, organized by Year/Month/Day, it's a fine system. It's a nice way to get a static blog rolling. Another benefit is that the entire thing is available as an OPML file. My only concern is that it seems Fargo hasn't been high on Dave's list of priorities lately. I think he still uses if for parts of [Scripting.com][4] so with any luck it'll receive more love moving forward. In the meantime, I found it to be lot simpler to get running than something like Jekyll.

 [1]: http://fargo.io
 [2]: http://eastgate.com/Tinderbox
 [3]: http://notes.baty.net/
 [4]: http://scripting.com