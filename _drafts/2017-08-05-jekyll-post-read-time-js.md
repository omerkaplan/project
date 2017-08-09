---
layout: post
title:  "Jekyll post read time conversion tracking"
date:   2017-08-05 07:00:00 -0400
categories: "jekyll"
author: "Omer Kaplan"
image: "code.jpg"
image-credit: "Caspar Rubin"
---
Lately I’ve been learning some Javascript\jQuery and thought it’ll be really nice to get out of the course’s projects and mess around with some real-life implementation (that’s not to say that being the 100,00th programmer that writes a rock-paper-scissors game in Javascript isn’t important 😅).

## “How many people read a post all the way through?”
The goal of this project is to use Google Analytics’ conversion goal tracing in order to try and estimate how many people read a post all the way through.

![alt text]({{ site.baseurl }}{{ site.img_path_url}}{{site.img_path_url_post}}/jekyll-post-read-time-js-1.png "Jekyll post read time conversion tracking end result on Google Analytics")

You may have found the hard way that Liquid doesn’t support passing a parameter within a parameter *(param-ception?)* so pulling off something like `{% raw %}{{ site.data.cat-description {{page.categories}} }} 🚫{% endraw %}` will get the compiler to throw errors at you. Here’s how I did it.

## Step 1:
First thing I did was to capture the `{{ page.categories }}` from a post and send it to an include file. Later on we’ll have the include file send us back the category description.

{% highlight liquid %}
{% raw %}
{% assign words = content | number_of_words %}
{% if words < 360 %}
  1 min read
{% else %}
  {{ words | divided_by:180 }} mins read
{% endraw %}
{% endhighlight %}

## Step 2:


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
