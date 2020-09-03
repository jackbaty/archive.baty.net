+++
title = "Syncthing"
date = 2018-05-20T12:14:00-04:00
tags = ["sync", "dropbox"]
draft = false
+++

<img src="/img/2018/2018-05-20-syncthing-logo.svg" alt="Syncthing"" width="300"/>

I've been testing [Syncthing](https://syncthing.net/) as a replacement for Dropbox and so far it's been great.

I am currently syncing over 25,000 files in 5 directories across two Macs and one
Linux machine. It has worked nearly without a hitch. I say "nearly" because
after changing the case of a few filenames those now show as "out of sync". They
synced fine but show as unsynced. I assume this is due to case-sensitive vs
case-insensitive file systems. I'll need to figure this out but it's more an
inconvenience than a problem[^fn:1].

I'm still using Dropbox for things I'm sharing with others, and probably
always will, but for things I don't want anywhere near a "cloud", Syncthing
seems like a perfectly fine solution.

[^fn:1]: The case-insensitive rename issue is [known](https://github.com/syncthing/syncthing/issues/1787) and tricky to solve.
