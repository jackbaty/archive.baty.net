---
date: "2014-12-13T19:53:45-04:00"
description: ""
draft: false
tags:
- Beets
- Music
title: Beets Music Organizer
topics:
- App
---

2014-12-13 Installed on iMac

Downloading all iTunes songs to /Volumes/Media and will import into beets when complete. It's like 6,000 songs so may be a while

2014-12-14

Installing and configuring beets for managing music library

Ran into bug https://github.com/sampsyo/beets/issues/1117

Waiting for upgrade to beets, sigh. Ok never mind I installed from source (via Pip)

Running

```
$ beet import -q ~/Volumes/Media/MusicImport
```

Then

```
$ beet import /Volumes/Media/MusicImport
```
