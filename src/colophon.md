---
title: Colophon
layout: wordswordswords.liquid
permalink: colophon.html
---

The typefaces around here are
<a href="https://djr.com/warbler" rel="external nofollow" target="_blank">Warbler</a>
by David Jonathan Ross and
<a href="https://mbtype.com/fonts/concourse" rel="external nofollow" target="_blank">Concourse</a>
by Matthew Butterick.

Butterick’s book,
<a href="https://practicaltypography.com" rel="external nofollow" target="_blank"><i>Practical
Typography</i></a>, taught me most of what I know about typography. You should
read it&mdash;it’s free.

<i>{{ metadata.domain }}</i> is designed and built by me. Also, in a real sense,
by the many who <a href="/people">inform my sensibilities</a> and whose work
<a href="/small-web">inspire mine</a>.

I use
<a href="https://www.11ty.dev" rel="external nofollow" target="_blank">Eleventy</a>
to build this site, and host it with
<a href="https://www.netlify.com" rel="external nofollow" target="_blank">Netlify</a>.
Its code is [on GitHub]({{ metadata.repoUrl }}), if that piques your interest.
My domain comes via
<a href="https://porkbun.com" rel="external nofollow" target="_blank">Porkbun</a>;
and <abbr title="Domain Name System">DNS</abbr> stuff runs through Cloudflare’s
pipes (though I anticipate switching to
<a href="https://dns.kitchen" rel="external nofollow" target="_blank"><abbr title="Domain Name System">DNS</abbr> Kitchen</a>).

This site is
<a href="https://www.websitecarbon.com/website/lai-nz" rel="external nofollow" target=_blank>climate-friendly</a>
and has [no analytics](/privacy).

<small class='dim' style='text-wrap: balance'>Last built <time
datetime='{{ 'now' | date: "%Y-%m-%dT%H:%M:%SZ" }}' style='font-variant-numeric:
unset'>{{ 'now' | date: "%e&nbsp;%B %Y at %H:%M (%Z)" }}</time>, from revision
<a
		href='{{ metadata.repoUrl }}/commit/{{ metadata.commitHash }}'
		rel="external nofollow"
		target="_blank"
	><code>{{ metadata.commitHashShort }}</code></a>.</small>
