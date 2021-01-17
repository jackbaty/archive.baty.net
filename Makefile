PUBLIC_DIR=public/
SERVER_HOST=server01.baty.net
SERVER_DIR=/home/jbaty/apps/archive.baty.net/public_html
TARGET=DigitalOcean



deploy: build 
	@echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
	rsync -v -rz -e "ssh -i ~/.ssh/id_rsa" --checksum --delete --no-perms $(PUBLIC_DIR) $(SERVER_HOST):$(SERVER_DIR)


build:
	@echo "\033[0;32mBuilding site...\033[0m"
	@hugo

commit:
	git add -A
	git commit -m "Build site `date`"

push:
	git push origin master

clean:
	rm -rf $(PUBLIC_DIR)

.FORCE:

