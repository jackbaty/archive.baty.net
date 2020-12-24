+++
author = "Jack"
categories = ["Journal"]
date = "2014-04-06T00:00:00+00:00"
tags = ["Tinderbox"]
title = "Day One to Tinderbox"
url = "/2014/day-one-to-tinderbox/"

+++

<img class="postimage" src="/img/2014/dayone-to-tinderbox.png" alt="Day One to Tinderbox" />

I’ve kept a [Daybook][1] using [Tinderbox][2] for years, and wish to continue doing so. The problem is I know that [Day One][3] exists and is really good at what it does. The conflict between smooth and easy entry using Day One and the comfort and flexibility of Tinderbox keeps me up at night. Well, not really, but it does cause me to waffle between the two.

I switched to Day One again a month ago and I really do love it. Day One automatically logs my location and the current weather, is always just a click away on either the iPhone or Mac, and is pretty to look at. The trouble is that I can’t to some of the nifty analytics that I do with Tinderbox. If only there were a way to use both!

I decided today that I’d find a way, and came up with something that, while not pretty, works.

Basically, I export the Day One entries to an OPML file and then drop that file onto my Tinderbox Daybook and run a couple of quick “stamps” to clean things up. Here’s an overview of how it works.

I originally wanted to process the native Day One export but found the file needed way too much manipulation if it was going to be useful to Tinderbox. I wanted an easy way to get dates, locations, and weather into Tinderbox attributes and not just as part of each note’s text. OPML seemed an obvious choise. I found Nathan Grigg’s [dayone_export][4]. It’s a python script that parses the Day One data file and generates an export file using a simple templating system ([Jinja2][5]). Day One Export didn’t come with an OPML template but using the Markdown example it was easy enough to create one. It looks like this&#8230;



The template file is saved locally (on my Mac) as ~/.dayone_export/default.opml.

To generate the OPML I run the following&#8230;

<pre># dayone_export --output dayone-export.opml --format=opml --after 2014-04-01 ~/Path/To/Day One/Journal.dayone</pre>

Then I drop the output file (dayone-export.opml in this case) onto my open Tinderbox daybook document. Note that I included some additional attributes in the OPML template for things like Weather, etc. When importing, Tinderbox will use or create User Attributes matching each of them automatically. This gives me something easy to work with. Also note that I use the &#8211;after attribute, which will let me export regularly without dealing with duplicates.

To clean things up in Tinderbox, I apply the following “stamp” to each of the imported notes:

<pre>$Text=$Name;$Name=$Text.split(".").at(0)</pre>

This stamp&#8230;

1. Copies the note’s Name to its Text

2. Changes the Name to only contain the first sentence

Then I just drag the notes into the proper dated container in Tinderbox and I’m done. Sure, it’s a little kludgy and probably prone to errors but at least now I can keep using both tools and enjoy the benefits of each.

It works, but I hope someone smarter than me comes up with something better one day.

 [1]: http://archives.jackbaty.com/2008/07/tinderbox-as-a-daybook/
 [2]: http://www.eastgate.com/Tinderbox/
 [3]: http://dayoneapp.com/
 [4]: https://github.com/nathangrigg/dayone_export
 [5]: http://jinja.pocoo.org/