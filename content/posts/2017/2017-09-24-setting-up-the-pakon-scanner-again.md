+++
author = "Jack"
categories = ["Photography"]
date = "2017-09-24T21:52:05+00:00"
featured_image = "/img/2017/09/IMG_0017.jpg"
mf2_syndicate-to = ["a:1:{i:0;s:4:\"none\";}"]
tags = ["hardware", "photography"]
title = "Setting up the Pakon scanner again"
url = "/2017/setting-up-the-pakon-scanner-again/"

+++
Every once in a while I get the urge to shoot color 35mm film and scanning that film is no fun at all. The only thing I&#8217;ve ever found that made it painless is the Pakon F-135 Plus.

I recently paved and rebuilt my iMac, meaning I had to recreate my carefully-constructed Parallels/WinXP/Pakon configuration. This turned out to be no small effort. So that I don&#8217;t forget, I&#8217;ve captured a few random notes here. The short version is that once you have this all running, don&#8217;t lose it.

First, I needed a Virtual Machine that would run Windows XP. I decided to try [VirtualBox][1], since it&#8217;s free and I wouldn&#8217;t need to deal with upgrading Parallels (and the associated cost).

I downloaded the Pakon software and updates from the [Pakon Facebook Group][2]. Join the group and check out the Files section. Lots of great information there.

I could not get the Pakon software to see the scanner after about four hours of throwing everything I knew at it. There&#8217;s even a pre-built VM available with everything already configured. I just could not get it to recognize the scanner. I must have done something in the wrong order when first connecting the scanner. Eventually I gave up and installed [Parallels][3]. That worked on the first try.

After installing Parallels and downloading/unpacking the PakonUpdate.zip from the Facebook Group, I did the following<sup id="footnote_plugin_tooltip_1" class="footnote_plugin_tooltip_text" onclick="footnote_moveToAnchor('footnote_plugin_reference_1');">1)</sup><span class="footnote_tooltip" id="footnote_plugin_tooltip_text_1">See also, http://filmwasters.com/forum/index.php?topic=6842.0</span>:

  * Run Setup from the fx35install folder inside the Pakon Update folder
  * Run Setup from inside the Pakon Update folder
  * Reboot the VM
  * Plug the Pakon in (USB) and turn it on
  * Wait until Parallels asks if I want to use the new device on Mac or Windows (select Windows)
  * When the New Hardware wizard starts, don&#8217;t let it use Windows Update<sup id="footnote_plugin_tooltip_2" class="footnote_plugin_tooltip_text" onclick="footnote_moveToAnchor('footnote_plugin_reference_2');">2)</sup><span class="footnote_tooltip" id="footnote_plugin_tooltip_text_2">There&#8217;s no way I&#8217;m letting XP touch the internet</span>, but do let it find the drivers itself. This worked for me anyway, and I think is where I may have gone wrong earlier.
  * Reboot again (just in case).
  * Wait about 30 seconds, then launch the PMI app in Windows
  * Say No to the request to upgrade Firmware
  * Click the icon at the top left to get to the &#8220;advanced&#8221; screen. (I&#8217;m not sure what it&#8217;s called).
  * Leave the password blank when prompted and click OK

This left me ready to start my first scan. I&#8217;d almost forgotten how fast this thing is! A roll of 36 frames scanned at 3000&#215;2000 and cleaned with Digital ICE in about 5 minutes. The colors are always dead on, or at least much better than anything I&#8217;ve been able to achieve after many hours of tinkering with every known scanning package. The Pakon scans are as sharp or sharper than those from my V750.

In short, if I&#8217;m going to shoot color film, the Pakon is the way to go, whatever it takes.

<div class="footnote_container_prepare">
  <p>
    <span onclick="footnote_expand_reference_container();">References</span><span style="display: none;">&nbsp;&nbsp;&nbsp;[ <a id="footnote_reference_container_collapse_button" style="cursor:pointer;" onclick="footnote_expand_collapse_reference_container();">+</a> ]</span>
  </p>
</div>

<div id="footnote_references_container" style="">
  <table class="footnote-reference-container">
    <tr>
      <td class="footnote_plugin_index">
        <span id="footnote_plugin_reference_1">1.</span>
      </td>
      
      <td class="footnote_plugin_link">
        <span onclick="footnote_moveToAnchor('footnote_plugin_tooltip_1');">&#8593;</span>
      </td>
      
      <td class="footnote_plugin_text">
        See also, http://filmwasters.com/forum/index.php?topic=6842.0
      </td>
    </tr>
    
    <tr>
      <td class="footnote_plugin_index">
        <span id="footnote_plugin_reference_2">2.</span>
      </td>
      
      <td class="footnote_plugin_link">
        <span onclick="footnote_moveToAnchor('footnote_plugin_tooltip_2');">&#8593;</span>
      </td>
      
      <td class="footnote_plugin_text">
        There&#8217;s no way I&#8217;m letting XP touch the internet
      </td>
    </tr>
  </table>
</div>

 [1]: https://www.virtualbox.org
 [2]: https://www.facebook.com/groups/PakonF135/
 [3]: http://www.parallels.com