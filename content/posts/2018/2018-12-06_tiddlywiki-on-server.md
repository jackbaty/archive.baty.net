+++
date = "2018-12-06"
slug = "tiddlywiki-on-server"
tags = ["tiddlywiki", "wiki"]
title = "Running Tiddlywiki on a server"

+++

I'm still tinkering with [Tiddlywiki](https://tiddlywiki.com) because I'm convinced there's something to it. [Version 5.1.18 was released](https://tiddlywiki.com/#Releases) recently and included improvements to the web server features.

The thing I've been waiting for is the ability to run the node version as read-only for anonymous users but editable by authenticated users. This worked great while testing on my local machine, but I had trouble when running it out on a server, proxied via nginx.

The problem was that even after I authenticated, the wiki was still in read-only mode. I think what may be happening is that the nginx proxy isn't forwarding the proper headers and so Tiddlywiki doesn't know that I'm logged in.

Another issue was that the node process would die after a handful of requests. I'd see a "Killed" message in the terminal and the app would stop responding.

So for now I'm still doing it the old-fashioned way. I'm editing locally and rsync-ing the results to the server. I created a little Makefile to make it easier.

```
PUBLIC_DIR=output/
SERVER_HOST=static.baty.net
SERVER_DIR=/home/jbaty/apps/wiki
TARGET=lightsail

deploy: build
	@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
	rsync -v -rz --checksum --delete --no-perms ~/Dropbox/wiki/batywiki/output/index.html $(SERVER_HOST):$(SERVER_DIR)


build: clean
	@echo "\033[0;32mBuilding site...\033[0m"
	tiddlywiki ./ --build index

commit:
	git add -A
	git commit -m "Build site `date`"

push:
	git push origin master

clean:
	rm -rf $(PUBLIC_DIR)

.FORCE:
```


