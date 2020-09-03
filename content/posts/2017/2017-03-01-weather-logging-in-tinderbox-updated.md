---
title: "Weather Logging In Tinderbox Updated"
slug: "weather-logging-in-tinderbox-updated"
date: "2016-12-28T19:53:06-05:00"
tags: ["Tinderbox"]
---

For the past couple of years, I’ve used a “Stamp” in
[Tinderbox](http://www.eastgate.com/Tinderbox/) to append weather
conditions to the current note’s text.

See [Recording The Weather In Tinderbox](https://baty.net/2015/recording-the-weather-in-tinderbox-using-wu/)
for background.

While preparing my Daybook for 2017 I decided I wanted to include just
the current condition and temperature rather than the entire weather
summary. The following script grabs the weather (using wu) and returns
either just the current conditions and temperature or, if a date is
passed, it returns summary information for that date.

``` {.example}
#!/bin/sh
# Jack Baty, 2016 (https://baty.net)
# Grab and parse weather info using 'wu' by Stephen Ramsay
# https://github.com/sramsay/wu
#
# Pass the date as YYYYMMDD to get summary info for that date
# If no date is passed, just get current conditions

# Assumes $GOPATH is set
GOPATH=/Users/jbaty/go

if [ $# -ge 1 ]
then
 DATE="$1"
 WEATHER=`$GOPATH/bin/wu --history=$DATE`
 HITEMP=`echo "$WEATHER" | awk '/Max Temperature/' | cut -d':' -f2-`
 LOWTEMP=`echo "$WEATHER" | awk '/Min Temperature/' | cut -d':' -f2-`
 PRECIP=`echo "$WEATHER" | awk '/Precipitation/' | cut -d':' -f2-`
 COND=`echo "$WEATHER" | awk '/Weather summary/' | cut -d':' -f2-`
 if [ "$COND" != " " ]
 then
 echo "High:$HITEMP, Low:$LOWTEMP, Conditions:$COND$PRECIP"
 else
 echo "High:$HITEMP, Low:$LOWTEMP"
 fi
else
 DATE=`date +%Y%m%d`
 WEATHER=`$GOPATH/bin/wu --conditions`
 TEMP=`echo "$WEATHER" | awk '/Temperature/' | cut -d':' -f2-`
 COND=`echo "$WEATHER" | awk '/Conditions/' | cut -d':' -f2-`
 echo "$COND$TEMP"
fi
```

My Stamp calls this new script, adds the results to a custom attribute
named “Weather” and then adds Weather as a KeyAttribute to the current
note. This way the weather is only displayed on notes for which I
explicitly asked for it. The new Stamp looks like this:


![](/img/2016/Document_Inspector__Daybook-1.jpg)


Now, if I want to include the weather conditions with a note, I apply
the “Get Weather on \$StartDate” Stamp and it looks like this…


![](/img/2016/Daybook_tbx-1.jpg)

Note that this gets the weather on the date set in the \$StartDate
attribute for a note. It could easily use the \$Created attribute
instead but I always set \$StartDate explicitly so that’s what I use.

If I only want the current conditions, I use the “Get Weather
Conditions” Stamp instead. It’s basically the same thing, but without
including a date parameter. The results look like this…


![](/img/2016/Daybook_tbx.jpg)

