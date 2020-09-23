Title:  Migrating from Jekyll to Pelican (2019 edition)
Date:   2019-12-29 21:30:00 -0400
Category: project
Summary:  notes from making the migration from Jekyll to Pelican. Updating as I go
Projecttype: Python
Tags: project


Boy oh boy I'm exhausted. I just spent the last 9 hours migrating this blog from the pretty awesome, Ruby based [Jekyll](https://jekyllrb.com/) to the comforting arms of the Python based [Pelican](https://blog.getpelican.com/). In hindsight all of this could have possibly been avoided if only[ Ruby didn't start throwing errors](https://muffinman.io/macos-catalina-ruby-bad-interpreter-error/) at me after upgrading to macOS Catalina, but here we are.

Even though I'm kind of done for the day, I thought I'd jot down some of my notes in favor of those of you who may stumble upon this post in the future. As of right now Pelican dev stories are pretty rare to come by so here's my humble contribution.

## Migrating posts

This part was easy peasy as both Jekyll and Pelican use markdown as the way to generate HTML. I did have to change the structure of the YAML header just a tiny bit to accommodate for the way Pelican works.

This included mostly removing parenthesis and capitalizing some of the variables. (un?)fortunately I had only 24 posts in total so I knocked that out pretty past.

Basically this -

```yaml
# the Jekyll way
---
layout: post
title:  About impact
subtitle: "totally not morbid thoughtd about biology and creating impact"
date:   2019-10-09 10:00:00 -0400
categories: "200words"
author: "Omer Kaplan"
image: "cookies.jpg"
image-credit: "John Dancy"
---
```
Is now this (no lines, less quotes) -
```yaml
# the Pelican way
Title:  About impact
Date:   2019-10-09 10:00:00 -0400
Category: blog
Summary:  totally not morbid thoughts about biology and creating impact
Author: Omer Kaplan
```

## Migrating templates

Also good news on that front! While Jekyll is using Liquid as the templating engine, Pelican is using Jinja2 ([apparently one is for Ruby people, the other one's for Python people](https://stackshare.io/stackups/jinja2-vs-liquid)) which I have a lot of experience with working on multiple Django projects, I was genuinely excited to make the jump.

In real life, while there wasn't much difference in the syntax itself (I did use more Jinja functionality though, which was a nice shortcut), the settings file for Jekyll is, expectedly, different than Pelican's settings file terminology so for example ``{{ site.base_url }}`` becomes ``{{ SITEURL }}`` which messed up a lot of the relative links I had inside posts, mostly to images and CSS files.

From a structure perspective, the `templates` and `static` directories pretty much held their structure, I did had to rewrite most of the parts that touched relative links, like the `include` file for `<head>` . The good news is that going through the code those files were due for a rewrite anyways.

## Migrating functionality

In the previous iteration of the blog, and mostly to the fact that I was learning to code as I go, all the functionality like read times, next and previous posts, capturing categories and more were self-developed from scratch. Jekyll is gem packed <sup>see what I did there?</sup> with [plugins](https://github.com/planetjekyll/awesome-jekyll-plugins) and for some reason I did not use that to full extent.

On Pelican, however, the plugin engine is not only easy to implement it's also Python based which is to me feels like getting into a nice, conformable onesie if I ever own one. I got the functionality from the previous version of the blog brought if pretty fast and will probably fiddle around with plugin writing once I get more comfortable with the framework.

## Migrating issues, documentation, support etc.

Stackoverflow isn't ... well, overflowing with Pelican tips, that said even as a newcomer I felt I didn't really need it for the limited amount of functionality I had to migrate. The documentation was pretty good and written in lament terms so I could troubleshoot things and when I couldn't figure something out, there is[ a theme library available](https://github.com/getpelican/pelican-themes) where I could peek into other people's code and see where I messed up.

The only thing that sucked is that for some reason Google gives back search results from the documentation for version 3.6 while as I'm writing this post the latest version is 4.2.0, that was a pain to rediscover.

## Deployment to GitHub pages, maintenance

Jekyll have a seamless, pretty sweet integration with GitHub pages and it was panicking to lose that for 30 seconds but the documentation has a good solution for that as well and within 5 minutes I was up and running on production. No SSL issues or anything.

**24 hours later update**: OK comparing to Jekyll, deploying to GitHub pages is still a bit underdeveloped. Jekyll has this slick integration where it builds the site automatically from the source code while Pelican make you build the site yourself and push to a different branch. I lost an hour or two to messing around with Git error messages.

In terms of maintenance I don't foresee any major issues as I took time to simplify the code itself. I do have to make some additional steps to set up my IDE every time I sit down to maintain the code but based on last year's commits, it should be fine (it's a [YAGNI](https://martinfowler.com/bliki/Yagni.html) case for sure.)

All in all, 8.6\10 would migrate again. Or just stick to Python for a few years, let's do that.
