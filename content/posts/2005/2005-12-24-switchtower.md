---
author: Jack
categories:
- Journal
date: "2005-12-24T12:23:04+00:00"
title: Switchtower
url: /2005/switchtower/
---

Today, [Switchtower](<http://manuals.rubyonrails.com/read/book/17>) became the preferred method of deployment for Rails apps. Why? Because when a new version of an application needs to be pushed to production, I can now type "rake deploy" on my development machine and it's done. With judicious use of switchtower recipes, all of the little things that typically need to be done when updating a web app are handled automatically. And what's more, if something goes wrong I can simply run "rake rollback" and the old version gets put back automatically. Isn't that just neato? 

Here's a summary of what happens when I use Switchtower to deploy the site I'm working on&#8230; 

1. Checks out the latest version of the site from Subversion to a new directory in "releases/" 

2. Creates a symlink pointing "current" to the new release 

3. Creates a symlink for shared resources not in Subversion (e.g. /images/products) to a shared location 

4. Changes appropriate web server file permissions so ownership and rights are correct 

5. Runs a custom script which restarts the web server (lighttpd) 

Viola! The latest code is running on the production server. I'm still new to this whole idea, but I can already see that it will become an indispensable part of my workflow.