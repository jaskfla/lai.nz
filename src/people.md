---
title: People whose work I admire
layout: wordswordswords.liquid
permalink: people.html
people:
  - name: Adam Lissagor
    url: https://adamlisagor.com
  - name: Adam Newbold
    url: https://neatnik.net
  - name: Andrew Kim
    url: https://allsideswater.com
  - name: Antonio Cavedoni
    url: https://cavedoni.com
  - name: Arun Venkatesan
    url: https://arun.is
  - name: Bartosz Ciechanowski
    url: https://ciechanow.ski
  - name: Brian Mueller
    url: https://mastodon.social/@brianmueller
  - name: Charm
    url: https://charm.sh
  - name: Chris Lattner
    url: https://nondot.org/sabre
  - name: Christian Selig
    url: https://christianselig.com
  - name: Climate Town
    url: https://www.youtube.com/ClimateTown
  - name: DeepBlueInk
    url: https://www.youtube.com/DeepBlueInk
  - raw:
      <a href="https://mastodon.social/@bugcounter">Dr&nbsp;Don</a> & <a
      href="https://x.com/benjaminchapman">Prof.&nbsp;Ben</a>
  - name: Emil Kowalski
    url: https://emilkowal.ski
  - name: Ethan Marcotte
    url: https://ethanmarcotte.com
  - name: exurb1a
    url: https://www.youtube.com/Exurb1a
  - name: Gavin Nelson
    url: https://nelson.co
  - name: Good Enough
    url: https://goodenough.us
  - name: Goodside Studio
    url: https://www.goodside.studio
  - name: Gordon Murray
    url: https://en.wikipedia.org/wiki/Gordon_Murray
  - name: Henry Desroches
    url: https://henry.codes
  - name: Heydon Pickering
    url: https://heydonworks.com
  - name: iA
    title: Information Architects
    url: https://ia.net
  - name: Jay Foreman
    url: https://www.youtube.com/JayForeman
  - name: Jen Simmons
    url: https://jensimmons.com
  - name: Jonnie Hallman
    url: https://destroytoday.com
  - name: Lady Sophie
    url: https://songwhip.com/ladysophie/one-night-only-to-the-boy-who-broke-my-heart
  - name: Lea Verou
    url: https://verou.me
  - name: Louie Mantia
    url: https://lmnt.me
  - name: Lucas Sin
    url: https://www.instagram.com/lucas.sin
  - name: Lynn Fisher
    url: https://lynnandtonic.com
  - name: Marco Arment
    url: https://marco.org
  - name: Mate Rimac
    url: https://www.instagram.com/materimac
  - name: Matthew Butterick
    url: https://matthewbutterick.com
  - name: Matthew Skiles
    url: https://matthewskiles.com
  - name: Marcin Wichary
    url: https://aresluna.org
  - name: Merlin Mann
    url: http://unwilling.horse
  - name: Mike Rugnetta
    url: https://rugnetta.com
  - name: Neatnik
    url: https://neatnik.net
  - name: Nilay Patel
    url: https://www.theverge.com/authors/nilay-patel
  - name: Panic
    url: https://panic.com
  - name: Parakeet
    url: https://parakeet.co
  - name: Posy
    url: https://www.youtube.com/@PosyMusic
  - name: Robin Rendle
    url: https://robinrendle.com
  - name: Sara Soueidan
    url: https://www.sarasoueidan.com
  - name: Sebastiaan de With
    url: https://sdw.space
  - name: Set Studio
    url: https://set.studio
  - name: Sigiswald Kuijken
    url: https://www.lapetitebande.be/en/sigiswald-kuijken
  - name: Smith & Diction
    url: https://smith-diction.com
  - name: Steph Ango
    url: https://stephango.com
  - name: Summer McClure
    url: https://summermcclure.xyz
  - name: Technology Connections
    url: https://www.youtube.com/TechnologyConnections
  - name: Teenage Engineering
    url: https://teenage.engineering
  - name: The Vlogbrothers
    url: https://www.youtube.com/vlogbrothers
  - name: Vi Hart
    url: http://vihart.com
  - name: Ze Frank
    url: https://www.youtube.com/zefrank1
---

There’s a lot of crap on the internet. But there’s also plenty of great stuff.
These people produce work that are worth my attention—perhaps you’ll like them
too.

<ul>
	{%- for person in people %}
	<li>
	{%- if person.raw %}
		{{ person.raw }}
	{%- else %}
		<a
			href="{{ person.url }}"
			rel="external nofollow"
			target="_blank"
			{%- if person.title %}title="{{ person.title }}"{%- endif %}
		>{{ person.name }}</a>
	{%- endif %}
	</li>
	{%- endfor %}
</ul>
