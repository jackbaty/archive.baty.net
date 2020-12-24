+++
author = "Jack"
categories = ["Journal"]
date = "2015-03-16T22:13:17+00:00"
tags = ["Tinderbox"]
title = "Recording the weather in Tinderbox"
url = "/2015/recording-the-weather-in-tinderbox-using-wu/"

+++

Each day I create a note called "Doing" in my [Tinderbox][1] daybook. This note is a dumping ground for little things I want to record during the day. I wanted to include the day's weather, just for fun. Here's how I did it.

First I had to find a way to grab the weather via command line. Turns out that [Weather Underground][2] has a nice API and Stephen Ramsay has created a little command-line application (written in Go) called wu <https://github.com/sramsay/wu>

Once _wu_ was installed I needed a way to call it and get the results into my Tinderbox "Doing" note. I used a Stamp for this. The Stamp uses Tinderbox's "runCommand()" command to shell out to the terminal and run _wu_. It looks something like this&#8230;

<img title="Document_Inspector__Daybook.png" src="/img/2015/03/Document_Inspector__Daybook.png" alt="Document Inspector Daybook" width="300" height="455" border="0" />

The simplest Stamp would have been this&#8230;

`$Text=$Text+runCommand("/Users/jbaty/go/bin/wu")`

&#8230;but I fancied it up a little. The actual action text I ended up with was this&#8230;

    $Text=$Text+"rr---- Weather: ------------------------------------------------rr" +
    runCommand("/Users/jbaty/go/bin/wu")
    

So to get the weather, I select "Doing" and choose "Get Weather" from the Stamps menu. The weather is then magically appended to whatever text is in the selected Note. Like this&#8230;

<img title="Daybook.png" src="/img/2015/03/Daybook.png" alt="Daybook" width="591" height="571" border="0" />

That was easy.

 [1]: http://www.eastgate.com/Tinderbox/
 [2]: http://www.wunderground.com/?apiref=401ecb7a99041ee4