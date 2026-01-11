---
title: Props and Paradigms
layout: p-by-p.liquid
permalink: writing/css-in-js.html
excludeFromSitemap: true
---

I am, [somewhat](https://briefs.video/videos/what-is-react)
[unfortunately](https://infrequently.org/2024/11/if-not-react-then-what), a
React developer.

I am
not—[however _and thankfully_](https://heydonworks.com/article/what-is-utility-first-css)—a
Tailwind developer. In
[my work at Beyond Essential Systems](https://github.com/beyondessential), I
walk the
[styled-components Happy Path](https://www.joshwcomeau.com/css/styled-components).

And it has, for the most part, been a happy path indeed.

Semantic markup, complemented by cascading styles, is my bread and butter.
[styled-components](https://styled-components.com)’
<abbr title="Cascading Style Sheets">CSS</abbr>-in-<abbr title="JavaScript">JS</abbr>
paradigm gives me a convincing enough illusion I’m writing true,
honest-to-goodness, vanilla <abbr title="Cascading Style Sheets">CSS</abbr>.

I’ve used it and [Emotion](https://emotion.sh) in university assignments and
[side projects](https://github.com/UOA-CS732-SE750-Students-2024/project-group-golden-giraffes)
too.

In 2025, styled-components
[went into maintenance mode](https://opencollective.com/styled-components/updates/thank-you).

<span aria-label="Smiling face with tear emoji" role="img">🥲</span>

This took me by surprise.

Utility-first <abbr title="Cascading Style Sheets">CSS</abbr> is perplexingly,
exasperatingly, soul-crushingly popular. But is it already time for the most
popular
<abbr title="Cascading Style Sheets">CSS</abbr>-in-<abbr title="JavaScript">JS</abbr>
library to retire?

This dichotomy—like all are—is false. (_Turns out._)

For one, tools like [StyleX](https://stylexjs.com) and
[Linaria](https://linaria.dev) exist, which retain ~~the superior~~ my preferred
paradigm without the runtime overhead of styled-components (or its spiritual
relatives).

For two,
[<abbr title="Cascading Style Sheets">CSS</abbr> Modules](https://glenmaddern.com/articles/css-modules)
aren’t even bad. _Good_, even. Who’s written a `styled` component complex enough
that you extracted it into its own module?

<span aria-label="Person raising hand emoji" role="img">🙋</span>

Silliness.

<abbr title="Cascading Style Sheets">CSS</abbr> is good now. _Really good_.

<span class=caps>Author’s note.</span> I started drafting this piece in
April&nbsp;2025, but never quite finished the thought. I think I was going to
somehow tie this into using
<a href="https://ishadeed.com/article/modern-attr" rel=external target="_blank">modern
`attr()`</a> to solve the same problem as transient props.

Might come back to this someday; but ta ta for now.
