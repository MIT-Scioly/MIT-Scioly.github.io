---
title: Blogs
layout: default
keywords: "blogs"
custom_css: ["/assets/css/blogs.css"]
---

## Recent Posts

<div class="blog-posts-grid">
{% for post in site.blogs reversed %}
  <a href="{{ post.url }}" class="blog-post-card">
    <h3>{{ post.title }}</h3>
    <p class="post-date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <p class="post-excerpt">
      {% if post.subtitle %}
        {{ post.subtitle }}
      {% else %}
        {{ post.content | strip_html | truncatewords: 15 }}...
      {% endif %}
    </p>
  </a>
{% endfor %}
</div>
