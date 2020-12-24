+++
author = "Jack"
categories = ["Tech"]
date = "2017-12-17T16:45:46+00:00"
tags = ["orgmode"]
title = "Tracking my weight using Org-mode and R"
url = "/2017/tracking-my-weight-using-org-mode-and-r/"

+++
<img title="weight.png" src="/img/2017/12/weight.png" alt="Weight" width="480" height="480" border="0" />

I record my weight nearly every day. My bathroom scale uploads the data to a couple of tracking sites, but I also record it in a CSV file, like this…

<pre>Date,Weight
2017-12-15,193.9
2017-12-14,193.3
2017-12-13,194.4
2017-12-12,195.8
2017-12-11,198.7
2017-12-08,196.7
2017-12-07,196.5
2017-12-06,197.6
2017-12-05,198.7
2017-12-04,201.4
2017-12-01,199.1
2017-11-30,199.2</pre>

I’ve always wanted to learn more about [R][1], even though I generally have no need for it. And while it’s certainly overkill, I decided to graph my weight using R and Org-mode’s Babel mode.

First, I installed R via Homebrew

<pre>brew install R</pre>

Then I installed the ggplot2 and ggthemes packages in R

<pre>&gt; install.packages(“ggplot2”)<br /><br />&gt; install.packages(“ggthemes”)</pre>

In my org file I have the following:

<pre>#+BEGIN_SRC R :results output graphics :exports both :file ~/Dropbox/org/img/weight.png
library(ggplot2)
library(ggthemes)
data&lt;-read.csv("~/Dropbox/org/weight.csv")
data$Date &lt;- as.Date(data$Date)
data = subset(data,data$Date&gt;"2017-01-01")
p &lt;- ggplot() + theme_economist() + geom_line(aes(x=Date,y=Weight), data=data, size=1.5) + ylim(150,205)
p
#+END_SRC</pre>

I put the cursor on the first line and hit Ctrl-c Ctrl-c and out pops an image with a nice graph of my weight over the past year (above).

I have no idea what I’m doing but it’s nerdy and fun so I don’t mind the hours I’ve wasted in order to do a simple thing the hard way.

 [1]: https://www.r-project.org