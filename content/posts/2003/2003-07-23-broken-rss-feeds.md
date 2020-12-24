---
author: Jack
categories:
- Journal
date: "2003-07-24T01:53:04+00:00"
title: Broken RSS feeds
url: /2003/broken-rss-feeds/
---

After moving things around here recently I seem to have broken one of the legacy RSS feeds at /news.rss. The real feed is at /index.rdf, so a little mod_rewrite magic was required to fix it&#8230;



`RewriteRule ^news.rss index.rdf`

Sorry &#8216;bout that.