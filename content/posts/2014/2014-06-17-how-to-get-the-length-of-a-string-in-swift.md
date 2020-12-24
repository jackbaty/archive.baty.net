---
author: Jack
categories:
- Journal
date: "2014-06-17T19:00:00+00:00"
dsq_thread_id:
- 3595720
tags:
- programming
title: How to Get the Length of a String in Swift
url: /2014/how-to-get-the-length-of-a-string-in-swift/
---

* * *

Arthur Ariel Sabintsev on Medium:

> Apple explicitly states in their Swift iBook that the String class is bridged seamlessly to the NSString class and can make use of its APIs, however, the length method
> doesn't exist. That's because unicode characters in Swift don't all take up the same unit of storage in memory, and therefore calling NSString's length , which is
> based on 16-bit code units, on a Swift String, wont work.

I just don't have the patience for this kind of stuff anymore.
