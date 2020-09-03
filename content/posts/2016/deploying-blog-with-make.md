---
date: 2016-01-29T13:57:56-05:00
description: ""
tags:
- blogging
title: Deploying My Blog Using make
---

I can now deploy this site (currently built using [Hugo](http://gohugo.io/)) by typing `make` in a terminal.

Here's the Makefile...

```
PUBLIC_DIR=public/
SERVER_HOST=server.baty.net
SERVER_DIR=/home/jbaty/apps/baty.net
TARGET=github

all: build deploy

server:
		hugo server

build:
		hugo

deploy: commit push
		@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
ifeq "$(TARGET)" "github"
	git subtree push --prefix=public git@github.com:jackbaty/baty.net.git gh-pages
else
	rsync -v -rz -e "ssh -l jbaty" --checksum --delete --no-perms $(PUBLIC_DIR) $(SERVER_HOST):$(SERVER_DIR)
endif

commit:
		git add -A
		git commit -m "Build site `date`"

push:
		git push origin master

clean:
		rm -rf $(PUBLIC_DIR)

.FORCE:

```

I don't know the first thing about writing makefiles but this seems to work. 
I sometimes host using Github Pages and sometimes on my own VPS. I can just change the `TARGET` macro to
change where the site goes. This might be overkill but I learned a few things so it was worth it.

<!--more-->
