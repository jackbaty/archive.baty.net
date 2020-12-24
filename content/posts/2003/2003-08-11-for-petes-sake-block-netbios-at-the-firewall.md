+++
author = "Jack"
categories = ["Journal"]
date = "2003-08-12T00:00:47+00:00"
title = "For pete’s sake block NetBIOS at the firewall"
url = "/2003/for-petes-sake-block-netbios-at-the-firewall/"

+++

Yet another worm attacking Microsoft boxes is on the loose (see [CERT][1]). This is the second vulnerability in the past week or so targeting the NetBIOS ports. At the very least, block TCP/UDP ports 135,139 and 445 at the firewall. I sure do. Good thing, last time I checked the logs, I was blocking from 10 to 20 requests every second or two.

 [1]: http://www.kb.cert.org/vuls/id/568148