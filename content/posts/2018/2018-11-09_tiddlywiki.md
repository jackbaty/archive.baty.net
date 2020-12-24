---
date: "2018-11-12"
slug: ""
tags:
- tiddlywiki
- wiki
title: TiddlyWiki
---

I'm infatuated with [TiddlyWiki][tiddlywiki] again. I've tried it a few times over the years, but it's never stuck. One reason was that TiddlyWiki is a single, self-contained html file, and Safari has trouble saving itself to the file system. In order to save the thing I had to basically do a "Save As..." each time. Too much friction there.

Another snag has been that it's kind of weird. Not weird in a bad way, but weird in a 'what do I do with this thing?' way.

A week or so ago I decided to dive back in. The first thing I learned is that TiddlyWiki can be run as a Node app. This means that each "tiddler" is stored separately as a plain text file. 

So something like:

```
npm install -g tiddlywiki
tiddlywiki mywiki --init server
tiddlywiki mywiki --server
```

Visited http://127.0.0.1:8080/ in a browser and I was off and running. That solved the Safari problem. It also makes it possible to edit the wiki using whatever my favorite text editor is this week, if I were so inclined.

Getting over the strangeness of TiddlyWiki has been a matter of jumping in and using it. I've been thinking of TiddlyWiki as a Zettelkasten[^luhmann], and each tiddler as a "zettel". This has helped frame things in a way that makes sense to me. Each tiddler represents a single topic or thought or idea.

I'm not sure how far I'd take TiddlyWiki as a Zettelkastan, though. If I were thinking of building a long-term Zettelkastan, I'd probably use something like [The Archive][zettelkasten].

The other thing I'm learning is that TiddlyWiki is more powerful than a casual look would indicate. Macros, plugins, filters, etc. allow all sorts of custom behavior. I've only scratched the surface.

So for fun, I'm occasionally entering stuff in a local wiki, saving the file, and publishing the result at http://wiki.baty.net/. I do this with a small Makefile that looks something like this[^build]...

```
PUBLIC_DIR=output/
SERVER_HOST=static.baty.net
SERVER_DIR=/home/jbaty/apps/wiki
TARGET=Static

deploy: commit push
	@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
	mv ~/Downloads/Jack\ Baty\'s\ Wiki.html ~/Downloads/tiddlywiki.html
	rsync -v -rz --checksum --delete --no-perms ~/Downloads/tiddlywiki.html $(SERVER_HOST):$(SERVER_DIR)


build: clean

	@echo "\033[0;32mBuilding site...\033[0m"
	tiddlywiki ./ --render "[!is[system]]" "[encodeuricomponent[]addprefix[output/]addsuffix[.html]]"

commit:
	git add -A
	git commit -m "Build wiki `date`"

push:
	git push origin master

clean:
	rm -rf $(PUBLIC_DIR)

.FORCE:
```

TiddlyWiki is fun to play with, but I don't know yet whether I'll ever use it consistently. So far it feels like I'm using it to write a blog, and the last thing I need is another blog. Still, it has potential.


[^luhmann]: [Luhmann's Zettelkasten](http://takingnotenow.blogspot.com/2007/12/luhmanns-zettelkasten.html) M. Kuen, 2007 

[tiddlywiki]: https://tiddlywiki.com/
[zettelkasten]: https://zettelkasten.de/the-archive/
[^build]: I haven't figured out the `build` portion yet.
