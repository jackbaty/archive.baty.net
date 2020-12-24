---
author: Jack
categories:
- Journal
date: "2015-11-28T11:34:48+00:00"
tags:
- Blogging
- emacs
- orgmode
title: Publishing My Notes Using Org Mode
url: /2015/publishing-my-notes-using-org-mode/
---

I write things down as they occur to me and I sometimes want to share them because that’s what we do now. For the past couple of years I’ve maintained a static site containing these notes at [notes.baty.net][1]. I used Dave Winer’s excellent outliner [Fargo][2] as both the authoring and publishing tool. Fargo works great, but I changed it all yesterday to use [Org Mode][3] instead.

Emacs (via Org Mode) has become my default editor and document publisher. It’s my planner and sometimes journal. Why not my website publisher as well? This occurred to me as I was writing some notes about Emacs using Vimwiki (hah!) and realized that I should probably convert my vimwiki notes to Org Mode. Easy enough…

    find . -name \*.md -type f -exec pandoc -f markdown -t org -o {}.org {} \;

The reverse works if you want to change them back. Pandoc is awesome.

<pre class="lang:default decode:true ">find . -name \*.org -type f -exec pandoc -f org -t markdown -o {}.md {} \;</pre>

&nbsp;

&nbsp;

I then edited each file and added some consistent configuration options like so…

    #+TITLE: Notes
    #+SETUPFILE: ~/.emacs.d/org-templates/level-0.org
    

The file level-0.org looks like this…

    #+OPTIONS: ':nil *:t -:t ::t <:t \n:nil ^:t arch:headline author:t c:nil
    #+OPTIONS: creator:nil d:(not "LOGBOOK") date:t e:t email:t f:t inline:t
    #+OPTIONS: num:nil p:nil pri:nil prop:nil stat:t tags:t tasks:nil tex:t timestamp:t
    #+OPTIONS: H:2 toc:nil todo:nil |:t >:nil ^:nil
    #+LANGUAGE: en
    #+SELECT_TAGS: export
    #+EXCLUDE_TAGS: noexport
    #+HTML_HEAD: <link rel='stylesheet' href='css/styles.css' />
    

This sets up a few export options and embeds a stylesheet reference. I also have copies of this file with the relative links changed for additional levels (e.g. level-1.org etc.) I should probably just change to absolute links everywhere since I don’t use the output anywhere other than via a web server.

For anyone interested, the relevant configuration in Emacs looks like this…

<pre><code class="language-lisp">;; HTML and Publishing

  (setq org-html-validation-link nil)
  (setf org-export-html-coding-system 'utf-8-unix)

    (setf org-html-postamble t)
    (setf org-html-postamble-format
      (list
       (list
	"en"
	(concat
	 "&lt;p&gt;Author: Jack Baty &lt;a href='mailto:%e' rel='author'&gt;%e&lt;/a&gt;.&lt;br&gt;\n"
	 "Last update : %C"
	 "&lt;/p&gt;"))))


(setq org-publish-project-alist
      '(
        ("notes" :components ("notes-org" "notes-static"))

        ("notes-org"
         :base-directory "~/Sites/notes/content/"
         :base-extension "org"
         :publishing-directory "~/Sites/notes/public_html/"
         :recursive t
         :publishing-function org-html-publish-to-html
         :html-html5-fancy t
         :auto-sitemap t
         :exclude "nav.org"
         :sitemap-title ""
         :html-head-include-default-style nil
         :html-head-include-scripts nil
        )

        ("notes-static"
		 :base-directory "~/Sites/notes/content/"
		 :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf"
		 :publishing-directory "~/Sites/notes/public_html/"
		 :recursive t
		 :publishing-function org-publish-attachment
		)

    )

)
</code></pre>

This is all new to me, since I’m a recent convert to Emacs ([Spacemacs][4], actually) so much of the above was copied and pasted from various sources online and tweaked to suit my preferences. The only thing missing was a simple way to navigate around the site. I improved this by including a small file containing the HTML for site navigation in each document…

`#+INCLUDE nav.org`

With the above in place I can simply take notes in any of the .org files in the /content/ directory and hit `M-x org-publish RET notes RET` and I end up with a bunch of nice HTML documents ready to publish.

Publishing to the web server is done using a small shell script and the [Ship utility][5] from Carrot. My script commits any changes (to Git), pushes them, and deployes the rendered HTML to an Amazon S3 bucket. It took me nearly all day to figure it all out, and I’m not finished, but I like what I have so far. Everything is at [notes.baty.net][1].

 [1]: http://notes.baty.net/
 [2]: http://fargo.io/
 [3]: http://orgmode.org/
 [4]: https://github.com/syl20bnr/spacemacs
 [5]: https://github.com/carrot/ship