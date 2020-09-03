---
title: "Project templates in DEVONthink"
date: 2018-11-18
tags: ["devonthink","app","workflow"]
slug: "devonthink-project-template"
---

I keep project information in [DEVONthink](https://www.devontechnologies.com/products/devonthink/devonthink-pro-office.html), organized like so...

```
Clients
|->ClientA
|->ClientB
   |->Project One
   |->Project Two
      |->Tasks.taskpaper
      |->README.md
```

Lately I've been adding Labels to indicate status ("In Progress", "Inactive") and collecting them into one folder using DEVONthink's "Smart Groups". One problem with this is that a project folder named "Website Redesign" doesn't tell me who the client is when viewed out of context, so I started naming project folders things like "ClientB: Project Two". Also, the "Tasks.taskpaper" document, opened in [TaskPaper](https://www.taskpaper.com/), doesn't show the client name either, so I rename the file to something like "Project Two Tasks.taskpaper"

Of course all that extra typing is exhausting! :)

Long story short, I thought I'd try automating the process a bit.

DEVONthink has a pretty fancy templating system, so I modified the existing "Project" template based on [this tip](https://forum.devontechnologies.com/viewtopic.php?f=20&t=22821&p=120177&hilit=Rename+group#p120186) from Jim Neumann. The template contents look like this:

![Screenshot of template layout](/img/2018/2018-11-18_dtp-project-layout.png)

Now, when I want to create a new project, I select the client folder, choose "Data->New from template->Client Project". I'm prompted for a project name, and the project hierarchy is created for me. The project folder and Taskpaper document are automatically named the way I want them, e.g. "ClientB: Project Three"

I didn't do this just because I'm lazy (which I am), but it also helps enforce consistency, which I struggle with.





