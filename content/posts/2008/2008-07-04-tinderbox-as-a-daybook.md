---
author: Jack
categories:
- Journal
date: 2008-07-04T18:58:00+00:00
tags:
- geek
- Tinderbox
title: Tinderbox as a Daybook
url: /2008/tinderbox-as-a-daybook/
---

Inspired by the post at [but she's a girl&#8230;][1], I thought I'd jot down a few of my own notes on how I too use [Tinderbox][2] as a Daybook.

One of the more useful things I've been doing with Tinderbox is to keep a running log of things I do each day. This "Daybook" has become a way to track billable time for clients, record technical notes, and keep a basic journal.

Here's what the overall outline looks like

[<img src="https://farm4.static.flickr.com/3065/2637105574_891998beb1.jpg" width="500" height="424" alt="Tinderbox Daybook" />][3]

Any decent outliner could do this, but Tinderbox lets me tweak things as much or as little as I want. Prototypes and Actions make all the difference. I have a few tweaks that help keep things in order for me. Most of these come in the form of the tremendously useful Tinderbox feature, Prototypes.

**Monthly Worklogs** &#8211; I create one of these manually each month with a name like "July 2008" to hold that month's entries. It has the following OnAdd action set&#8230;


`
<pre>$Name=format($Created,"y-M0-D W"); Prototype="*DaylogContainer"</pre>
<p>`
  
This causes any notes within a worklog container to have its name set as the current date. It also sets the new note's prototype to *DaylogContainer

**DaylogContainer** &#8211; This prototype has an OnAdd action to force contained notes to use the *DaylogEntry prototype&#8230;


`
<pre>Prototype="*DaylogEntry"</pre>
<p>`
  
**DaylogEntry** &#8211; This is the prototype used for each individual entry. It has a DisplayExpression set so that each entry inserts the note's date and time in the displayed name. Showing both the name and date helps when scanning the limited Tinderbox search results window. Here's the DisplayExpression&#8230;


`
<pre>format($Created,"m/d/y h:mm") + " : " + $Name + " " + $JiraKey</pre>
<p>`
  
The *DaylogEntry prototype uses custom attributes set as Key Attributes for easy entry (Duration, JiraKey, and Tags). We use [JIRA][4] as an issue tracker and if I'm working on a specific issue I record the key with each note. Displaying it as part of the name in the outline helps when recording timesheets.&nbsp; Here's what a DaylogEntry note looks like.

[<img src="https://farm4.static.flickr.com/3169/2636284017_484e4d4072_o.jpg" width="599" height="350" alt="Daylog entry" />][5]

The process of adding daylog entries starts by creating a container for that day. This is done by hitting Return twice to create the container (which is automatically named with the current date) and then Command-Option-O to open the container in its own outline. After that for each entry it's a simple matter of hitting Return to start a new entry, then closing the window. Everything ends up named nicely and sorted by time of day.

Here's a quick video demonstrating how it looks&#8230;



I've been doing this since the beginning of this year and have a total of 1235 entries so far with no apparent impact on Tinderbox's performance. My Tinderbox Daybook has become a surprisingly valuable resource. It's amazing how much information is available over time simply by recording minor events each day. I haven't started mining this information in any formal way yet. Who knows what I'll find!

**UPDATE 2008-07-17:** Fixed formatting issue with code samples. (thanks to David Phillips)

 [1]: http://www.rousette.org.uk/blog/archives/tinderbox-daybook/
 [2]: http://www.eastgate.com/Tinderbox
 [3]: http://www.flickr.com/photos/jbaty/2637105574/ "Tinderbox Daybook by JackBaty, on Flickr"
 [4]: http://www.atlassian.com/software/jira/
 [5]: http://www.flickr.com/photos/jbaty/2636284017/ "Daylog entry by JackBaty, on Flickr"