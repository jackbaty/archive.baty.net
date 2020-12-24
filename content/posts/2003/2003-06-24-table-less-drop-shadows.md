---
author: Jack
categories:
- Journal
date: "2003-06-25T04:15:14+00:00"
title: Table-less drop shadows
url: /2003/table-less-drop-shadows/
---

I totally lifted this from [Tom
  

  
Gilder's Blog][1], but what a clever little trick. Notice the drop
  

  
shadow around the banner (where it say's White Noise up there.) This
  

  
effect used to require a number of nested tables, which we all now
  

  
know to be a Bad Idea. Instead, there are 6 nested DIV elements, each
  

  
with a different background image. Mix with some fancy CSS bits like
  

  
repeat-y and repeat-x and viola! A simple, lightweight drop shadow
  

  
effect without a TABLE element to be found.

Here's a CSS snippet:

<pre>.shadow-1 {
background: url(/images/shadow-b.png)
repeat-x bottom left;
width: 12em; }
</pre>

One question: Do nested DIVs suffer the same performance issues as
  

  
nested TABLEs?

 [1]: http://blog.tom.me.uk/