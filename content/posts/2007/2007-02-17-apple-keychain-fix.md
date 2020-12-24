---
author: Jack
categories:
- Journal
date: "2007-02-17T23:19:52+00:00"
title: Apple Keychain Fix
url: /2007/apple-keychain-fix/
---

When I launched [Adium][1] this morning it was kind enough to tell me that version 1.0.1 was available and asked if I'd like to install it. Of course I would, thank you. Once the install was complete, I was also asked if I'd like to allow the new version to use all of the previous Keychain information. Yup, so I clicked "Change All" and waited&#8230; and waited. My MacBook started thrashing so badly as to be unusable. 

Long story short, after farting around for a couple of hours, [this post at unsanity.org][2] had the answer.

> `sudo mv /var/db/CodeEquivalenceDatabase /var/db/CodeEquivalenceDatabase.old`
> 
> or
> 
> open /var/db (and then manually move CodeEquivalenceDatabase to the trash.)
> 
> 

Seems securityd will flail about gobbling up memory and getting rid of CodeEquivalenceDatabase clears things up nicely.

 [1]: http://www.adiumx.org/
 [2]: http://www.unsanity.org/archives/security/love_tropicana.php