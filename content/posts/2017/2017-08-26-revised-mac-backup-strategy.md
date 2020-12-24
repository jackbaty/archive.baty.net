+++
date = "2017-08-26T11:01:16-04:00"
description = "A few tweaks to my backups"
slug = "revised-mac-backup-strategy"
tags = ["macos"]
title = "Revised Mac Backup Strategy"

+++

Whenever a drive fails in one of my Macs, I usually re-install everything from scratch. This happened to me again recently when the internal drive on my iMac failed. It feels good to start with a clean slate and re-evaluate what I need (or don't). I'm now finally back in action after a week of the usual set of "Oh yeah, I forgot I need to symlink that" and "How did I build this last time?"

Reinstalling and configuring apps is easy enough, but what about my _stuff_? Restoring files has gotten a lot easier over the years. 

I keep nearly everything in either iCloud or Dropbox. The only things that have needed special care are my photos, GPG keys, and SSH keys.

I regularly back up my SSH and GPG keys to an encrypted thumb drive, so those are covered.

For my music I'm just relying on Apple Music. I still have boatloads of MP3s on an external drive but never need them. It's either vinyl or streaming these days.

Photos are a whole other thing. I have decades of photos arranged carefully in dated folders and I like it that way. However, my [newly-discovered love of using an iPad](/2017/surprise-the-ipad-is-a-content-creation-device/) convinced me it was time to go all-in with Apple Photos and iCloud storage. I've imported all of my photos into Apple Photos and am letting iCloud handle things from there. It's weird, and I'm never comfortable when I can't right-click something and see a "Reveal in Finder" option, but the benefits are compelling. As a hedge, I plan to export copies of photos each month to my usual YYYY/MM-Month/image-name.jpg structure, just in case.

So here's how my backups are managed currently.

- Most of my "stuff" is synced using Dropbox and iCloud.
- The iMac's internal drive is backed up to a Time Machine drive for quick retrieval of recent files.
- The iMac's internal drive is also cloned nightly to a bootable backup using [Chronosync](https://www.econtechnologies.com/chronosync/overview.html) on another drive.
- All media (Photo backups, Videos, Audio, etc.) is on it's own external drive, and that drive is mirrored nightly to a second external drive using Chronosync.
- My photo library is managed with Apple Photos via iCloud (and are also backed up by Time Machine).
- Both the internal drive and the Media drive are backed up offsite to [Backblaze B2 Cloud Storage](https://www.backblaze.com/b2/cloud-storage.html) using [Arq](https://www.arqbackup.com).
- I still bring a full clone of everything on an external drive and bring it offsite once a year.

Am I missing anything?
