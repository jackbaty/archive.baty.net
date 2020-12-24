+++
author = "Jack"
categories = ["Software"]
date = "2020-05-12T13:34:00+00:00"
tags = ["Notetaking", "Org-roam", "Roam", "TiddlyWiki"]
title = "Take lots of notes – but where?"
type = "posts"
url = "/2020/take-lots-of-notes-thinsp-mdash-thinsp-but-where/"

+++
Once again, I am struggling with the decision on where to take notes. I apologize for making you sit through yet another round of this navel-gazing process, but I need to type it out. It helps me think.

Let’s, for the moment, ignore journaling [<sup>1</sup>][1] and consider only the current contenders for my “Second Brain”, or “Personal Knowledge Management System”, or even “Zettelkasten” if we’re feeling fancy and want to abuse the term a little.


The contenders for my PKM (Personal Knowledge Management) system are:

  * [Roam Research][2]
  * [Org-roam][3]
  * [TiddlyWiki][4]

All three tools work well for PKM. All three handle backlinks. All three are terrifically searchable. So, which to choose?

My current though is that Roam is the easiest, cleanest, fastest way to keep a PKM.

  * Daily Notes pages are a terrific way to reduce friction when I need to just write something down and scrolling through recent Daily Notes can trigger new thoughts
  * Outlines are awesome
  * Block level references and transclusion are killer for surfacing and reusing existing notes
  * Search results are pretty
  * Shift-clicking a link to view it side-by-side with the current note is a great way to keep an eye on different things at the same time.
  * Backlink context is precise (block-level) and is filterable
  * Fancy `query` syntax may be useful one day, even if a bit fidgety.
  * It’s easy to embed images and PDFs
  * Creating links and new pages could not be simpler or faster

**But I have issues with Roam**

  * It’s terribly unstable right now. This, I’m sure, is a diminishing problem, but data loss is unacceptible.
  * It’s cloud-first and in a format not immediately accessible
  * I’m not a privacy wonk, but I pay attention and Roam isn’t the greatest option when privacy is a concern.
  * The author can come across as a bit of a too-cocky know-it-all and has terrible bedside manner. That in itself isn’t a deal breaker, and he’s a smart guy with a vision, but I’m concerned that our cultures may clash.
  * I don’t want a shared, multi-user PKM linked or editable with others. I worry that the authors are heading that way. Again, culture clash.
  * $15/month is pricey for a note-taking tool. (Even a great note-taking tool)
  * Future-proofing it is going to be a challenge. There are exports, but still.

**What about Org-roam?**

Org-roam is what I _want_ to use for everything.

  * Daily notes are included. Not automatically, but it’s easy enough.
  * Umm, it’s Org mode, which is the greatest thing ever for notes, writing, tasks, publishing, _everything_.
  * And since it’s Emacs, all of it can potentially be tweaked to my liking.
  * The entire thing can be managed in Git with complete version history
  * Plain text is hard to beat as a future-proof format. Some might argue that it’s not technically “plain” text but if I can open and read it easily in, say Vim or BBEdit, it’s plain text.
  * It leverages my existing tools, namely, Emacs. The same editing tools, bindings, etc are all there.
  * The community feels smart without sounding like it’s trying too hard to sound smart.
  * The authors “think” like I do. Without presuming to read minds, I feel like our goals are aligned.
  * I could easily generate a website from content in my database, where I of a mind to.

**So what’s the problem with Org-roam then?**

  * Even though it’s all plain text, it’s text that’s much less useful outside of Emacs. I worry about depending on Emacs for the rest of my life. I may anyway, but what if I don’t?
  * It’s harder for me to use. I consider myself fairly well-versed in Emacs, but I still stumble over key chords and window/buffer management. There’s friction in dealing with the system.
  * I can’t use it on the iPad. I don’t want to jump through the hoops it would require. I don’t live on the iPad, but I do use it and I currently jot things down in Drafts and paste into Emacs when I’m back at the computer.
  * Org mode can be used as an outliner, and while it’s pretty fancy, it’s hard to use as an outliner (compared to, say, Roam)
  * Notes in Emacs aren’t pretty, making them harder (or maybe just less fun) to read.
  * Viewing multiple notes at once is challenging. This is probably due to how Emacs windowing is configured, but still.
  * I like to scroll back and look at prior days. This isn’t easy in Org-roam.

**And then, there’s TiddlyWiki.**

  * All my notes live in a single, future-safe HTML file. Easy to back up, share, version, etc.
  * Speaking of sharing, I can simply email a copy of a TiddlyWiki file to anyone and they have _everything_, and can do with it as they wish. Or I can drop it on a web server, making it available to _everyone_. See mine at [rudimentarylathe.org][5] for example.
  * The TiddlyWiki community is friendly, helpful, and resourceful
  * The notes look good. Each tiddler stands alone.
  * The “story river” makes side-by-side viewing of notes easy (although technically it’s over-and-under&nbsp;:))
  * Linking and backlinking are easy and flexible.
  * TiddlyWiki is like Emacs, in that it’s sort of written in itself. There’s no end of ways to tweak it.

**Are there downsides to TiddlyWiki?**

  * I have to use specific tools (e.g.&nbsp;Firefox with the Timimi extension) for editing the HTML file. Saving is a pain otherwise.
  * A few plugins are required to get the Roam-like features.
  * The editing/writing experience isn’t great, which is a significant drawback for a note-taking tool.

**Where does this leave me?**

I wish I had a final answer, but I don’t. That’s why we’re here today. There are two decisions that need to be made.

  * Do I use Org-roam or Roam for my PKM/Zettelkasten/Second Brain?
  * How do I decide what goes in the PKM and what goes into [my wiki][5]?

You’ll notice that the above questions imply that I’ll be continuing to use _both_ TiddlyWiki and the winner of the Roam vs Org-roam decision. I don’t see a path to getting it down to just one tool.

The PKM is for ideas, notes, acquired knowledge, and CRM. TiddlyWiki is for work notes and publishing my wiki. I used to feel that everything, including personal and work notes, belonged in the PKM but I’m beginning to think that’s not a good idea. While they overlap, work notes are more of an event log and have a specific life span. The PKM contains [evergreen notes][6] so the requirements are slightly different. At least I think of them differently, and separating them feels right.

As for deciding which notes go where, I’m afraid that will always be a struggle for me. Currently I’m putting the thin version of topics into TiddlyWiki but they’re fleshed out more thoroughly in the PKM system. I’m not sure this is sustainable, but I do think having a lot of this stuff out in my public wiki is useful.

I’ll keep you posted. Thanks for letting me think this through.

 [1]: https://wp.copingmechanism.com/2020/take-lots-of-notes-thinsp-mdash-thinsp-but-where#footnote-14L6
 [2]: https://roamresearch.com
 [3]: https://github.com/org-roam/org-roam
 [4]: https://tiddlywiki.com
 [5]: https://rudimentarylathe.org
 [6]: https://notes.andymatuschak.org/Evergreen_notes