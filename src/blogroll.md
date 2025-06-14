---
title: Blogroll
layout: wordswordswords.liquid
permalink: blogroll.html
---

My grand list of top-shelf follows. (It’s not that grand, but these are well
interesting.)

<ul>
	{% for blog in blogroll %}
	<li>
		<a href="{{ blog.url }}" rel="external" target="_blank">{{ blog.title }}</a>
	</li>
	{% endfor %}
</ul>
