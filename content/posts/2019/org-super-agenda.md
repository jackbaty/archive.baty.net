---
date: "2019-07-16T12:18:00-04:00"
draft: false
tags:
- emacs
- orgmode
title: Org Super Agenda
---

[Org-super-agenda](https://github.com/alphapapa/org-super-agenda) really helps wrangle the agenda view when there are lots of tasks.

My config is so far pretty simple...

```lisp
(use-package org-super-agenda
  :ensure t
  :config
 (setq org-super-agenda-groups '((:name "Today"
				:time-grid t
				:scheduled today)
			   (:name "Due today"
				:deadline today)
			   (:name "Important"
				:priority "A")
			   (:name "Overdue"
				:deadline past)
			   (:name "Due soon"
				:deadline future)
			   (:name "Waiting"
			       :todo "WAIT"))))
```

Here's a sample of what it looks like...

{{< figure src="/img/Posts/2019-07-16-org-super-agenda-2019-07-16.png" >}}
