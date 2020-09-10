---
title: "Keeping Org-roam daily notes in a separate folder"
date:  2020-05-29
tags: ["Org-roam","Org mode"]
categories: ["Software"]
slug: "keeping-org-roam-daily-notes-in-a-separate-folder"
---

[Org-roam](https://github.com/org-roam/org-roam) continues to impress.

I use org-roam’s “Daily Notes” feature every day as a frictionless place to put notes that may or may not need to be moved or otherwise dealt with later. It’s the Org-roam version of a similar feature in [Roam](https://roamresearch.com/).

One thing about it I didn’t care for was that the Daily Notes .org files were starting to pile up in the root of my ~/org directory.

Most of the time, file names and locations do not matter in org-roam. Everything is easy to find/browse right in Emacs. There are times, however, when I’m poking around in my org files using Dropbox or the Finder. All those daily files started getting in the way, so I decided to try moving them into their own `~/org/dailies/`folder.

Trouble was, the way I get to or create daily files is by using `org-roam-dailies-today` and that function creates the file in the root `org-roam-directory` folder. I asked about the possibility of a new setting for where to store dailies, but it turns out that the capability is already in org-roam with `org-roam-dailies-capture-templates`. This is an org-roam specific version of the [`org-capture-templates`](https://orgmode.org/manual/Capture-templates.html)feature. [Jethro](https://github.com/jethrokuan) helpfully sent me the following snippet for my config:
    
```emacs-lisp
(setq org-roam-dailies-capture-templates '(("d" "daily" plain (function org-roam-capture--get-point) ""
    :immediate-finish t 
    :file-name "dailies/%<%Y-%m-%d>" 
    :head "#+TITLE: %<%Y-%m-%d>")))
```

And poof! new daily notes files are created in `~/org/dailies`.

But what to do about the 3-months worth of existing files? They are full of links to other org files and those are all relative to the root ~/org directory. Moving them would break all those links. I had seen some comments about proper link handling when files are moved using `dired`, so I tried that. I fired up `dired`, marked all the daily notes files using `%m2020-`, and moved them to `~/org/dailies`. I then deleted the org-roam.db database and ran `org-roam-db-build-cache` and guess what, all of the links and backlinks were updated and everything worked.

Now, all my “dailies” files are nicely tucked away in their own folder.

So cool.
