+++
date = "2018-05-24T13:06:00-04:00"
draft = false
slug = "hugo-bundles"
tags = ["hugo", "org-mode", "blogging"]
title = "Hugo Page Bundles"

+++

{{< figure src="/2018/hugo-page-bundles/hugo-logo.png" >}}

I haven't paid much attention to Hugo's [Page Bundles](http://gohugo.io/content-management/page-bundles/) since they were introduced,
but I should have. Page Bundles let me put a blog post's images and other
assets in the same folder as the original Markdown file. This means the images
for a post ride along right next to the post rather than _way over there_ in the
/static/img/2018 folder. Over the long term that should be handy.

{{< figure src="/2018/hugo-page-bundles/page-bundle.png" >}}

Also, thanks to Kaushal Modi for pointing out that his [ox-hugo package](https://github.com/kaushalmodi/ox-hugo/) already supports
Page Bundles.

```org
:EXPORT_FILE_NAME: index
:EXPORT_HUGO_SLUG: hugo-bundles
:EXPORT_HUGO_BUNDLE: 2018/2018-05-24_hugo-bundles
```

Nice.
