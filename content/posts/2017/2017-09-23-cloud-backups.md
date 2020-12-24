---
author: Jack
categories:
- Tech
date: "2017-09-23T14:29:08+00:00"
mf2_syndicate-to:
- a:1:{i:0;s:4:"none";}
tags:
- hardware
title: Cloud backups
url: /2017/cloud-backups/
---
I am no longer backing up my drives using a cloud backup service. Namely, [Arq][1] to [Backblaze B2][2].

This seems like a terrible idea, and perhaps it is, but a few things happened recently that have caused me to throw up my hands and quit.

First, I&#8217;ve locked myself out of my Backblaze B2 account. This is because I stupidly wiped my iPhone before reconfiguring my two-factor auth entries in Google Authenticator. Doing that without making copies of the 2FA backup codes was unwise. A few emails with support haven&#8217;t gotten me very far and I&#8217;m tired of trying.

Second, Arq isn&#8217;t working properly. Suddenly it claims that I don&#8217;t have anything configured to back up. Pretty sure I do. This could be due to running High Sierra but I can&#8217;t tell. I also can&#8217;t tell what Arq is actually _doing_. I&#8217;ve always just let Arq do its thing but now that I&#8217;ve dug in I&#8217;m finding it difficult to determine what has been backed up, what hasn&#8217;t, and how much time/bandwidth I&#8217;m going to need.

Third, and speaking of bandwidth, I&#8217;ve exceeded my Xfinity quota for the second month in a row, meaning they&#8217;ll start charging me for overages. This is a first and no doubt all of these new backups are contributing.

Frankly, I&#8217;m tired of thinking about it. The smart thing to do would be to just install and use Backblaze&#8217;s automated backups but for now I&#8217;m not sure I need it.

  * All of my working files are in either Dropbox or iCloud
  * Photos are in iCloud and Google Photos
  * Older files are mostly in DEVONthink, which is synced and in Dropbox

There&#8217;s really not much at risk these days. I&#8217;ve only removed one step from my [backup strategy][3], and it&#8217;s one I think I can do without.

 [1]: https://www.arqbackup.com
 [2]: https://www.backblaze.com/b2/cloud-storage.html
 [3]: https://baty.net/2017/revised-mac-backup-strategy/