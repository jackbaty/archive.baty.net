+++
author = "Jack"
categories = ["Tech"]
date = "2018-07-14T19:58:09+00:00"
mf2_mp-syndicate-to = ["a:1:{i:0;s:4:\"none\";}"]
tags = ["blogging"]
title = "A Remaining Problem with Title-less Posts"
url = "/2018/a-remaining-problem-with-title-less-posts/"

+++
<figure class="wp-block-image"><img src="/img/2018/07/2018-07-14-archives.png" alt="" class="wp-image-1589" srcset="/img/2018/07/2018-07-14-archives.png 400w, /img/2018/07/2018-07-14-archives-300x183.png 300w" sizes="(max-width: 400px) 100vw, 400px" /></figure> 

When showing title-less posts in the archives, I would prefer to show the first few words of the post rather than nothing. Is there an easy way to do that?

**UPDATE 2018-07-15:**﻿ I ended up making a child theme and hooking into the [simple-yearly-archive plugin][1], which I&#8217;m using for the archives page.

The only catch is that the plugin doesn&#8217;t include the post content column in the query so I had to edit the actual plugin query to include the column and also pass the entire $post object in the sya\_the\_title hook. I&#8217;ll have to watch out for updates, as they&#8217;ll overwrite this. Or I&#8217;ll just need to fork it.

<pre class="wp-block-code"><code>add_filter( 'sya_the_title', 'my_sya_filter_title', 10, 2 );

function my_sya_filter_title( $title, $post ) {
	return $title == '' ? jab_truncate(strip_tags($post->post_content)) : $title;
}



function jab_truncate($string,$length=50,$append="…") {
  $string = trim($string);

  // break at word
  if(strlen($string) > $length) {
    $string = wordwrap($string, $length);
    $string = explode("\n", $string, 2);
    $string = $string[0] . $append;
  }

  return $string;
}</code></pre>

 [1]: https://www.schloebe.de/wordpress/simple-yearly-archive-plugin/