---
author: Jack
categories:
- Journal
date: 2009-09-09T03:26:22+00:00
dsq_thread_id:
- 3131255211
tags:
- Blogging
title: WordPress vs Static
url: /2009/wordpress-vs-static/
---

Maciej Ceglowski wrote a much linked to piece on [How to not get your blog hacked](http://idlewords.com/2009/09/how\_to\_not\_get\_your\_blog\_hacked.htm), suggesting that the best way to avoid having your WordPress (or whatever) site hacked is to run it statically&#8230;

> You can use a program like wget or curl to generate a flat HTML version of your website from this local version, and then upload these files to your public server to share them with the world

He's right, running only static HTML files is pretty secure. What I think he's wrong about is that his "answer is much simpler." The statement that keeping WordPress up to date "&#8230;is the same as saying, devote half your life to learning and understanding WordPress administration" is not really valid these days. One click while logged into the WordPress control panel, and Poof! you're up to date.

On the other hand, his "simpler" solution required a [follow up post](http://idlewords.com/2009/09/using\_wordpress\_to\_generate\_flat_files.htm) containing at least 7 steps requiring much geekery and with the hope that&#8230;

> some intrepid WP user may try following these steps and use them as a starting point for a proper HOWTO.

No normal person with a WordPress blog is going to go anywhere near that. Granted, if my livelihood depended upon my weblog, I would make the effort, and maybe that's the intended audience for his post. Most of us should probably just upgrade to 2.8.4 the hard way once, then pop in regularly and click the upgrade link if it's there. Hmmm, maybe I could create a cron job using my SSH key and&#8230; oh nevermind.