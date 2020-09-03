---
title: "Opening BBEdit's Scratchpad via Keyboard Maestro"
slug: "bbedit-scratchpad-via-keyboardmaestro"
date: "2017-10-14T07:34:36-04:00"
tags: ["bbedit","keyboard maestro","workflow"]
description: "A small Applescript for opening BBEdit's Scratchpad via Keyboard Maestro"
---

I use [BBEdit's][1] Scratchpad window all day. For some reason I've never thought about making it easier to get to the window. While perusing BBEdit's Google Group, I spotted [this message by Fletcher][2], in which he provides a simple AppleScript for doing just that.

```
tell application "BBEdit" 
        activate 
        open scratchpad document 
        set the index of the window of scratchpad document to 1 
end tell 
```

In his post, Fletcher uses an Automator Service but I prefer [Keyboard Maestro][3]. I created a simple trigger in Keyboard Maestro that looks like this:


![Keyboard Maestro trigger](/img/2017/km-trigger.png)

That's better.

[1]: http://www.barebones.com/products/bbedit/index.html
[2]: https://groups.google.com/forum/?utm_source=digest&utm_medium=email#!topic/bbedit/Q-oNhAjdX6s
[3]: http://www.keyboardmaestro.com/main/