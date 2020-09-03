---
title: Fixing Babel in Org mode
author: Jack
date: 2018-02-05T20:32:00+00:00
url: /2018/fixing-babel-in-org-mode/
mf2_mp-syndicate-to:
  - 'a:1:{i:0;s:4:"none";}'
categories:
  - Tech
tags:
  - org-mode

---
Once in a while Emacs and/or Org mode throws me a curveball. Today&#8217;s example is that suddenly I couldn&#8217;t run anything using Org-babel. Trying to do so would result in something like…

> evaluation of this R code block is disabled

I noticed the following error during startup…

> Invalid function: org-babel-header-args-safe-fn

Based on a recommendation in [this Github issue][1] I ran `spacemacs/recompile-elpa`, relaunched Emacs, and all is well.

 [1]: https://github.com/syl20bnr/spacemacs/issues/7641