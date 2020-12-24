+++
author = "Jack"
categories = ["Journal"]
date = "2015-05-30T15:15:14+00:00"
title = "Publishing to a Hugo Blog using Alfred"
url = "/2015/publishing-to-a-hugo-blog-using-alfred/"

+++

Publishing a new post to this ([Hugo][1]) blog is easy, but involves too many steps. First, I have to create the file, then open it in my editor, like this:

$ hugo new post/2015/my-new-post-name.md
  
$ vi post/2015/my-new-post-name.md

Then in my editor I have to edit the title using proper case, etc. Not bad, but I can't think of any reason it wouldn't at least open the file in my editor as part of the "new" command. Oh well, since this is all based around the command line and text files it should be easy to make that happen.

I don't get the same charge out of writing scripts as I used to, so I looked around to see what others might have done. I found [this post by Amit Jain][2] explaining how he solves the same problem (but using Jekyll rather than Hugo). In his post he links to a handy [Alfred][3] workflow. I modified it to work with Hugo. This has made posting to Hugo even easier.

 [1]: http://coopcoding.com/blog/my-jekyll-setup-for-this-blog/
 [2]: http://spinhalf.net/2015/01/04/getting-started-with-a-jekyll-blog/
 [3]: http://www.alfredapp.com