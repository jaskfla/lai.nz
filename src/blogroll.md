---
title: Blogroll
layout: wordswordswords.liquid
permalink: blogroll.html
---

My grand list of top-shelf follows. (It’s not that grand, but these are well
interesting.)

<ul>
	{%- for blog in blogroll %}
	<li>
		<a href="{{ blog.url }}" rel="external nofollow" target="_blank">{{ blog.title }}</a>
	</li>
	{%- endfor %}
</ul>

Also available in the shape of an
<a href="/feeds/blogroll.opml" target="_blank"><abbr title="Outline Processor Markup Language">OPML</abbr>
file</a>.
