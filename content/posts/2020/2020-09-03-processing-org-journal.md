---
title: "Processing my org-journal each month"
date: 2020-09-03T22:12:56.416Z
tags: ["journaling","emacs","org mode"]
categories: ["Software"]
slug:
---

I use [org-journal](https://github.com/bastibe/org-journal][org-journal) for keeping my personal journal. My first entry was made on December 20, 2016 and I've made nearly 600 entries since then[^entries]. 

Most months usually do consist of a couple dozen entries, and it's important to me that I preserve them. One reason for using a text-based format like Org mode is that it's portable, flexible, easy to back up, and likely to last a while. Still, I don't trust anything digital to last forever, so I print my entries each month.

Here's my process for exporting and printing each month's journal entries.

Since each entry is in a separate file, I have to join them into one file containing all entries for the month. Each day's file begins with a top-level heading with the day's date, e.g. "Sunday, August 23 2020". Org-journal files are properly named using an ISO date such as `2020-08-23.org` so combining August's journal files looks like this...

`cat 2020-08-*.org > august.org`

Now I have an Org file with all the entries for August.

For pretty output I convert the Org file to a PDF using LaTeX. I prefer a nice 2-column layout. I put the following snippet at the beginning of the file...

```org-mode
#+TITLE: Journal
#+DATE: Month YYYY
#+SETUPFILE: ~/Dropbox/notes/org/_SETUP/EXPORT
#+SETUPFILE: ~/Dropbox/notes/org/_SETUP/DEFAULT
#+LaTeX_CLASS_OPTIONS: [11pt,twocolumn,portrait]
```

The EXPORT include looks like this..

```
#+AUTHOR: Jack Baty
#+OPTIONS: toc:nil num:nil <:nil ':t
#+OPTIONS: *:t -:t ::t <:nil H:4 \n:nil ^:{} arch:headline
#+OPTIONS: broken-links:t c:nil creator:nil
#+OPTIONS: author:t title:t date:t
#+OPTIONS: d:t e:t email:nil f:t inline:t num:nil
#+OPTIONS: p:nil pri:nil prop:nil stat:nil tags:nil tasks:t tex:t
#+OPTIONS: timestamp:nil toc:nil todo:nil |:t
#+SELECT_TAGS: export
#+EXCLUDE_TAGS: noexport nolatex

```

And the DEFAULT include looks like this (click to expand)...

```
#+LaTeX_CLASS: scrartcl
#+latex_class_options: [13pt]
%#+latex_class_options: [twocolumn,landscape]
#+LATEX_HEADER: \usepackage[letterpaper]{geometry}
#+LaTeX_HEADER: \geometry{verbose,tmargin=2cm,bmargin=2cm,lmargin=2cm,rmargin=3cm}
#+LATEX_HEADER: \usepackage{fontspec}
#+LATEX_HEADER: \usepackage{eso-pic}
#+LATEX_HEADER: \defaultfontfeatures{Mapping=tex-text,Scale=MatchLowercase}
%#+LATEX_HEADER: \usepackage[document]{ragged2e} % flushleft everything
#+LaTeX_HEADER: \setkomafont{title}{\sffamily\mdseries\upshape\normalsize}
#+LaTeX_HEADER: \setkomafont{sectioning}{\sffamily\mdseries\upshape\normalsize}
#+LaTeX_HEADER: \setkomafont{descriptionlabel}{\sffamily\mdseries\upshape\normalsize}
#+LaTeX_HEADER: \setmainfont{Helvetica Neue}


#+LATEX_HEADER: \usepackage{parskip}
#+LATEX_HEADER: \setlength{\parindent}{0pt}
#+LATEX_HEADER: \setlength{\parskip} {9pt plus 2pt minus 1pt}
#+LATEX_HEADER: \usepackage{titlesec} % left-align section numbers


#+LaTeX_HEADER: \titleformat{\section}{\normalfont\Large\bfseries}{\thesection}{1em}{}

#+LATEX_HEADER: \titlelabel{\llap{\thetitle\quad}}
#+LaTeX_HEADER: \usepackage{enumitem}
#+LaTeX_HEADER: \setlist{noitemsep} % remove vertical space between list items
#+LaTeX_HEADER: \hypersetup{colorlinks,%
#+LaTeX_HEADER: citecolor=blue,%
#+LaTeX_HEADER: filecolor=blue,%
#+LaTeX_HEADER: linkcolor=blue,%
#+LaTeX_HEADER: urlcolor=blue}
#+LaTeX_HEADER: \usepackage{url}
#+LaTeX_HEADER: \titlespacing\section{0pt}{12pt plus 4pt minus 2pt}{0pt plus 2pt minus 2pt}
#+LaTeX_HEADER: \titlespacing\subsection{0pt}{12pt plus 4pt minus 2pt}{0pt plus 2pt minus 2pt}
#+LaTeX_HEADER: \titlespacing\subsubsection{0pt}{12pt plus 4pt minus 2pt}{0pt plus 2pt minus 2pt}
#+LATEX_HEADER: \makeatletter
#+LATEX_HEADER: \renewcommand\maketitle{
#+LATEX_HEADER: {\LARGE{\@title}}
#+LATEX_HEADER: \vspace{1mm} \\
#+LATEX_HEADER: \hspace*{0mm}\textcolor{darkgray}{\@author\quad|\quad\@date \\
#+LATEX_HEADER: \vspace{8mm}}
#+LATEX_HEADER: }
```

A quick `Ctrl-c Ctrl-e l o` and I've got a lovely PDF that looks something like this...

{{< image src="/img/2020/2020-09-03-journal-pdf-screenshot.jpg" caption="A nicely-formatted PDF of my org-journal" >}}

I print and bind these every month so that, short of a fire, I'll have them forever.



[^entries]: If you do the math, you'll see that I'm not terribly consistent. I'm trying to do better.



