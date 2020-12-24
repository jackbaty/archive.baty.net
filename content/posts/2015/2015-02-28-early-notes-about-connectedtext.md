+++
author = "Jack"
categories = ["Journal"]
date = "2015-02-28T16:00:20+00:00"
tags = ["connectedtext", "note-taking", "software"]
title = "Early notes about ConnectedText"
url = "/2015/early-notes-about-connectedtext/"

+++

As a Mac user I've never seriously considered [ConnectedText][1] despite so many smart people<sup id="fnref-4352-users"><a href="#fn-4352-users" rel="footnote">1</a></sup> who rave about it.

I recently installed Parallels and Windows 8.1 for a work project, so I thought it a good opportunity to give ConnectedText a go. Here are a few things I like about it so far.

**It's a wiki**. Someone once told me that the word "wiki" is Hawaiian for "can't find shit". When it comes to large, shared wikis I might agree. However, for personal use, there's nothing like a wiki for creating a nice, hyperlinked collection of notes. I just surround a word or phrase with double brackets ([[like this]]) as I'm typing and it becomes a link to a new or existing topic. If the topic doesn't already exist I can click the link and fill out the details later.

**Date Topics**. This might be my favorite feature. Every day I create a new topic with the day's date (e.g. 20150228). This topic is then automatically considered a "date topic". Date topics render a calendar on the topic, making it easy to bounce around based on dates. They also automatically include a list of "Events" which are links to any other topics on that day starting with the date. So if I have a meeting, I create a topic titled "20150228 Meeting with So and So". This topic will be automatically included in the Events list of the 20150228 topic. Date topics can also include the time ("20150228 1030 My scheduled event") which is then included in the event listing.

<div style="width: 610px" class="wp-caption alignnone">
  <img title="ct-events.png" src="/img/2015/02/ct-events.png" alt="Ct events" width="600" height="371" border="0" />
  
  <p class="wp-caption-text">
    A date topic in ConnectedText
  </p>
</div>

&nbsp;

**Cross-project linking**. ConnectedText uses the concept of "Projects" which are basically independent wikis. The cool thing is that it's easy to link between projects. For example, I have a "People" project. If I'm in my Personal project and want to link to my "Mom" entry in People, I just do [[people:Mom]] and clicking that link opens my People project and takes me to the Mom topic. With most apps I tend to use a single monolithic file/database but since ConnectedText makes it easy to cross-link I may reconsider this.

**Categories**. Entering the following in a Topic puts the Topic in a category: [[$CATEGORY:Software]]. All categories automatically have the own Topics which list all other Topics in that category. This is a quick way of adding some basic structure.

<div style="width: 610px" class="wp-caption alignnone">
  <img title="ct-category-index.png" src="/img/2015/02/ct-category-index.png" alt="Ct category index" width="600" height="371" border="0" />
  
  <p class="wp-caption-text">
    Category list in ConnectedText
  </p>
</div>

&nbsp;

After less than a month with ConnectedText, I've grown very fond of it. If it were a native Mac application the switch to ConnectedText would be a no-brainer. However, having to run it via Parallels adds a bit of friction. Before committing to it I have to determine if it causes _too much_ friction, so I've been looking for ways to smooth out the experience a bit.

Here are some tools I'm trying (thanks to [Dr. Kuehn][2] for the recommendations)&#8230;

  * [Breevy][3]. Breevy is basically TextExpander for Windows. What makes it perfect for me is that it syncs snippets (both ways!) with TextExpander. That's huge, since I use TextExpander in nearly every paragraph I type.
  * [SyncBackSE][4]. I'm using SyncBackSE to sync the project folders on the Windows VM with a mounted Dropbox folder so things can be synced between Macs. This feels awkward so I'm looking for alternative ways of syncing.

I'm going to continue my trial of ConnectedText with the assumption that I'll work out the kinks. So far so good!

<li id="fn-4352-users">
  See esp. <a href="http://takingnotenow.blogspot.com">Prof. Manfred Kuehn</a> and <a href="https://drandus.wordpress.com">Dr. Andus</a> <a href="#fnref-4352-users" rev="footnote">↩</a></fn></footnotes>

 [1]: http://connectedtext.com/
 [2]: http://takingnotenow.blogspot.com
 [3]: http://www.16software.com/breevy/
 [4]: http://www.2brightsparks.com/syncback/sbse.html