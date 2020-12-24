---
author: Jack
categories:
- Software
date: "2016-05-14T17:33:51+00:00"
tags:
- emacs
- email
- mu4e
- spacemacs
title: Saving a Maildir email as .eml using Mu4e
url: /2016/saving-a-maildir-email-as-eml-using-mu4e/
---

I use Emacs and [Mu4e][1] for managing email. Normally having all of my email as text files in Maildir format is fine. There are times, though, when I want to save a copy of an email and put it in DEVONthink with everything else. DEVONthink handles email very well, meaning it previews the headers separate from the messages and formats things nicely. The problem is that this only works with .eml files.

Both Maildir and .eml files are plain text, so I took a guess and added .eml to the end of a stock Maildir file and it worked. The file was easily preview-able in the Finder and DEVONthink thinks it's a normal email message. The challenge then, was to figure out an easy way to copy whatever email I'm viewing in Mu4e to a .eml file somewhere.

I have no experience writing lisp so I asked on the mu mailing list and soon received a reply from Mu4e's author, Dirk-Jan Binnema (‘djcb’).  He sent this:

<pre class="lang:lisp decode:true ">(defun djcb-mu4e-copy-message-at-point (&optional dir)
  "Copy message at point to somewhere else as &lt;date&gt;_&lt;subject&gt;.eml."
  (interactive)
  (let* ((msg (mu4e-message-at-point))
         (target (format "%s_%s.eml"
                         (format-time-string "%F" (mu4e-message-field msg :date))
                         (or (mu4e-message-field msg :subject) "No subject"))))
    (copy-file
     (mu4e-message-field msg :path)
     (format "%s/%s" (or dir (read-directory-name "Copy message to: ")) target) 1)))
</pre>

I added that to my init file and assigned it to <F5>. Now, when I'm reading an email and want to save a copy, I just hit <F5> and (optionally) enter a directory and the message is saved as a .eml file named using the email's date and subject. Very handy!

 [1]: http://www.djcbsoftware.nl/code/mu/mu4e.html