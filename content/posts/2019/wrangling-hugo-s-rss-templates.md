+++
date = "2019-07-06T09:21:00-04:00"
draft = false
tags = ["hugo"]
title = "Wrangling Hugo's RSS templates"

+++

I just lost an hour "fixing" [Hugo's](https://gohugo.io/) handling of RSS feeds.

Hugo's default rss template only includes each post's `.Summary`, but I want to include the full `.Content`. There is no configuration setting for this, so in order to include full post content I have to override the entire template. This seems nuts to me, but whatever. I had already done this a while ago and it's worked fine...until I updated Hugo to v0.55.0.

Hugo's 0.55.0 release introduced (what I consider) a breaking change which caused the RSS feed to include _all_ posts. The `rssLimit` configuration setting was replaced by a `[services.rss]` which relies on `Config.Services.RSS.Limit`. I wish someone would've told me. To be fair, there is something about this in the release notes but it's not obvious and doesn't call anything out as a breaking change, so I missed it.

I dutifully changed my settings to match, but it didn't fix the problem. Of course it didn't, because I'd overridden the default template and my version had no idea about `Config.Services.RSS.Limit`. The default RSS template is internal to Hugo but is [shown in the documentation](https://gohugo.io/templates/rss/). I copied it over my own template, re-did my change to `.Summary` but still no luck. My RSS feed was still showing _all_ posts. Turns out the version in the docs was wrong. Instead, I poked around the code and found the [actual source for the default RSS template](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/%5Fdefault/rss.xml) and copied _that_ to ./layouts/index.rss.xml. Finally, I was again seeing full content and only the first 20 posts in the feed.

The problem then was that the feed contained entries for other non-post files that I'd edited. I only want posts in the feed, so I had to make an additional change to the template. The default is...

```text
{{- $pages := Data.Pages -}}
```

I changed mine to...

```text
{- $pages := (where .Data.Pages "Type" "post") -}}
```

Here's my final version of the template.

```go
{{- $pages := (where .Data.Pages "Type" "post") -}}
{{- $limit := .Site.Config.Services.RSS.Limit -}}
{{- if ge $limit 1 -}}
{{- $pages = $pages | first $limit -}}
{{- end -}}
{{ printf "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\" ?>" | safeHTML }}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ if eq  .Title  .Site.Title }}{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}} on {{ end }}{{ .Site.Title }}{{ end }}</title>
    <link>{{ .Permalink }}</link>
    <description>Recent content {{ if ne  .Title  .Site.Title }}{{ with .Title }}in {{.}} {{ end }}{{ end }}on {{ .Site.Title }}</description>
    <generator>Hugo -- gohugo.io</generator>{{ with .Site.LanguageCode }}
    <language>{{.}}</language>{{end}}{{ with .Site.Author.email }}
    <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>{{end}}{{ with .Site.Author.email }}
    <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>{{end}}{{ with .Site.Copyright }}
    <copyright>{{.}}</copyright>{{end}}{{ if not .Date.IsZero }}
    <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>{{ end }}
    {{ with .OutputFormats.Get "RSS" }}
	{{ printf "<atom:link href=%q rel=\"self\" type=%q />" .Permalink .MediaType | safeHTML }}
	{{ end }}
    {{- range $pages -}}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
      <description>{{ .Content | html }}</description>
    </item>
    {{ end }}
  </channel>
</rss>
```

And in config.toml I've replaced `rssLimit` with this...

```toml
[services.rss]
  limit = 20
```

If there's an easier way to do all this I'd love to hear about it. Maybe the addition of the new `[services.rss]` section suggests other pending improvements. Ideally, I wouldn't need to override the entire RSS template in order to make these changes. And I'll be sure to read the release notes more thoroughly next time.
