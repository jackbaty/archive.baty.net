+++
date = "2017-01-19T20:17:08-05:00"
slug = "capturing-to-an-orgmode-date-tree-in-current-buffer"
tags = ["Orgmode"]
title = "Capturing To An Org-Mode Date Tree In Current Buffer"

+++



I use Capture Templates in Org Mode for all sorts of things. Frequently,
I want to capture something to a date tree, which automatically
organizes entries by Year-&gt;Month-&gt;Day.

{{< figure src="/img/2017/buffer-tree.png" title="" >}}

The usual way of doing this is to specify the target file as part of the
capture template, like this…

``` {.example}
("d" "Daybook" entry
(file+datetree "~/org/daybook.org")
"* %?\n%t")
```

What I also wanted to do was capture to a date tree in the buffer I’m
already visiting. This meant that I couldn’t specify the file name ahead
of time. I assumed doing this would require a bunch of fancy tricks (I’m
not good at writing lisp), but it turned out to be easy. I simply
replaced what would normally be a string containing the target file’s
name with buffer-file-name, like this…

``` {.example}
("l" "Current file log entry" entry
(file+datetree buffer-file-name)
"* %? \n%u")
```

Now, I can easily add an entry to a date tree in any file I’m working
on.
