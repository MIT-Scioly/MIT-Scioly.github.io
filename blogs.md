---
title: Blogs
layout: default
keywords: "blogs"
permalink: /blogs
---

This is the top blogs page.

## Recent Posts

{% for post in site.blogs reversed %}
- [{{ post.title }}]({{ post.url }}) posted on {{ post.date | date: "%B %-d, %Y" }}
{% endfor %}
