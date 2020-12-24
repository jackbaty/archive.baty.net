---
date: "2017-08-10T12:34:38-04:00"
description: Updating this site using Blink.sh and Netlify from my iPad
draft: false
slug: static-blogging-fro—ipad
tags:
- ipad
- blogging
- static
title: Static Blogging from the iPad
---

[baty.net](https://baty.net) is currently a static site, built using
[Hugo](https://gohugo.io) and served by Netlify. In order to publish, I have to
create a text (markdown) file in a certain folder, with a bit of specific YAML
front matter. Then, I have to commit the changes and push to its Gitlab repo.
Netlify takes it from there. 

Since the entire site also lives in Dropbox, creating the file is pretty simple
on the iPad. It's the commit/push part that's a little trickier.

Using [Blink Shell](https://github.com/blinksh/blink), I can shell into one of
my servers and create and edit files using Vim, which I love. Once complete, I
just commit and push right from the terminal session and Boom!, published.

To make that last part easier I have a `make` file that looks like this...

```
PUBLIC_DIR=public/
SERVER_HOST=do.baty.net
SERVER_DIR=./apps/batydotnet/public/
TARGET=netlify

build:
		hugo

server:
		hugo server

deploy:  commit push
		@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
ifeq "$(TARGET)" "netlify"
# Tell Netlify we're coming
	curl -X POST -d '{}' https://api.netlify.com/build_hooks/[SNIP]
	@echo "You're all set, just hang tight"
else
	rsync -v -rz -e "ssh -l serverpilot" --checksum --delete --no-perms $(PUBLIC_DIR) $(SERVER_HOST):$(SERVER_DIR)
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

I don't get a handy preview in the browser via `hugo server` this way, but it's
not bad.

