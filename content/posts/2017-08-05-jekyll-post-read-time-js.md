Title:  Jekyll post read time and conversion tracking
Date:   2017-08-18 07:00:00 -0400
Category: project
projecttype: Jekyll
Summary: Calculating read times in Jekyll and linking with Google Analytics
Tags: project

Lately I’ve been learning some Javascript and thought it’ll be really nice to get out of the course’s projects and mess around with some real-life implementation (that’s not to say that being the 100,00th programmer that writes a rock-paper-scissors game in Javascript isn’t important 😅).

## “How many people read a post all the way through?”
The goal of this project is to use Google Analytics’ conversion goal tracking in order to try and estimate how many people read a post all the way through.

The overall plan was to take the `estimated reading time` feature and compare it to the `time the user is actually spending on the page`. If the user spends more time on page than the estimated reading time, it's a conversion and we should send an event to Google Analytics 🎉 if not, don't do anything.

## Step 1: Calculate the estimated reading time
I was always impressed by how sites like [Medium](https://www.medium.com) show an estimated reading time on each post. Apparently that it's largely based on several researches done on how many words per minute we read on average [[Read more](http://ezinearticles.com/?What-is-the-Average-Reading-Speed-and-the-Best-Rate-of-Reading?&id=2298503)].

You could go ahead and grab all the words in a post, parse them in Javascript and parse the words. Luckily, Carlos Alexanndro Becker [wrote a code snippet](https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/) in Liquid that does the same thing using `content | number_of_words` we get for free in jekyll. PHEW 😅

{% highlight liquid %}
{% raw %}
{% assign words = content | number_of_words %}
{% if words < 360 %}
  1 min read
{% else %}
  {{ words | divided_by:180 }} mins read
{% endraw %}
{% endhighlight %}

## Step 2: Get the user's time on screen
That was my main Javascript and jQuery practice. Whenever you go into a page, I take a timestamp and then on `unload` take another and do a quick math comparing it to the estimated reading time we grabbed from step 1.

{% highlight javascript %}
{% raw %}
<script>
  var calcRead = {{words | divided_by:3}}; //converts 'words' time to seconds
  var startTime = $.now();
  var endTime = '';
  var actualRead ='';
  $(window).on("unload",function(){
    endTime = $.now();
    var actualRead = Math.round((endTime-startTime)/1000);
    if (actualRead >= calcRead) {
    ga('send', 'event', 'Post', 'Read', '{{ page.title }}');
  }
  });
</script>
{% endraw %}
{% endhighlight %}

## Open issues, things to improve
There are some open issues that can improve this super simple script: From running with it live around two weeks I've seen that if someone forgets a tab open I still send a conversion event even after 40+ minutes. The general assumption going into this exercise is that someone will take a reasonable amount of time to read a post, maybe one way to approach it should be firing the event if the conversion happen within 5 minutes of goal time.

I'm personally a fast reader, so when it comes to long form writing I may finish reading before the estimated reading time, that's also a consideration. In that regard, from a design perspective there is merit to take people who "skim" through the post and send a different conversion for them.

Anyhow, hope you find this useful ☺️
