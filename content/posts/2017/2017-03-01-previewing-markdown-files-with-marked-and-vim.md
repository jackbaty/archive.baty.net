+++
date = "2016-12-14T19:22:08-05:00"
slug = "previewing-markdown-files-with-marked-and-vim"
tags = ["Vim", "Markdown"]
title = "Previewing Markdown Files with Marked and Vim"

+++



I’ve been tinkering with [Vimwiki](https://github.com/vimwiki/vimwiki)
again. It happens.

While editing Markdown files, I often want to see a preview of the file
as HTML. This is where Brett Terpstra’s [Marked](http://marked2app.com/)
comes in handy.

I didn’t know the best way to start previewing a file directly from Vim
to Marked. A quick search turned up this [post by Rob Allen](https://dzone.com/articles/use-vims-make-to-preview-markdown)
showing how to use Vim’s make command to open the current file in
Marked.

It’s easy. In \~/.vim/ftplugin/markdown.vim, I added the following line…

``` {.vim}
set makeprg=open\ -a\ Marked\\\ 2.app\ '%:p
```

Now, when editing any Markdown file I just type :make and that file
opens in Marked. Neat.
