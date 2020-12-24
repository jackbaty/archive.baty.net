+++
author = "Jack"
categories = ["Journal"]
date = "2003-10-05T19:10:20+00:00"
title = "Better image buttons"
url = "/2003/better-image-buttons/"

+++

I've always hated having to use images for HTML submit buttons. The default buttons are without question more usable: they're typically platform-specific, they depress when clicked, and they're immediately familiar to users. But most of this doesn't matter. Why, well it's because they're ugly. Never mind that if the label needs to change, rather than simply editing some HTML we need to call in a team of designers and builders, all scrambling to find the original Photoshop files and what font was that again?

I went looking for a solution and it turns out that even buttons can be styled using CSS and background images. An example (ripped unapologetically from Netflix) is here&#8230;

There. Changing the label is easy, it acts like a button, and it looks good (enough). First person that complains that it's not rendered in the approved corporate font gets his ears boxed.

Note, IE and Firebird work lovely. How's it look in Safari?

Here's the CSS&#8230;

.form-button {
  

  
font: 11px arial,helvetica, sans-serif;
  

  
font-weight: bold;
  

  
letter-spacing: 1;
  

  
color: #333333;
  

  
cursor: pointer;
  

  
cursor: hand;
  

  
background-image : url(../images/form\_btn\_tile.gif);
  

  
background-color : White;
  

  
}