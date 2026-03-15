Title: now
Date: 2026-03-14
Slug: now

*This is a [now page](https://nownownow.com/about). It reflects what I'm focused on at this point in my life.*

*Last updated: March 2026*



---

### Building a closed-loop AI chief of staff using Obsidian and Claude Code 

Over the last few months, I've been iterating on a closed loop, integrated chief of staff ecosystem using Obsidian ([which I love](/about)) and Claude code. 

The major building blocks are - 

* A morning briefing served every morning on Obsidian
* Contextual reminders throughout the day coming in Slack, where I spend most of my work time
* An evening ritual where I reflect on the day in a structured way, which generates an EOD document used by Claude code as an artifact to generate the next day's morning briefing. 

#### Here's how it works

Basically, every morning when I wake up I run a `/today` Claude Code skill, which pulls yesterday's EOD document and taps into several MCPs: Action items from yesterday's [Granola meetings](https://www.granola.ai/) which later it suggests adding to my [Todoist](https://www.todoist.com/) to-do list, My Google Calendar meetings, My shared priority 1 initiatives in [Notion](https://www.notion.com/) and today's forecast - all these make up a morning briefing I read every day around 5:15am when I wake up. 

While I read the morning report, Claude uses the document as context for `reminders.json` a JSON file that contains important reminders throughout the day. That file is pushed into GitHub and uses GitHub actions to send reminders as a Slack DM using a dedicated app. 

![](https://slashproject.s3.us-east-1.amazonaws.com/img/2026/03/cos-slack.png)

Every end of day, I run an `/eod` Claude code skill where I go through a series of questions to reflect and Claude Code uses the document as context for the next day's morning briefing - closing the loop on the entire system. 

### Learned about Mermaid.ai 

I had to create some architecture documents for work and one of the developers on my team introduced me to Mermaid ([this](https://mermaid.js.org/)) which uses simple syntax to create diagrams! Here's one for my AI chief of staff project → 

![](https://slashproject.s3.us-east-1.amazonaws.com/img/2026/03/MCP+Integration+Reminder-2026-03-15-211950.png)

### Moved into a new house!

Projects, projects, everything's a project. 

* Mounted 1,000 curtain rods, and an equal number of window blinds 
* Installed kitchen hardware 
* Assembled many IKEA pieces 
* Apparently grout sealer is a thing, who knew a house could have so much grout?
*  Etc. 

The house is amazing though, it's everything I wanted and more. 



---

[← back home](/)
