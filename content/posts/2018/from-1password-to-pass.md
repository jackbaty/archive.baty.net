---
date: "2018-03-11T11:33:51-04:00"
description: ""
draft: false
lastmod: "2018-03-11T11:34:13-04:00"
tags:
- security
- iOS
title: From 1Password to Pass
---

My recent experiment with Linux has me rethinking my password management strategy.

I've been using [1Password](https://1password.com/) to manage passwords on my Mac and iPhone. 1Password is a great way for most people with Macs to manage passwords. Since I recently started using Linux alongside my Macs, I need better cross-platform support. I could use something similar to 1Password that also runs on Linux such as [KeePassX](https://www.keepassx.org/). Or, I could run 1Password for Windows under [Wine](https://www.winehq.org/).

As it happens, I've also been using the wonderful command line password tool "[Pass](https://www.passwordstore.org/)" for years and love it.

Pass is basically a simple wrapper around a folder full of gpg-encrypted text files. This means I can manage password files using the usual set of either command line tools or the Mac Finder or whatever else that can shuffle files around. I can also maintain history by keeping them in a Git repo. Pass has extensions for Alfred on Mac and dmenu on Linux. Using these, I can find and copy my passwords at least as fast as with 1Password...probably faster. 

The thing that had kept me from going all-in with Pass is that I didn't have
acccess to my Pass passwords on my iPhone. Then I discovered [Pass for
iOS](https://github.com/mssun/passforios). Pass for iOS is an iOS app that
works with Pass passwords. Using a git repo of the encrypted password store with
ssh and gpg keys, I have full access to all of my passwords from pass. It also
has an iOS extension for Safari so that it works just like 1Password on iOS.
Pass for iOS even has support for one-time passwords, although I haven't tried
that yet.

I have exported all of my 1Password passwords and converted them using Pass and now all my passwords are stored as encrypted text files in a nice, organized folder hierarchy. I can copy them, move them, and back them up using any of the usual tools. This feels liberating.

I'll keep 1Password around for a month or two just in case, but unless something weird happens with Pass, I'll be able to cancel my 1Password subscription. The fewer subscriptions I have to deal with, the better.

**UPDATE 2018-05-18** Seemed like a good idea at the time. Now that 1Password X supports Firefox on Linux I'm much happier with that setup. Pass is fine and free but 1Password is really very good and sooo much easier.
