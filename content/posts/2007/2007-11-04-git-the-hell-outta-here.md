---
author: Jack
categories:
- Journal
date: 2007-11-04T18:15:45+00:00
title: Git the hell outta here
url: /2007/git-the-hell-outta-here/
---

I remember the days when [Subversion][1] was introduced and solved many of the problems plaguing the aging CVS. Here was something new, familiar and better. I jumped right in. 

Subversion does pretty much everything we need doesn't it? It doesn't have merge tracking, and that sucks, but it's scheduled for 1.5 right? So then tell me, why does everyone alluvasudden want to start using [Git][2]? I'll tell you why: It's because the geeks are bored with Subversion. The same thing happened with Lighttpd a year or so ago. Someone blogs about how cool "lighty" is and everyone jumps in and declares Apache dead. Hell, I did it too, even though I've never had even the slightest problem with Apache &#8211; still don't. 

So Git is the shiny new toy all the cool kids just gotta play with. I want to be a cool kid, but I can't figure out what the real benefits are. Only the theory. Here are a few of the reasons that distributed source control, specifically Git, is hot. 

1. **It's fast with huge repositories**. So? I'm not hacking the Linux kernel and neither are most of the folks I know who are switching to Git. 

2. **Branching is "free" and managed properly**. I'll give it that, branch management in Subversion is scary and weird and prone to goofs. 

3. **I can work offline**. Nice, but something I would find useful so rarely that I don't care. 

4. **Every working copy is a backup of the repo**. Also nice, but I back up my Subversion repos already. 

What's wrong with Git? Nothing really. The biggest problem is that it has essentially zero available tooling. At [Fusionary][3] we're using [FishEye][4] and [Warehouse][5] and [svnX][6] and [TortoiseSVN](). Everyone in our office, from developers to designers to content people, use Subversion daily. No way I'm dropping Git on them without better tools and a compelling reason other than "oooh, shiny!" 

And if I did, how would I keep track of all of those distributed repos scattered willy-nilly across the landscape? Well we'd need a central repository that everyone pushed to wouldn't we, just like Subversion. 

Someone explain to me what I'm missing that doesn't, honestly doesn't, have anything to do with Git simply being new. 

**Update:** Geoffrey Grosenbach's excellent [Peepcode screencast on Git][7] helped a great deal. Git is kinda shiny, now that you mention it.

 [1]: http://subversion.tigris.org
 [2]: http://git.or.cz/
 [3]: http://www.fusionary.com/
 [4]: http://www.atlassian.com/software/fisheye/
 [5]: http://warehouseapp.com/
 [6]: http://www.lachoseinteractive.net/en/community/subversion/svnx/features/
 [7]: http://peepcode.com/products/git