---
title: "My wiki is more Roam-like thanks to TiddlyBlink"
date:  2020-04-14
tags: ["TiddlyWiki","Roam"]
categories: ["Software"]
slug: "my-wiki-is-more-roam-like-thanks-to-tiddlyblink"
---


I’ve finally gone and added [TiddlyBlink](https://giffmex.org/gifts/tiddlyblink.html#TiddlyBlink%20home)’s modifications to my [TiddlyWiki](https://tiddlywiki.com/)-based wiki at [rudimentarylathe.org](https://rudimentarylathe.org/). This gives me a little of the automatic backlinking functionality of [Roam](https://roamresearch.com/) but in TiddlyWiki

This was inspired by [Getting started with TiddlyWiki: a beginner’s tutorial](https://nesslabs.com/tiddlywiki-beginner-tutorial). I’m not a complete beginner, but seeing TiddlyBlink’s use mentioned in the context of “getting started” made me feel a little more comfortable trying it.

One of the cool things about TiddlyWiki is that content and feature enhancements can be installed by simply dragging and dropping from another wiki, right in the browser. To install TiddlyBlink, I dragged the `tb` tag from the TiddlyBlink sample into my wiki and clicked “Import”. This brought in a couple dozen custom tiddlers and I immediately had all the features of TiddlyBlink and more.

It’s the “…and more” part that caused a bit of trouble. A few of my own customizations were overwritten, such as…

  * Default Journal tiddler titles was changed to `YYYY-0MM / 0DD / 0hh:0mm:0ss /` which is just way too long for me. I changed it back to `DDD, MMM DD, YYYY`since I only create one Journal entry per day. My default regular tiddler title is set to `<<now "YYYY.0MM.0DD">> -` which I prefer.
  * The styles were changed to an inverse of the grey vs white of my theme. Changed it back to “vanilla”
  * Default tiddlers shown in the Story River was changed to `[[TiddlyBlink home]]`. Nope, I had mine set the way I like it for a reason.
  * Lots of toolbar items were changed and had to be reverted.
  * Story View setting was changed to “zoomin”, which I don’t like. Changed it back to “classic”

For someone starting fresh, the above changes are probably beneficial. For me, they were invasive. Not a huge deal. I spent maybe 20 minutes finding and fixing them.

A few benefits that came along with TiddlyBlink were…

  * Automatic linking when typing `[[`. This is helpful, and makes linking feel more like Roam.
  * A different tiddler can be shown in the sidebar, for side-by-side comparision. Not nearly has handy or easy as the way Roam does it, but it could come in handy.
  * Handles sources when tagged properly. Have to play with this.

I’ll need to tinker with all this to see how (or if) in improves things.

