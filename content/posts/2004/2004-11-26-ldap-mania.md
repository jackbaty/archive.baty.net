---
author: Jack
categories:
- Journal
date: "2004-11-26T16:52:22+00:00"
title: LDAP Mania
url: /2004/ldap-mania/
---

[OpenLDAP][1] is difficult, confusing and comes with lots and lots of incomprehensible documentation. Or at least that has been my experience with it.

I've spent countless hours pouring over documentation, forums, weblogs and what have you trying to get a grip on this thing. I think I finally get it. It's really not much different than heirarchy of unusually-named folders. It's also quite groovy. It's like having a lightweight database with easy replication and being able to store pretty much any collection of objects &#8211; users accounts, equipment, etc &#8211; all accessible via a popular and ubiquitous interface.

Long story short, I've finally got a working LDAP server running (with a lot of help from [Jeremy][2]) and managed using [phpldapadmin][3]

I've set up Apache to use LDAP authentication. This meant also getting a handle on mod_ldap, which is nearly as confusing. The crux of this is that I now have hundreds of contacts available via LDAP (using an authenticated query) which I can use for lookups in my email client, authenticating web site users, Samba authentication and tons of other stuff. One step closer to a single sign on solution and never had to say "Active Directory" even once.

 [1]: http://www.openldap.org
 [2]: http://www.jeremydurham.com
 [3]: http://phpldapadmin.sourceforge.net/