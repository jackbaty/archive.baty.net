---
author: Jack
categories:
- Journal
date: "2005-03-10T16:55:51+00:00"
title: Don’t forget SQLite
url: /2005/dont-forget-sqlite/
---

I love databases. Mostly this love is poured into MySQL these days. Used to be that everything I did was in SQLServer but thankfully those days are nearly gone. Yesterday I was lamenting the fact that I don't know PostgreSQL well enough. I hear great things and if you're looking for an "academically correct" implementation without the (mostly theoretical) shortcomings of MySQL, Postgres is the way to go. Well [Jeremy][1] overheard this and today brought me a big fat PostgreSQL book. Crap, you just **know** I'm gonna hafta read it.

When developing real world web applications, it's rare to need more than what MySQL provides. And truthfully, many times even that is overkill. Enter [SQLite][2]. From their site&#8230;

SQLite is a small C library that implements a self-contained, embeddable, zero-configuration SQL database engine. Features include:

</p> 

  * Transactions are atomic, consistent, isolated, and durable (ACID) even after system crashes and power failures.


  * Zero-configuration &#8211; no setup or administration needed.


  * Implements most of SQL92.&nbsp; (Features not supported)


  * A complete database is stored in a single disk file.


  * Supports databases up to 2 terabytes (241 bytes) in size.


  * Small code footprint: less than 30K lines of C code, less than 250KB code space (gcc on i486)


  * Faster than popular client/server database engines for most common operations.


  * Sources are in the public domain.&nbsp; Use for any purpose.
</ul> 

I'm guessing it doesn't get nearly enough credit and I'm pretty sure it will get used by me quite a lot &#8211; now that I think about it.

 [1]: http://www.jeremydurham.com
 [2]: http://www.sqlite.org