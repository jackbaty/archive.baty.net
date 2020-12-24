+++
author = "Jack"
categories = ["Journal"]
date = "2013-02-23T00:00:00+00:00"
tags = ["Tinderbox"]
title = "Using Tinderbox to publish LaTeX documents"
url = "/2013/using-tinderbox-to-publish-latex-documents/"

+++

Every now and then I find myself fascinated with [LaTeX][1] even though I have no real need for it. I don't write academic papers. I don't need to represent complex mathematical equations. I don't write long documents requiring references, figures, or any of the other things LaTeX is so good at. What I like most about LaTeX is the way it formats text. I also like the idea of leaving layout or design out of the document and focusing on content. No need to waste time "finger painting" my documents, and yet the output is beautiful.

The down side of LaTeX is complexity. Getting the broad strokes to work is easy, but when it comes time to make detailed changes things I quickly become lost. So I cheat by using [Markdown][2] in BBEdit, then converting the document to PDF using [Pandoc][3]. This works a treat if I'm always creating the same type of document, but I have a number of variations that I like to use, and what I ended up with is a mess of shell scripts and BBEdit macros all over the place. While it got me through, I thought I'd try some thing else.

My recent return to [Blogging with Tinderbox][4] had me digging into Tinderbox's export templates more deeply than I've done before. It occurred to me that [Tinderbox][5] might also be suitable for creating LaTeX documents.

What I've done so far is create several Notes in Tinderbox to use as Templates while exporting content. These are comprised of LaTeX markup interspersed with content from the current Tinderbox Note. At its most basic, one of my templates looks like this:

<pre class="code">documentclass{article}
setlength{parindent}{0pt}
setlength{parskip}{2ex}
usepackage[top=2in, bottom=1.5in, left=1in, right=1in]{geometry}
usepackage{graphicx}
^if($Draft)^
usepackage{draftwatermark}
SetWatermarkText{DRAFT}
SetWatermarkScale{2}
SetWatermarkColor[gray]{.9}
^endif^
title{^title^}
author{^value($Author)^}
begin{document}
maketitle
^text^
end{document}
</pre>

Setting the above as the export Template for a Tinderbox Note will generate a complete LaTeX document by replacing the output markers (e.g. ^title^) with content from my current note. I can then typeset the output using whatever LaTeX tool is handy.

That in itself may not be enough to justify the effort, but when I add other attributes to a Note I can get fancy by using the export tools in Tinderbox to tweak things without having to have the LaTeX manual open all the time.

For example, you see that "^if($Draft)^" section? I use that so I don't accidentally send a document I haven't finished. "Draft" is a boolean attribute I added to Tinderbox. If Draft is checked (true) then the document is rendered with a "DRAFT" watermark over it, like so.

![Watermark][6]

I've added other default attributes such as "Author" and "To" and "PublishDate" so that I can easily set them as part of a Tinderbox Note and have them included where appropriate in the LaTeX file and thus the final document.

![Note Attributes][7]

I have templates for Letter, Article, Memo, and Estimate so far. To determine which is used for a particular Note, I set the Export Template while exporting from Tinderbox.

![Export Dialog][8]

I'm already thinking of other document types and attributes that could be useful. Using Tinderbox as a publishing tool has provided an easy way to generate nicely-typeset versions of my most frequently used document types by simply writing as I normally would.

 [1]: http://en.wikipedia.org/wiki/LaTeX
 [2]: http://daringfireball.net/projects/markdown/
 [3]: http://johnmacfarlane.net/pandoc/
 [4]: /2013/blogging-with-tinderbox/
 [5]: http://www.eastgate.com/Tinderbox/
 [6]: /img/draft-watermark.png
 [7]: /img/note-attributes.png
 [8]: /img/export-dialog.png
