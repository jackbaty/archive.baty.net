+++
date = "2018-07-06T11:32:46-04:00"
description = "I'm now displaying webmentions on baty.net"
tags = ["indieweb", "blogging"]
title = "Showing Webmentions here on baty.net"

+++

This blog is statically-rendered using [Hugo](https://gohugo.io/), which means
there's no easy set of plugins (that I know of) for adding Webmentions. There's
nothing like the [IndieWeb plugins](https://indieweb.org/WordPress/Plugins) for
WordPress. I've been collecting webmentions for a while via
[webmention.io](https://webmention.io) but needed a way to render them here. 
I decided to go ahead and roll my own.

Well, to be honest, I just stood over [Karl's](https://twitter.com/kswedberg/) shoulder while he wrote the JavaScript for me. He's so good at this it's ridiculous. It would have taken me days to cobble something together. Karl did it in less than an hour. I tweaked it just a little, added some CSS, and boom! Webmentions.

Here's the [initial bit of JavaScript](https://github.com/jackbaty/baty.net-hugo/blob/master/static/js/custom.js).

I'm sure I'll want to dial things in, but this is a fine start. Thanks Karl!

