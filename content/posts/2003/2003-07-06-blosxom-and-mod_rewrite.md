+++
author = "Jack"
categories = ["Journal"]
date = "2003-07-06T16:03:14+00:00"
title = "Blosxom and mod_rewrite"
url = "/2003/blosxom-and-mod_rewrite/"

+++

Using [Blosxom][1] as a

weblog engine is working out quite well. The biggest hurdle was in
  

  
creating friendly URLs. I didn't want the address for my blog to be
  

  
<https://jackbaty.com/cgi-bin/blosxom.cgi>. Once again, Apache's
  

  
mod_rewrite solves the problem. Here's the snippet from the .htaccess

file&#8230;

<pre>RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ cgi-bin/blosxom.cgi/$1 [L,QSA]
</pre>

It works by checking the filename requested by the browser. If the
  

  
filename does not point to a file or directory, it rewrites the url by

prepending "cgi-bin/blosxom.cgi" to the requested document. So, if I
  

  
type <https://jackbaty.com/some_story.html>, the server actually serves
  

  
up <https://jackbaty.com/cgi-bin/blosxom.cgi/some_story.html>, which is a

valid blosxom URL. Neato, eh?

By the way, I found the above technique in the [blosxom faq][2],

but I thought it was worth repeating.

 [1]: http://www.raelity.org/apps/blosxom/
 [2]: //www.raelity.org/apps/blosxom/faq.shtml"