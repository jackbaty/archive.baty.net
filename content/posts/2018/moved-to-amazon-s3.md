---
title: "Moving to Amazon S3"
date: 2018-03-18T13:43:11-04:00 
lastmod: 2018-03-18T13:43:11-04:00 
draft: false
description: "baty.net is now hosted via an Amazon S3 bucket and Cloudfront"
tags: ["aws"]
toc: false
---

<img src="/img/2018/aws_logo_smile.png" alt="AWS Logo" />

[Amazon Web Services](https://aws.amazon.com/) (AWS) have always baffled me, but I have been determined to untagle them. To this end, I've been migrating my static sites into S3 and using Cloudfront distributions as CDN. This gave me some real problems to solve, which makes learning more fun.

The final candidate for migration was this here blog (baty.net) and if you're reading this, it worked.

Here's a rough sketch of the steps I took...

### Created S3 buckets
I created an S3 bucket for www.baty.net and configured it to host a static website. I also wanted to redirect requests for the apex domain (baty.net) to www.baty.net, so I had to create a second bucket named baty.net. The baty.net bucket is configured as a redirect-only website with all requests redirected to www.baty.net. Creating a separate bucket for each host name is a little cumbersome, but not difficult.

### Provisioned SSL certificate
There's no way (that I know of) to add an SSL certificate to an S3-hosted site, so for that I had to request a certificate using [Certificate Manager](https://aws.amazon.com/certificate-manager/) and attach it to a Cloudfront Distribution. I used the wildcard *.baty.net so I could reuse the cert for other subdomains.

### Created Cloudfront distributions
I created a [Cloudfront](https://aws.amazon.com/cloudfront/) distribution using the www.baty.net S3 bucket as its origin[^origin] and configured it to use the new SSL certificate. Now, Amazon is managing updates for the cert at no extra cost and, as a bonus, I get a nice CDN for content. 

I needed to create a second distribution using the the same SSL certificate and the baty.net bucket's website endpoint so that I could redirect both http and https requests for baty.net to https://www.baty.net. This wasn't necessary but I'm sure there are old links to pages in https://baty.net and I wanted to make sure those were properly handled.

### Moved DNS into Route 53
Another change I made was to move DNS for the baty.net zone into [Route 53](https://aws.amazon.com/route53/). I've used [DNS Made Easy](https://dnsmadeeasy.com/) for years and have never had any trouble, but I wanted to go through the process with Route 53 just to see how well it worked. For $0.50/month per zone, Route 53 sure makes working with DNS and other AWS tools easy.

### Updated my deployment script to use s3deploy
I use a Makefile to run my site deployment. The deploy recipe used rsync and synced files to a directory on my DigitalOcean instance. The move to S3 required that I change it so that the site's files are synced to the S3 bucket instead. I'm using [s3deploy](https://github.com/bep/s3deploy) for this. To deploy the site I just type `make deploy` and Make builds the site, commits and pushes to my github repo, then uploads changes to S3 using the following command:

`s3deploy -bucket=www.baty.net -region=us-east-1 -source=public/`

My AWS credentials are kept in environment variables[^env] so I don't need to keep them in the Makefile.
s3deploy is smart enough to sync based on etag hashes rather than file modification time so only files that have actually changed get uploaded[^s3deploy].

### Invalidate objects after deployment
The nice thing about a CDN is that content is efficiently cached, sometimes for a very long time. The trouble this causes is that updates to the site are not immediately visible. Cloudfront needs to be told to re-fetch changed objects from the origin. To force this, I added an `invalidate` recipe to the Makefile. I tell Cloudfront to re-fetch the pages that should be updated immediately, namely /index.html, /index.xml, and /page/*. I do this using the following command:

```bash
aws cloudfront create-invalidation --distribution-id=$(DISTRIBUTION_ID) \
                                   --paths /index.html /index.xml "/page/*"
```

I may decide to tweak the paths later. For example, I'm not invalidating `/tags/*` but probably should. I only get 1000 path invalidations per month for free so I'm being conservative.

That's it. It took me a _long_ time to figure all of this out. AWS has deep and thorough documentation but few useful resources for getting started. I'm finally starting to get my head around how AWS services[^services] work and how to use them.

I'll be watching costs closely, but best I can figure this entire setup should cost me less than $2.00/month. That includes hosting, DNS, SSL, CDN, and storage.


[^origin]: You must use the S3 website URL as the origin rather than the bucket itself otherwise it won't serve /index.html files when visiting just the directory (e.g. /about/ will not find /about/index.html)
[^env]: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`
[^s3deploy]: Amazon's aws command line tool uses timestamp and file size when determining whether to upload a file
[^services]: "services" is redundant here but it sounds better to me this way
