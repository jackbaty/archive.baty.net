---
title: "Logging Food With Org-mode"
date: 2018-05-13T16:10:52-04:00 
lastmod: 2018-05-13T16:11:07-04:00 
description: "Because I can"
tags: ["org-mode"]
---

For some reason I enjoy recording what and where I eat. Usually I do this in a
paper notebook, but I decided try it using Org-mode files instead.

To make entry as easy as possible, I created a new [capture template](https://orgmode.org/manual/Capture-templates.html).

```
...
("F" "Food Log" entry
        (file+datetree+prompt "~/org/food.org")
                "* %?\n%t\n%^{Meal}p%^{Type}p")
...
```

Now, I can type `C-c c F` to bring up the capture template and quickly fill in
details about a meal. This is then saved automatically in my `~/org/food.org`
file and put in the proper location, organized by date. It looks like this so
far...

<img src="/img/2018/2018-05-13_food-log.png" alt="Food log" />


The `%^{Meal}p` and `%^{Type}p` parts of the capture template are for setting
"[Properties](https://orgmode.org/manual/Properties-and-columns.html)". In this
case I am asked to enter the Meal and Type properties. Properties allow Org-mode
to act like a rudimentary database. Switching to Column view shows a table of
the values for each property, like this:

<img src="/img/2018/2018-05-13_food-table.png" alt="Column view" />

I'm including an active timestamp with each entry (using `%t` in the template)
so that they will be included in Org's Agenda for that day.

There's no real _need_ to log my meals, but Org-mode makes it quick and painless
so why not?

