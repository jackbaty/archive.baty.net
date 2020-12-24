+++
author = "Jack"
categories = ["Journal"]
date = "2005-02-08T14:35:41+00:00"
title = "Give SOAP a REST"
url = "/2005/give-soap-a-rest/"

+++

I've had opportunity recently to help spec and design a rather complex web service API. The choices are usually SOAP, XML-RPC or REST. REST has always been my favorite. Why? It's just so damn simple to write apps against it. When I've got to create a web service client it's always disappointing to find that the only interface is SOAP. While SOAP has a few advantages, they seem academic and mostly unnecessary for my purposes, so I politely nod and keep on walkin'.

In a recent [O'Reilly interview][1], Stewart Butterfield, CEO of the all-knowing, all-powerful [Flickr][2], says this about their API&#8230;

> 
> 
> "On the strictly practical side, I think we had one person inquire about using the SOAP version of the API. I don't know if any apps were actually built. There is at least one application built on XML-RPC. But all the others&#8212;I don't even know how many there are&#8212;are built on the REST API. It's just so easy to develop that way; I think it's foolish to do anything else."
> 
> 

Seems I'm not alone.

 [1]: http://www.oreillynet.com/lpt/a/5607
 [2]: http://flickr.com