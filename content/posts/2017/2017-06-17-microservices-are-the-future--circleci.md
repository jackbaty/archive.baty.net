---
title: "Micro-services are the future - CircleCI"
date: 2017-06-17T10:04:54-04:00
tags: ["Microservices"]
slug: "microservices-are-the-future--circleci"
---

[Paul Biggar](https://medium.com/circleci/its-the-future-90d0e5361b44):

> "So I just need to split my simple CRUD app into 12 microservices, each with
> their own APIs which call each others’ APIs but handle failure resiliently,
> put them into Docker containers, launch a fleet of 8 machines which are Docker
> hosts running CoreOS, ‘orchestrate’ them using a small Kubernetes cluster
> running etcd, figure out the ‘open questions’ of networking and storage, and
> then I continuously deliver multiple redundant copies of each microservice to
> my fleet. Is that it?"

I'm fascinated by the shift to micro services, but I'm wary of it turning into
something like Paul's cheeky description.
