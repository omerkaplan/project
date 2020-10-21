Status: published
Title:  Non-functional requirements are my favorite and I will make them yours too
Date:   2020-10-21 10:30:00 -0400
Category: blog
Summary: what are NFRs and how you start thinking about them  
Tags: product management, requirements, NFRs
social_image: https://slashproject.s3.amazonaws.com/img/post/2020-10-nfrs/fluffy-cat.jpg

The more I grow as a product manager the more I enjoy diving deep into the world that's beyond the functional. While I absolutely love working on the functional portion, the connective tissue between the product and the user, it's often the non-functional portion of the product that often enables a lot of the front-facing magic. 

Can you think of an app or website that felt fast that it gave you a sense of reliability, that 'it's just works'? Or a product that's using sensitive data and make you feel safe by demonstrating the most rigid security requirements? Those probably had well defined non-functional requirements (or NFRs for short) built into the development process, and likely the team's culture. 

## non-functional requirements overview: my high-level, oversimplified version

If you search online for definitions to non-functional requirements you'll find them at various levels of depth and how they are implemented in different industries (non-functional requirements are not unique to software and often being referred to as 'quality metrics). I encourage you to research and find out how different kinds of NFRs are being implemented but for the purpose of this post, here's my short, personal take:

From a high-level perspective, I really like Wikipedia's high level definition for NFRs - 

> requirement that specifies criteria that can be used to **judge the operation** of a system, rather than specific behaviors [^1]

Here are a few examples for non-functional requirements I frequently use (you can find many, many more on the wiki page [^1]) - 

**Speed** - _"the web page should load to a point of being fully operational in less than 10 seconds"_, _"the search API should return a result within 2 seconds after recieving a query"_.

**Maintainability** - _"the feature should be maintainable within one sprint's length by a single developer"_ 

**Throughput** - _"the endpoint should be able to process 1000 queries per second without failing"_ 

**Reliability** - _"the feature should maintain uptime of >99% while running in the background of low-end mobile devices"_

**Usability** - _"the feature should be usable for new users without prompts or help text"_

To me, non-functional requirements are an integral part of any user story or epic. NFRs represent a wide array of acceptance criteria that set a quality and performance standards to what is being built, and when we define them they complement the functional requirement by setting expectations around quality. As with any metric, we need to make sure that NFRs are measurable, feasible and bought-into by the team. 

![fluffy cat](https://slashproject.s3.amazonaws.com/img/post/2020-10-nfrs/fluffy-cat.jpg)

_a non-functional requirement for this cat would be something like: "should not overheat when cuddled in a room temperature of over 35°C". Photo by Lina White on [Unsplash](https://unsplash.com/photos/87VMOKCumjc)_

## what makes NFRs awesome  

Even though that most NFRs are technical in nature you don't have to be a technical product manager do define them. In fact, I use non-functional requirements as an opportunity to engage with the technical team (architects, engineers, DevOps) and have a conversation around quality through the prism of a feature that is being built.

Discussing non-functional requirements with the technical team not only sets a realistic expectation around performance, but also makes everyone view what is being built on the feature level but also as part of a sustainable and maintainable system. Defining NFRs help reduce 'product waste' (non-usable functionality, over engineering and technical debt) and in my experience spark conversations around maintenance and documentation. 

As a product manager, thinking about non-functional requirements when defining functional requirements helps me build empathy towards the different technical teams involved (as I view the build process from their end) on top of the user empathy which forms during functional requirements writing. 

In some cases I found that defining NFRs also help with the QA process by taking a lot of subjective biases out of the equation and instead focuses makes the discussion more metric driven. Every now and then QA would send me feedback along the lines of 'feels slow', not intuitive' or 'may cause issues on low-end mobile devices'. Defining non-functional requirements reduces the number of 'feels...' during QA and keep the conversation around measurable properties.

## NFR tradeoffs and how to start

It wouldn't be right to have all this text about how great non-functional requirements are without talking about some of the trade-offs: Since a lot of the discussion around NFRs should be collaborative between product and the technical teams, going into this discussion can raise resistances - especially if the organization is siloed to a point where there is a clear separation between technical and functional measurements - people would feel you're spending time in their turf. 

If that's the case, I would start discussing non-functional requirements with the architecture or engineering teams through the prism of the functional requirement: In most cases I can think of, the metrics behind non-functional requirements are not the key success metrics for what is being built - they are acceptance criteria or a proxy metric to a  functional KPI so I would start the discussion with with the 'why and what' and introduce NFRs as a topic for discussion.

For example: Imagine we want to optimize a 'download' page and know from a data standpoint that page loading time is one of the factors that impacts the conversion rate for download. I'd start a conversation about how would we measure and optimize the page's load time and use it as an acceptance criteria for the user story. Another point of discussion could be incorporating load time as a product success metric (as long as there is significance) so the technical team is engaged with a metric that is connected to a more front-facing feature. 

Knowing exactly where to draw the line and set measurable and feasible non-functional requirements can be difficult at first, especially for smaller organizations - and that's totally fine! When getting used to working with NFRs it's more about the conversation and building collaboration between teams.

--

As a reminder, I'm always happy to chat about non-functional requirements, and product management in general, on [my product talk 1-1 meetings](https://slashproject.co/product-talk/). 



## footnotes

[^1]: https://en.wikipedia.org/wiki/Non-functional_requirement

