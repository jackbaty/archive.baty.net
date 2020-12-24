---
author: Jack
categories:
- Journal
date: "2004-09-07T20:06:22+00:00"
title: Flickr API
url: /2004/flickr-api/
---

[Flickr][1] is officially the coolest thing ever. I just spent a few minutes tinkering with the [API][2] and it's dead simple to deal with. The list of photos typically over on the right there is generated from a Javascript call and it works pretty well. For fun I thought I'd try generating the list myself using PHP. The result (after about 10 whole minutes, which includes finding and reading the API docs) is displayed over there also, but below the others. Those are images with the tag "jess". They're not linked or anything, but they certainly could be.

Using PHP 5's SimpleXML extension, the code looks basically like this&#8230;

    
    // Build URL for REST call first (not shown)
    $xmlstr = file_get_contents($RESTURL);
    $xml = simplexml_load_string($xmlstr);
    echo '<div style="margin:10px;">';
    foreach($xml->xpath('//photo') as $photo)
    {
    echo '<img style="margin: 2px;border: 1px solid black;"
    echo ' src="http://flickr.com/photos/' . $photo['id'];
    echo '_' . $user_id . '_s.jpg" />' . '<br />';
    }
    echo '</div>';
    
    

<ins>Update: I removed the test images, in case you're wondering.</ins>

 [1]: http://flickr.com
 [2]: http://www.flickr.com/services/api/