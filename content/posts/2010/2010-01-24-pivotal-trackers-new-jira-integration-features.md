---
author: Jack
categories:
- Journal
date: 2010-01-24T20:30:12+00:00
tags:
- geek
title: Pivotal Tracker&#039;s new JIRA integration features
url: /2010/pivotal-trackers-new-jira-integration-features/
---

Speaking of [This and That](https://jackbaty.com/2010/01/this-and-that/), I use both Atlassian's [JIRA](http://www.atlassian.com/software/jira/) and more recently [Pivotal Tracker](http://www.pivotaltracker.com/) for issue/story management. Both are great, and I don't want to give up either of them, but it's always been sort of an either/or proposition. The good news is that this weekend Tracker released some new features, one of which is integration with JIRA. Issues created in JIRA can be viewed within Tracker and optionally added to an iteration or the "icebox." You can read about it in more detail [here](http://www.pivotaltracker.com/help/integrations#external_integrations). I've been playing with it today and it looks to be a great start. They're still working on 2-way integration so that Features created in Tracker will also automatically be posted to JIRA. For now, it's just JIRA->Tracker.

We use a single JIRA project per client. Same goes for Tracker, so this works out well. It's early, but here's what I'm doing so far&#8230;

1. Create filter in JIRA for all "Open" issues on a project that have been labeled "pivotal"
  
2. Add a new JIRA "Integration" to the Tracker project, entering the ID of the newly created JIRA filter.
  
3. View the new "JIRA" column in Tracker and simply drag and drop the issues to track into the icebox column.

Any issue dragged from the JIRA column into either the icebox or iteration columns is then displayed with an "e" overlayed on its icon, indicating that it's linked to a JIRA issue. As the feature is moved through the Tracker workflow, all comments and transitions made in Tracker are instantly posted to JIRA.

At first glance, I think this will be a great way to collaborate around a collection of features using the strengths of both JIRA and Pivotal Tracker. Can't wait for them to figure out how to get 2-way integration implemented.

\_Note that this new feature is only hours old. I'm looking forward to see what we can do with it\_