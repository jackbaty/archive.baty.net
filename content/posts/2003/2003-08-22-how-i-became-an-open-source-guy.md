---
author: Jack
categories:
- Journal
date: "2003-08-23T00:22:27+00:00"
title: How I became an Open Source Guy
url: /2003/how-i-became-an-open-source-guy/
---

It all started one weekend at [our office][1] about two years ago, probably on a Saturday. I was bored, so I thought I’d try installing [It all started one weekend at [our office][1] about two years ago, probably on a Saturday. I was bored, so I thought I’d try installing][2] on an old desktop machine. I knew nothing about any of the nix operating systems, and I was just sure I was missing something important. Turns out I was, but it took a while to understand just how much. The first hurdle was that medieval instrument of torture, vi. How anyone could consider using vi to edit _anything_ was beyone me. Almost tossed the whole thing out the window on a number of occasions. Convinced that somehow I could get past it, I forced myself to continue. First, by installing VIM, which is better, and then distracting myself by editing real files. Files such as .bashrc and more importantly, Apache’s httpd.conf. A month later I had VIM installed on my Windows machine also, and now use it to edit just about everything that even tries to pass itself off as a text file.

Having control over any sort of nix box invariably leads to things like Apache, PHP, Perl, Awk, Sed, dot-files of all sorts and any number of useful utilities like wc, cat, grep and so on. Once I got a hold of piping the output of one command into another and writing simple shell scripts, I was hooked. At this point, my BSD experience was little more than a distraction to me and annoyance to everyone else in the office. Every day started with me coming in, bleary eyed and shouting “Look what I can do with Awk!” or some such nonsense. No one cared, but I pressed on.

We had an old Cobalt RAQ2 sitting around doing nothing, so I thought I’d try using it as an MP3 server for the office. It had Apache on it, but needed PHP so I could run [Andromeda][3]. That’s when the trouble started. PHP wouldn’t compile. Now, at the time I barely knew what “compile” meant. I just went about typing things like ./configure and make and such, with no idea what any of it was actually doing. Frustrated, I turned to Google for answers, and found an obscure newsgroup post about getting PHP running on MIPS processors, whatever that meant. Like a good little newbie I followed the poster’s instructions one line at a time. I had to go into the “source tree” and modify a “header file,” changing a small portion of one line. I used vi. Then, I typed “make” again and watched as it compiled completely. Then it was “make install” and viola! I didn’t sleep much that night. Not because I had gotten PHP to compile, nearly all by myself. Not because I could stream MP3s around the office using a nifty web interface. Nope, I didn’t sleep that night because of what getting PHP compiled _meant_. I was completely floored by the fact that there really wasn’t a commercial product in the world that I could have made work that way. I really knew nothing, and could still benefit from an Open Source product. Imagining the possibilities, I installed and tried just about everything I could find: [Apache][4], [Postfix][5], [Mailman][6], [PHP][7], [MySQL][8], [jEdit][9], [Mutt][10], you name it. I was hooked, and not just because the apps were free, but because they were free and _good_.

The next important milestone in my move to Open Source happened when our [Checkpoint firewall][11] went belly up because it couldn’t find its license file. That’s right, our entire hosting environment was dead in the water because of a _licensing issue_. Over $1000/year for maintenance contracts and I’m sitting there listening to the phone ring. Then came the [Licensing Nazis][12] and all the time I had to spend doing software audits to make sure we were in compliance.

These things add up. For me, they added up to a resolution to use Open Source products in every case they make sense. I have not regretted this decision for a moment. I’m not there yet, but I’m working on it. So far I’ve saved the company thousands of dollars per year in licensing fees, and who knows how much in upgrade costs. Yep, it’s also cost a lot of time, but I’ve learned a great deal in the process, which in my book is time well spent. Gartner can publish all the studies they want trying to convince corporate buyers that Open Source products costs as much or more than commercial products in the long run. In my office that simply hasn’t been the case. Support? I have all the [support][13] I need, and it’s never cost me half a day and $195 per incident to get it. The last time I had to ask for support was with [MySQL][14]. I sent an email to the MySQL mailing list and [Monty][15] himself answered my question within about 20 minutes.

Open Source software isn’t a religion with me, it just makes sense.

 [1]: http://www.fusionary.com/ "Fusionary Media"
 [2]: http://www.freebsd.org/ "FreeBSD.org"
 [3]: http://www.turnstyle.com/andromeda/home.asp
 [4]: http://httpd.apache.org/
 [5]: http://www.postfix.org/
 [6]: http://www.list.org/
 [7]: http://www.php.net/
 [8]: http://www.mysql.com
 [9]: http://www.jedit.org/
 [10]: http://www.mutt.org/
 [11]: http://www.checkpoint.com/
 [12]: http://global.bsa.org/usa/
 [13]: http://groups.google.com/
 [14]: http://www.mysql.com/
 [15]: http://www.zend.com/zend/hof/widenius.php