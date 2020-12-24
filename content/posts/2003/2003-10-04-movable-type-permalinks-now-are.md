+++
author = "Jack"
categories = ["Journal"]
date = "2003-10-04T09:12:34+00:00"
title = "Movable type permalinks now are"
url = "/2003/movable-type-permalinks-now-are/"

+++

After giving [T.M.][1] a lot of grief for not having permalinks on his blog, I realized that my fairly recent move to movable type has left my permalinks open to being broken easily. I'd used the default permalink setting in MT, which uses the entry id as the archived file's name. Bad idea to use a database-dependent key in the filename, especially since I recently exported the entries out of MySQL from the site on my old server to SQLite on the new box.

So, I've finally gotten around to what I hope will fix the permalink problem, uh, permanently. I've [summarized it on the wiki][2]

 [1]: http://www.tmcamp.com/
 [2]: https://www.jackbaty.com/wiki/index.php/MovableTypePermalinks