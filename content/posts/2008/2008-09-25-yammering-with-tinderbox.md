---
author: Jack
categories:
- Journal
date: "2008-09-26T00:56:13+00:00"
tags:
- geek
- Tinderbox
- yammer
title: Yammering with Tinderbox
url: /2008/yammering-with-tinderbox/
---

<span class="drop_cap">W</span>e've been trying "Yammer":http://yammer.com/ at "the office":http://fusionary.com/ for short notes and intra-office updates. Yammer asks "What are you working on?" Fair question, but I already log my daily activity in a "Daybook":https://jackbaty.com/2008/07/tinderbox-as-a-daybook/ using Tinderbox so I thought it would save time if I could post those entries as updates directly to Yammer.

Easy, here's how I did it. The whole process took me less than 15 minutes from concept to completion.

First, I created an Agent which collects any note containing a tag labeled "YM."

[<img src="/files//tinderbox-yammer-agent.jpg" alt="" title="tinderbox-yammer-agent" width="456" height="650" class="aligncenter size-full wp-image-2698" />][1]

When the agent runs, it first calls out to a shell command which uses curl to post the note's title to Yammer via Yammer's API. Here's the action run by the Agent.

`<br />
Result=runCommand("/usr/bin/curl -H 'Accept: text/plain' -d 'body="+urlEncode($Name)+"' -u myusername:mypassword https://www.yammer.com/api/v1/messages/"); Tags=$Tags-"YM";</p>
<p>`

After the shell command, it removes the "YM" tag from the note, preventing subsequent runs of the agent from picking it up and posting the same note again.

To easily add the "YM" tag to a note, I created a Stamp.

[<img src="/files//tinderbox-yammer-stamp.jpg" alt="" title="tinderbox-yammer-stamp" width="464" height="255" class="aligncenter size-full wp-image-2699" />][2]

Wrapping it all up, to send a note to Yammer, I simply select the note and choose "Send to Yammer" from the menu and whoop, there it is.

[<img src="/files//tinderbox-yammer-menu.jpg" alt="" title="tinderbox-yammer-menu" width="254" height="152" class="aligncenter size-full wp-image-2700" />][3]

This makes me happy.

 [1]: /files//tinderbox-yammer-agent.jpg
 [2]: /files//tinderbox-yammer-stamp.jpg
 [3]: /files//tinderbox-yammer-menu.jpg