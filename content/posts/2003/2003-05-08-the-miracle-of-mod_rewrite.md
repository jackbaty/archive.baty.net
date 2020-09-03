---
author: Jack
categories:
- Journal
date: 2003-05-09T01:32:12+00:00
title: The miracle of mod_rewrite
url: /2003/the-miracle-of-mod_rewrite/
---

Moved a bunch of stuff around today, before I saw that some folks (including Robert Daeley, author of [PHPosxom][1]) had linked to my post about PHPetal earlier. The permalink for the original post was <https://www.jackbaty.com/index.php?entry=/geek/untitled.txt>. In the meantime I renamed the /geek directory to /dev. This of course broke the links. I'm learning the joys of mod_rewrite and this little bit fixed things right up.

<pre>RewriteCond %{QUERY_STRING} ^entry=/geek/untitled.txt
RewriteRule ^(.*)$
/index.php?entry=/dev/untitled.txt [R]
</pre>

Cool!

 [1]: http://www.celsius1414.com/blog/index.php?category=meta/phposxom