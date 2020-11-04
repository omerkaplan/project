Status: published
Title:  I've decided to shut down my 300K MAU side project, here's what I learned
Date:   2020-11-04 10:30:00 -0400
Category: blog
Tags: product management, projects, metrics, business
Summary: esports radar us shutting down today while growing, here are some lessons
social_image: https://slashproject.s3.amazonaws.com/img/post/2020-11-esports-radar/esr-promo.png

Last week I had the pleasure of writing my first 'website is shutting down' email to few hundreds that subscribed to receive daily updates from esports Radar: A service that provided curated, real-time esports headlines on a large variety of platforms. 

When sunsetting side-hustles, I found that the positive things (experiences, pieces of code, sometimes customers) are often embedded in the next project while the learnings about that didn't work tend to fade away. The purpose of this post is to dive into my learnings from what didn't work along and why I ended up shutting down a seemingly successful website so I can keep those lessons in mind as well. 

The problem I was solving for using esports radar was very real: The world of esports news is highly fragmented between different sites with very little syndication or quality control. As a player of a specific game that's interested in its esports scene it's a lot of cognitive work for me to get out to the different news sites and filter by my favorite game, so I'll probably get my content on Reddit or stick to a single news source. What esports radar did behind the scenes is scraping the vast majority of esports news websites out there, analyze the articles, categorize them and using a set of 12 signals, compare them to other articles discussing the same topic so the output is a digest of all the esports news for the most popular games using the best source available. 

![esports radar on launch](https://slashproject.s3.amazonaws.com/img/post/2020-11-esports-radar/esr-promo.png)

_above: esports radar launch photo, December 2018_

Building esports radar as an infrastructure, I was able to serve the digest over a large variety of platforms: Other than a website and mobile edition esports radar was serving news to over 5,000 discord servers, over 1,000 websites using syndication, Google Chrome extension and Google Home news application (I have to admit, saying "hey Google, give me esports headlines" and listening to my own website in action was kind of awesome). At the time of sunsetting the service, esports Radar had a little over 300,000 monthly users and rising. 

With are growth and scale, also came the realization that operating costs are going to grow and with no clear way to sustain itself and about $500\year in operating costs it was time to focus my energy my existing projects. 

## set your business goals up front

_* Unless it's a for-funsies project. In that case forget about business goals_

Early on in the process, when I was going through the product discovery phase, I got validation from the market that the problem I was solving for is accurate: esports news sites are fragmented, getting around the web fishing for information is a pain point and a clean, fast way to consume headlines is a viable solution. Even though I didn't put a lot of upfront resources into discovery, I started working on esports radar knowing that if I build it, users will come. 

With hardly any marketing I reached 1,000 daily users within a few days. I then kept adding access points and content distribution endpoints until the number of daily users grew and retention was solid. The problem started when I was about a year in, sitting on a side hustle that had a large user base but can't sustain itself. I built it, they came - now what?

Looking back at the process, I had a good sense of user segmentation but didn't think much about how does the solution I'm building for the chosen user segments translates into business goals. Don't get me wrong, I didn't go into esports radar expecting to scale into the big bucks but I was hoping it would sustain itself based off a 'if you like this service, donate' model. A donation model for self-sustainig a project is could be fine, but when looking at it through the prism of the user persona (people who are looking to read esports headlines) I could have estimated that donations wouldn't work.

Of course, there are other ways I could have monetized based on volume alone (ads, sponsored content within RSS feeds) but even at this point I feel that literring the site's content with ads in favor of covering the operating cost is not a trade-off I'm willing to make. The best thing for esports Radar at this point is going back to the drawing board and re-think the model and solve it in a next iteration, or a future project altogether. 

![esports radar september 2020 data](https://slashproject.s3.amazonaws.com/img/post/2020-11-esports-radar/esr-data.png)

_above: data snapshot from September 2020, website is growing - but is it good growth?_

## build key metrics as proxy to business goals 

As a product manager, I always ask my team and my stakeholders 'what is good growth'. Looking back at the different products I was working on, the definition of 'good growth' always came down to a subset of key metrics that impacted business goals. It's always nice to have high engagement and retention numbers but when those metrics don't act as proxy metrics for a business goal they are just nice numbers to look at.

When I launched esports Radar I built dashboards and set up the metrics infrastructure for growth: Looking at usage per platform and expending to new platform as I identify need, looking at usage metrics for each news outlet, optimizing the aggregating engine and more. In that sense, I built the website for user acquisition and retention and that's exactly what I got - growth and retention. 

Because esports Radar did not have a model to make it self-sustainable its growth didn't matter much from a business perspective. In hindsight, the way I should have done it is going into building the project with a hypothesis in mind on, given the target audience that was well defined, how will this project sustain itself and build that into my MVP. 



## know when to shut down even though it's emotionally hard 

Shutting down a project is hard, especially when the data shows 'growth' (which we already established there is a difference between growth and good growth). From my vantage point the hardship comes not from the act of shutting down itself, but more from the loss of routine: One less project to check up on, one less roadmap to manage, few less emails per week from users asking features - they will definitely be missed.

But ultimately, that blessing is also the reason why closing esports Radar is necessary: I need to make cognitive space for newer projects that will be built on the lessons, thought process and potentially bit and pieces of code from the one that just got shut down. 

So in a sense, some part of esports radar will continue to live in a future project, and that's kind of nice. 