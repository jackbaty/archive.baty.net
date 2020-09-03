---
title: "Tracking my Time with Org-mode"
date: 2018-05-18T11:46:32-04:00 
draft: false
description: "Clock in and Clock out"
tags: ["workflow","productivity","org-mode","emacs"]
---

Org-mode has time tracking built in. Of course it does. 

I have been trying to consistently track my time spent on projects. This encourages me to _decide_ what I should do next. It also makes me reconsider my priorities when I notice I'm not doing anything useful. As I tend to do, I have configured a few [Capture Templates](https://orgmode.org/manual/Capture-templates.html) to help with this.

``` lisp
'(("t" "Todo to Inbox" entry
   (file+headline "~/org/tasks.org" "Inbox")
   "* TODO %? \n %i\n")
  ("T" "Todo and Clock In" entry
   (file+headline "~/org/tasks.org" "Inbox")
   "* TODO %? \n %i\n" :clock-in t :clock-keep t)
  ("e" "Create Event" entry
   (file+datetree+prompt "~/org/events.org")
   "* %?\n%T" :empty-lines 0)
  ("E" "Create Event and Clock In" entry
   (file+datetree+prompt "~/org/events.org")
   "* %?\n%T" :clock-in t :clock-keep t)
```

I have two versions of my TODO and EVENT capture templates. Using the uppercase versions cause the clock to start as soon as I create the entry. For example, if the phone rings or someone walks into my office, I hit `C-c c E` and a new "Event" entry will be created with the clock already running.

To help easily manage jumping between clocked entries, I'm using [org-mru-clock](https://github.com/unhammer/org-mru-clock). 

When it's time to send some invoices, or just to see how long things are taking,
I can run a quick Clock Report that looks something like this:

<img src="/img/2018/2018-05-18-clocking-time.png" alt="Clock Report"/>

Nifty.

It's hard for me to remember to always start a clock, so I'm still looking for
ways to make that easier. For now though, just building the habit is a good start.
