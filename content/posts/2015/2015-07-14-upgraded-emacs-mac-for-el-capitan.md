+++
author = "Jack"
categories = ["Journal"]
date = "2015-07-14T04:00:00+00:00"
tags = ["emacs", "sysadmin"]
title = "Repairing Emacs after installing El Capitan"
url = "/2015/upgraded-emacs-mac-for-el-capitan/"

+++

Another issue after installing the El Capitan beta yesterday: Emacs became slow and had font issues. Recording my fix here for future reference.

Upgraded to Xcode 7 beta and installed the latest command line tools

The beta application is named "Xcode beta" so I deleted the original and told the system to use the new one. Updated the app using homebrew and emacs was back in action.

<pre class="example">sudo xcode-select --switch /Applications/Xcode-beta.app
brew update
brew upgrade emacs-mac
brew linkapps emacs-mac
</pre>