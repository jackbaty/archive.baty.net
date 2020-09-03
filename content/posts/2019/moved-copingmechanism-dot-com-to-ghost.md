+++
title = "Moved copingmechanism.com to Ghost"
date = 2019-11-17T10:40:00-05:00
tags = ["blogging", "WordPress", "Ghost"]
draft = false
+++

So, [Ghost](https://ghost.org/)? Sure, why not.

The short version is that I simply wanted to try Ghost. The longer version is the usual combination of boredom, curiosity, and frustration with WordPress.

I've also never really come to love WordPress' Gutenberg editor. It's powerful, but feels so janky in use that it ruins the experience of writing.

My [Coping Mechanism blog](https://copingmechanism.com/) was always going to be image-heavy, so I'd hoped that having so much layout flexibility with Gutenberg would be useful. As it turns out, I don't usually do much beyond adding an image or small gallery and a lot of text. The slow/janky/weird behavior of Gutenberg was slowing me down. And, as importantly, it was _wearing_ me down.

While upgrading WordPress recently, I thought I'd try the new TwentyTwenty theme because I wasn't happy with whatever theme I was already running. I didn't like it. There are something like four million themes available for WordPress, and yet I can never find one I like.

Let's see what Ghost has to offer, then.

I spun up a [pre-configured Droplet](https://marketplace.digitalocean.com/apps/ghost) at [Digital Ocean](https://www.digitalocean.com/), which was easy as pie. I shelled into the new droplet and followed the prompts and a few minutes later I was up and running.

My initial impression of Ghost was so positive that I decided to migrate copingmechanism.com.

I exported my WordPress posts using the Ghost exporter plugin. When trying to import that export file, I got an error that the file was too big. This was an nginx issue, so I edited the nginx config and bumped `client_max_body_size` to 100M and the import went fine after that.

Ghost's default theme, Casper, is quite nice and there are only a few things I want to "fix" right off the bat. This almost never happens with WordPress themes.

Ghost feels fast.

{{< figure src="/img/2019-11-17-2019-11-17_cm-page-speed.png" >}}

Using the control panel is pleasant and simple. The editor is quick and not at all janky and, after adding and editing a half-dozen posts, seems to do everything I need.

Are there downsides?

Sure, I miss built-in analytics (via Jetpack). I added my usual [Plausible](https://plausible.io/) snippet so I have basic, lightweight, privacy-centric analytics.

There are no built-in comments. I don't get many comments, but I do want to make them available, so I added [Commento comments](https://commento.io/). This did involve editing a theme template, but that's not hard.

It's likely I'll have to learn some Handlebars templating, but that doesn't look too bad.

One concern is that they've been focusing on providing features for capital-P Publishers and I'm not one of those. For example, the tentpole features of version 3.0 were based around Members & Subscriptions. I'm guessing that now every 3rd blogger using Ghost will be adding and charging for "Premium" content. Just because it's easy, doesn't mean...etc. etc.

I hope they don't forget about us regular bloggers.

Playing with new blogging platforms is fun. For Coping Mechanism, I wanted something more WYSIWYG and with better image handling than, say, [Hugo](https://gohugo.io). Ghost seems like a good fit, and a good compromise between a simple static blog and the big, complex, monster that is WordPress.

<https://copingmechanism.com>
