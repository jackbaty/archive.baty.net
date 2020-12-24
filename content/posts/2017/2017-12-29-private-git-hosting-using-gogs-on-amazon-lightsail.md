+++
author = "Jack"
categories = ["Tech"]
date = "2017-12-29T15:42:00+00:00"
mf2_mp-syndicate-to = ["a:1:{i:0;s:4:\"none\";}"]
tags = ["git aws"]
title = "Private Git hosting using Gogs on Amazon Lightsail"
url = "/2017/private-git-hosting-using-gogs-on-amazon-lightsail/"

+++
There are many options for &#8220;private&#8221; Git hosting. I put &#8220;private&#8221; in quotes because private repos on Gitlab, Github, Bitbucket, etc. are still sitting on a server to which people I don&#8217;t know have access, so I considered other options.

I&#8217;ve been watching [Gogs][1] for a while and thought it would be fun to set up a server running Gogs for my private Git repos.

Gogs is &#8220;A painless self-hosted Git service&#8221; and is basically a Github clone. It&#8217;s written in Go, which means that it&#8217;s drop-dead simple to install just about anywhere. It&#8217;s just a single binary. This is way simpler than running something like [Gitlab CE][2].

Here are my notes from setting up Gogs on Amazon Lightsail, proxied by nginx. This isn&#8217;t meant to be a tutorial or anything, it&#8217;s just a few quick notes about the process I went through to get things running.

**Amazon Lightsail**

I&#8217;m easily flumoxed by Amazon&#8217;s web services so I decided to give their [Lightsail service][3] a try. Lightsail is basically Amazon&#8217;s answer to the ease of running server instances on services like DigitalOcean. My first impressions are that it succeeds. A few clicks and I had a small Ubuntu 16.04 instance running.

**Gogs**

To install gogs I did the following from a shell in the new Lightsail instance…

Installed git.

<div class="org-src-container">
  <pre class="src src-bash">$ sudo apt-get update
$ sudo apt-get install git
</pre>
</div>

Downloaded Gogs.

To keep things simple, I installed the gogs binary from the [gogs install page][4]. I simply copied the link to the amd64 version, downloaded and extracted it.

<div class="org-src-container">
  <pre class="src src-bash">$ wget https://dl.gogs.io/0.11.34/linux_amd64.tar.gz
$ tar xvf linux_amd64
$ cd gogs
</pre>
</div>

Ran Gogs

<div class="org-src-container">
  <pre class="src src-bash">$ ./gogs web
</pre>
</div>

Then in a browser I went to <http://>[my-ip]:3000/ and couldn&#8217;t connect. I discovered that Lightsail&#8217;s default firewall only allows access on ports 80 and 443 so I added a rule for port 3000 and there was the installation page. Easy as that. I chose to run Gogs using SQLite as a database since it&#8217;s zero-config and plenty for my single-user needs. After finishing the initial configuration I set up Gogs as a service and started it after editing gogs.service with my settings (user/group/etc.)

<div class="org-src-container">
  <pre class="src src-bash">$ sudo cp scripts/systemd/gogs.service /etc/systemd/system/
$ sudo vi /etc/systemd/system/gogs.service
$ sudo systemctl enable gogs.service
</pre>
</div>

I then edited the Gogs config file in ~/gogs/custom/conf/app.ini with a few tweaked app settings such as disabling registrations, etc.

Then I started the service.

<div class="org-src-container">
  <pre class="src src-bash">$ sudo systemctl start gogs.service
</pre>
  
  <p class="src src-bash">
    <strong>nginx</strong>
  </p>
</div>

I wanted to run Gogs at port 80 rather than the default 3000 so I installed nginx as a proxy.

<div class="org-src-container">
  <pre class="src src-bash">$ sudo apt-get -y install nginx
$ sudo vi /etc/nginx/sites-available/gogs
$ sudo ln -s /etc/nginx/sites-available/gogs /etc/nginx/sites-enabled/gogs
$ sudo service nginx restart
</pre>
</div>

The nginx gogs config looks like this

<pre class="example">server {
    listen 80;
    server_name [my-host-name];

    proxy_set_header X-Real-IP  $remote_addr; # pass on real client IP

    location / {
        proxy_pass http://localhost:3000;
    }
}
</pre>

That&#8217;s it. I now have a true all-to-myself private Gogs instance. In order to clone or push via SSH I added my public SSH key to my account in Gogs.

<img class="alignnone size-large wp-image-735" src="/img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50-1024x586.png" alt="" width="1024" height="586" srcset="/img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50-1024x586.png 1024w, /img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50-300x172.png 300w, /img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50-768x440.png 768w, /img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50-750x429.png 750w, /img/2017/12/jack-Dashboard-Gogs-2017-12-29-10-30-50.png 1036w" sizes="(max-width: 1024px) 100vw, 1024px" />

I&#8217;ll still need to configure an SSL cert from Let&#8217;s Encrypt but this got me going.

 [1]: https://gogs.io
 [2]: https://gitlab.com/gitlab-org/gitlab-ce
 [3]: https://amazonlightsail.com
 [4]: https://gogs.io/docs/installation/install_from_binary