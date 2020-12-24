+++
author = "Jack"
categories = ["Journal"]
date = "2004-12-15T16:45:43+00:00"
title = "WordPress"
url = "/2004/wordpress/"

+++

Oh goody, another post by some goofball blogger about how he's switched tools again. I only mention it in case you noticed that the RSS feed has been wonky for a few days. Of course Textpattern used a different URL for its feed so everything broke with the WordPress switch. The older URL was /?rss=1 and the new one is /feed/rss2/. A little mod_rewrite magic and things seem to be back in order&#8230;

    RewriteCond %{QUERY_STRING} <sup>rss
    RewriteRule </sup>.<strong>  feed/rss2/

I </strong>really* like knowing how to do stuff like that.