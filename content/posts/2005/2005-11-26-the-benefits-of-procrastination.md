---
author: Jack
categories:
- Journal
date: 2005-11-26T20:59:26+00:00
title: The benefits of procrastination
url: /2005/the-benefits-of-procrastination/
---

One of my more famous sayings has always been some form of "If you wait long enough, someone will do it for you."

Case in point. Validation in Ruby on Rails is awesome. Just add :validates\_presence\_of "title" in your model and you get a nice error message "Title is required" without doing any real work. Sometimes, however, it's desirable to override that message with something a little nicer, say "Please enter a title for your new article." Simple? It should be. There's an attribute to all of the validation messages, :message. Great, so the following should work nicely&#8230;

    validates_presence_of :title,
    :message => "Please enter a title for your new article."

Easy, but it doesn't work. Instead, you get back "Title Please enter a title for your new article." Rails _always_ prepends the column name to the message. Not great. I had planned to try writing a simple plugin yesterday to fix this but stopped because (a) I wanted to write other stuff and (b) I'm lazy and was still pissed that it didn't already work as expected.

Sure enough, Hammed Malik posts the following to the Rails mailing list&#8230;

> 
> 
> "Validation messages prefixed with the field name have always bothered
  
> 
  
> me and it seems like I'm not alone. This seemed like a fairly easy fix
  
> 
  
> to attempt for my first plugin so here it is:"
> 
> 

Now I can type "./script/plugin install http://estound.com/svn/rails/plugins/custom_validation_messages/" and move on to greater things.

See, just hang out and whistle &#8211; someone will do it for you. Thanks Hammond! Anyone wanna write me a decent CMS? I'll be waiting.

