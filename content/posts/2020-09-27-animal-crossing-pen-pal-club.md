Title:  Project story: The Animal Crossing Pen Pal Club
Date:   2020-09-27 10:30:00 -0400
Category: project
Summary:  First time building on top of an existing product. And a super fun one to build on top of!  
Projecttype: Python
Tags: gaming, product management, coding, growth
social_image: imagefile

Visit the project site at [animalcrossingpenpal.club](https://animalcrossingpenpal.club)

--

My journal notes from March and April 2020 are all a big blur. Reading my thoughts I can vaguely rememebr my past self trying to embrace the chaos that is that first few weeks of COVID-19, rallying the team and figuring out what is essential and how are we changing the way we operate so we can deliver faster but also keep ourselves sustainable. It was a lot to handle [^1].

In the midst of all this craziness, Nintendo released a new game in the Animal Crossing franchise. This game was an antithesis to everything that was going on in the world: When everything was on lockdown in real-life my Animal Crossing island was a place I could walk outside and explore; when we needed a good reason to physically be around other people, I got rewarded by the game for hanging out with my neighbors. When everyone were working late and hard, sending in-game postcards to people in-game gave me respite, a sense of community and a shot of optimism first thing in the morning.

[![animal crossing new horizons](https://slashproject.s3.amazonaws.com/img/post/2020-09-acpc/acnh.png)](https://slashproject.s3.amazonaws.com/img/post/2020-09-acpc/acnh.png)

_above - people hanging out virtually in the midst of covid-19! escapism in its purest form_

Apparently I wasn't alone. The New York Times declared animal crossing '[a game for the Coronavirus moment](https://www.nytimes.com/2020/04/07/arts/animal-crossing-covid-coronavirus-popularity-millennials.html)', the Wall Street Journal [explored it as therapy](https://www.wsj.com/articles/how-animal-crossing-became-coronavirus-therapy-11587318513), it was presented as [a global phenomenon](https://www.theguardian.com/games/2020/may/13/animal-crossing-new-horizons-nintendo-game-coronavirus), appeared in [academic peer-reviewed articles](https://onlinelibrary.wiley.com/doi/10.1002/hbe2.221) and many, many more blog posts and news sites segments. 

## discovering the problem statement

During the first two months of the pandemic I found it very hard to keep up my habit of practicing product management skills outside of work [^2] but I did, with very low intensity. It was more about showing up and keeping the structure alive than doing meaningful work, until one evening I stumbled across a scenario that gave me purpose for the weeks to come:

To alleviate the loneliness that was an inherent part of the early-pandemic state of mind, one of my favorite things to do in Animal Crossing was writing in-game postcards to other players. There was nothing more satisfying than logging into the game sometime in the afternoon and finding postcards from random, anonymous avatars telling me about their favorite food, English word or just how their day was at work.  At some point, questions like 'where are you from' and 'how old are you' came up, mixing the perfect alternate reality with the real world. 

Not to anyone's dismay, I find having casual online conversations with people 20 years younger than me anywhere between inappropriate and uncomfortable. I don't do it. Don't get me wrong, I'm sure some of them are the nicest people on the planet with great intentions, but in a casual in-game setting it feels wrong. So even though I ended up blocking most of them (with a polite message explaining chatting across the age chasm isn't something I feel comfortable doing) I was back at square one - lonely in an amazing virtual world with only cute NPCs to comfort me.

At that point my product sense kicked in: What I was experiencing didn't feel like a "me" thing, so I got curious and dug deeper. Back then, if you wanted to find in-game pen pals you had to either find a group on Facebook and hope someone there is into it, search twitter and cold-DM people asking to correspond or find people on a message boards, reddit or Discord. By large, all these solutions had pain points associated with them - some required you to compromise your anonymity, some were too hard and some required you to ask the 'how old are you' question up front which doesn't feel nice and some, like sending a cold DM, are down right creepy.

After mapping all the different options of 'how people would find an in-game pen pal' and considering the pain points for each segment, a problem statement emerged: **As an animal crossing player, I want to find people my age to send in-game postcards to, so I don't feel lonely**. 

[![animal crossing pen pal club homepage](https://slashproject.s3.amazonaws.com/img/post/2020-09-pm-solitaire/animal-crossing-ppc.png)](https://slashproject.s3.amazonaws.com/img/post/2020-09-pm-solitaire/animal-crossing-ppc.png)


_above - the homepage of the Animal Crossing Pen Pal Club_

## building an MVP

What I like about a well defined problem statement is that after writing it down it provides clarity for the rest of the process. After tweaking the problem statement the next step was finding out if this was a problem worth solving. Fortunately, during the research phase I mapped the different places where someone might look for animal crossing in-game pen pals and started vetting out my hypothesis - it turned out to be a good problem to solve. 

Building the MVP version of [animalcrossingpenpal.club](https://www.animalcrossingpenpal.club/) took about a weekend; I used Jango as framework since I was already familiar with it and spun up the backend rather quickly. I spent the majority of the time coding the matchmaker which is the secret sauce behind the service - not only it matches people based on age group, the matchmaker know how to handle an odd number of matches, handle unique matches (so people don't match with each other twice in a row), match based of responsiveness and additional cool signals. Since good matching contributes to user satisfaction (my only success metric) it's one of the main components I iterate on and optimize. 

Being a nice-to-have side project to keep my product skills sharp, the pen pal club does not have a fully fledged product roadmap. Instead, I've built several feedback loops that give me a rough idea on what should I be focusing on next. 

For example, two days after matching, an email is sent out to all the club members containing a short survey about this month's matching and checking if everything went smooth. From the survey I was able to learn that there are two major factors that impact people's experience: Responiveness (the time between being matched and the time connecting in-game) and frequency (the cadence of sending in-game messages). The best case scenario from an experience standpoint is where matched people connect in-game quickly and start corresponding at least once a day. 

## project learnings

**The animal crossing pen pal club was the first time I worked on a side project that solves a problem on top on an existing product.** It was very interesting thinking about the problem statement not in the context of an industry or an action but rather something along the lines of 'what pain points exist within the microcosmos that is Animal Crossing'. Having an existing product as a constraint also help with thinking about user segmentation and potential problems they have since they all live within the context of a small ecosystem.

**Boilerplates matter.** Working on the MVP for the pen pal club I felt that there was a go-to market deadline on it. It was roughly a month post-launch of the game and established websites were getting 'million clicks per day'[^3] alongside new services that were popping up on a daily basis. I don't think I was able to spin up a fully designed django project in a weekend without good boilerplate templates I had in advance. I used the skeleton and homepage structure of a former project of mine (projectignite.app, now off-air) to make the pen pal club one pager front-end and backend database logic and it went great. 

**build an MVP following the user's journey**. Looking at my target audience and after mapping out the user journey, I knew the optimal experience would be on mobile devices so MVP for the pen pal club included a super solid mobile experience (fast load times, device testing, low-bandwidth friendly) and an ok-ish desktop experience. Even though it was a bit more inconvenient on the dev side I'm glad I stuck to my user journey and implemented accordingly. 



## footnotes

[^1]: I wrote about some of my COVID-19 early learnings [here](https://slashproject.co/posts/2020/leading-a-team-through-ambiguous-times-covid-19-week-1-learnings) and [also here](https://slashproject.co/posts/2020/what-is-essential-covid-19-week-3-learnings/). 
[^2]: Read more how I keep my product management skills sharp off-work [here](https://slashproject.co/posts/2020/product-management-solitaire-things-i-do-to-keep-my-product-skills-sharp-off-work/).
[^3]: https://www.washingtonpost.com/video-games/2020/05/11/nookazon-animal-crossing-new-horizons-trading/

