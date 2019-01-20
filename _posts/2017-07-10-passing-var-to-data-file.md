---
layout: post
title:  "Passing a variable to an include on Jekyll"
date:   2017-07-10 09:00:00 -0400
categories: "jekyll"
author: "Omer Kaplan"
image: "code.jpg"
image-credit: "Caspar Rubin"
---
I was searching the web for hours last night for a nice and simple way to pass a parameter from a post page to an include page on Jekyll. All I found were bits and pieces of code but nothing easy and comprehensive so I figured I might as well post something up there and hope people would stumble into it 😅

## End Result: Category description at the end of every post
My initial plan was to take the `page.category` parameter from a posts markdown, look for the category in a YML file under the `_data` folder and display a category description at the end of a post (you can see the final result below).

You may have found the hard way that Liquid doesn’t support passing a parameter within a parameter *(param-ception?)* so pulling off something like `{% raw %}{{ site.data.cat-description {{page.categories}} }} 🚫{% endraw %}` will get the compiler to throw errors at you. Here’s how I did it.

## Step 1: Capture the post’s category and send to an include file
First thing I did was to capture the `{{ page.categories }}` from a post and send it to an include file. Later on we’ll have the include file send us back the category description.

{% highlight ruby %}
{% raw %}
  <!-- Category description -->
  {% capture page-cat %}{{ page.categories }}{% endcapture %}
  {% include category-info.html %}
{% endraw %}
{% endhighlight %}

## Step 2: Set up a data file
Next up, I created a YML file under the `_data` folder that will hold a list of the categories descriptions.

{% highlight yml %}
{% raw %}
# This file holds all category descriptions that are displayed after each post-processed
meta: " is a generic category that talks about things related to building this blog that are not code related. Kind of like 'you dawg I heard you like blogging so you can blog about your blog.'"
{% endraw %}
{% endhighlight %}

## Step 3: Set up the include file
Last step that binds everything together is actually create the `category-info.html` include file under `_includes` to take the page category from the post (step 1), look It up in the YML file (step 2) and send back the description.

{% highlight html %}
{% raw %}
<div class="category-info">#{{ page-cat} {{ site.data.cat-info.[page-cat] }}</div>
{% endraw %}
{% endhighlight %}

The output of the include should be `{% raw %}#category``category-description-from-file{% endraw %}`. The part that does the magic is accessing `site.data.cat-info` with `[page-cat]` (in square brackets) as a variable instead of a liquid parameter.

That’s it 🎉 I should probably go ahead and create some fancy things like “if there isn’t a page category or if there’s isn’t a description hide the component” but the basics are here.

Check out the final result below 👇 or [visit the repo](https://github.com/omerkaplan/project). 
