---
author: Jack
categories:
- Software
date: "2016-04-09T13:28:27+00:00"
tags:
- blog
- hosting
title: ServerPilot and DigitalOcean
url: /2016/serverpilot-and-digitalocean/
---

I recently provisioned and configured a new Linode VPS for hosting my sites. This replaced an aging VPS that was running Ubuntu 8.xx and I didn't feel like upgrading the kernel so I built a new one and moved everything over. I am capable of configuring a new LAMP or LEMP stack and installing what I need on Linux, but I'm not _good_ at it. I also don't have the patience for constantly keeping up with security/system updates. My sysadmin skills have atrophied, so I spun up a new [DigitalOcean][1] droplet and let [ServerPilot][2] handle everything.

ServerPilot is a service that offers a simple control panel for remotely managing a newly-provisioned VPS from DigitalOcean (it does work with other services). Your VPS is automatically configured with Apache, nginx, MySQL, PHP, firewall, etc and is updated automatically when system patches are available. The control panel is very lightweight and simple. It might be too simple for some, but for me it strikes a good balance. I just want to toss a new app on it and have it running quickly. If I never have to type`chmod -R whatever` again I'll be happy.

So far the experience has been simple and pleasant. I'm running the free tier of ServerPilot on a 1GB droplet. We'll see how that runs. I may upgrade to the paid tier to get stats, multiple users, SSL, etc. but for now this is working very well.

 [1]: https://www.digitalocean.com
 [2]: https://serverpilot.io