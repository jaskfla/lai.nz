/*
 * Adapted from https://github.com/mwichary/The-rectangle-behind-you
 */

/** Current slide number */
let currentSlideNumber = 0;

/** Whether to skip less important slides or not (https://medium.com/p/4493ad863f55) */
let skipLessImportantSlides = false;

/** All the slide elements */
let slideEls;

// General slide logic
// --------------------------------------------------------------------------
function showSlide() {
	const els = document.querySelectorAll('main > div.👀');
	for (const el of els) el.classList.remove('👀');

	slideEls[currentSlideNumber].classList.add('👀');

	updateUrlFragment();
}

/** Clean up right after the slide disappears. */
function onSlideLeave(slideEl) {
	// Stop playing video and rewind it for future use
	if (slideEl.querySelector('video')) {
		const el = slideEl.querySelector('video');
		el.pause();
		el.currentTime = 0;
	}

	// Unload the iframe for better performance
	const iframeEl = slideEl.querySelector('iframe');
	if (iframeEl?.classList.contains('loaded')) {
		iframeEl.src = 'about:blank';
		iframeEl.classList.remove('loaded');
	}

	slideEl.getAttribute('onslideleave') &&
		eval(slideEl.getAttribute('onslideleave'));
}

/** Load iframe on a given slide, if any */
function loadIframes(slideEl) {
	const iframeEl = slideEl.querySelector('iframe');
	if (iframeEl && !iframeEl?.classList.contains('loaded')) {
		iframeEl.src = slideEl.querySelector('iframe').getAttribute('data-src');
		iframeEl.classList.add('loaded');
	}
}

/** Prepare the slide just ahead of the next slide */
function onSlidePreEnter(slideEl) {
	// Load video if it’s on the slide
	slideEl.querySelector('video')?.load();

	loadIframes(slideEl);
}

/** Prepare the slide that just became visible */
function onSlideEnter(slideEl, instant) {
	// Play video if it’s on the slide
	if (slideEl.querySelector('video')) {
		const el = slideEl.querySelector('video');
		el.load();
		el.play();
	}

	// Doing it again, even though we did it in onSlidePreEntry, so that the presenter can safely
	// refresh
	loadIframes(slideEl);

	// Focus on things if so requested
	if (!instant && slideEl.classList.contains('focus-after-transition')) {
		slideEl.querySelector('iframe')?.focus();
		slideEl.querySelector('input')?.focus();
	}

	slideEl.getAttribute('onslideenter') &&
		eval(slideEl.getAttribute('onslideenter'));

	// Play animations if any
	const els = slideEl.querySelectorAll('.animate-on-enter:not(.animate)');
	for (const el of els) {
		window.setTimeout(() => el.classList.add('animate'), 0);
	}
}

/**
 * Go to the next slide.
 * @param bool instant Whether it should skip all the transitions (true) or not
 */
function nextSlide(instant) {
	if (currentSlideNumber < slideEls.length - 1) {
		onSlideLeave(slideEls[currentSlideNumber]);
		currentSlideNumber++;

		// Skip predetermined slides if we are short on time
		while (
			skipLessImportantSlides &&
			slideEls[currentSlideNumber].classList.contains('skip-if-pressed-on-time')
		) {
			currentSlideNumber++;
		}

		showSlide();
		onSlideEnter(slideEls[currentSlideNumber], instant);

		// Preload the next slide for smoother transition
		const nextSlideEl = slideEls[currentSlideNumber + 1];
		if (nextSlideEl) onSlidePreEnter(nextSlideEl);
	}
}

/**
 * Go to the previous slide.
 * @param bool instant Whether it should skip all the transitions (true) or not
 */
function prevSlide(instant) {
	if (currentSlideNumber === 0) return;

	onSlideLeave(slideEls[currentSlideNumber--]);

	while (
		skipLessImportantSlides &&
		slideEls[currentSlideNumber].classList.contains('skip-if-pressed-on-time')
	) {
		currentSlideNumber--;
	}

	showSlide();
	onSlideEnter(slideEls[currentSlideNumber], instant);
}

/**
 * Go to the first slide.
 * @param bool instant Whether it should skip all the transitions (true) or not
 */
function firstSlide(instant) {
	if (currentSlideNumber === 0) return;

	currentSlideNumber = 0;
	showSlide();
	onSlideEnter(slideEls[currentSlideNumber], instant);
}

/**
 * Go to the last slide.
 * @param bool instant Whether it should skip all the transitions (true) or not
 */
function lastSlide(instant) {
	const end = slideEls.length - 1;
	if (currentSlideNumber === slideEls.length - 1) return;

	currentSlideNumber = end;
	showSlide();
	onSlideEnter(slideEls[currentSlideNumber], instant);
}

/*
 * Update the page URL to include the slide number after a #
 */
function updateUrlFragment() {
	window.history.replaceState(null, '', `#${currentSlideNumber + 1}`);
}

/**
 * Get the slide number from URL fragment (on presentation load or reload)
 */
function getSlideNumberFromUrlFragment() {
	const fragment = window.location.hash.substring(1);
	currentSlideNumber = Number.parseInt(fragment) - 1 || 0;
}

/**
 * Get unique ID identifying special slides.
 */
function getCurrentSlideId() {
	return slideEls[currentSlideNumber].getAttribute('data-slide-id');
}

/*
 * Flash an indicator (confirming to the presenter an action, e.g. pressing
 * a secret keyboard shortcut, has taken place)
 */
function flashIndicator() {
	document.querySelector('.indicator').classList.add('👀');

	window.setTimeout(
		() => document.querySelector('.indicator').classList.remove('👀'),
		200,
	);
}

function onKeyDown(event) {
	if (document.activeElement !== document.body) return;

	switch (event.key) {
		case ' ':
		case 'ArrowDown':
		case 'ArrowRight':
		case 'j':
		case 'n':
		case 'PageDown':
			nextSlide(event.shiftKey);
			event.preventDefault();
			return;

		case 'ArrowLeft':
		case 'ArrowUp':
		case 'Backspace':
		case 'k':
		case 'p':
		case 'PageUp':
			prevSlide(event.shiftKey);
			event.preventDefault();
			return;

		case 'Home':
			currentSlideNumber = 0;
			showSlide();
			return;

		case 'End':
			currentSlideNumber = slideEls.length - 1;
			showSlide();
			return;

		case '+':
		case '=':
			skipLessImportantSlides = false;
			flashIndicator();
			event.preventDefault();
			return;

		case '-':
			skipLessImportantSlides = true;
			flashIndicator();
			event.preventDefault();
			return;
	}
}

/**
 * Main presentation entry (requested as DOM loads).
 */
function main() {
	slideEls = document.querySelectorAll('main > div');

	// Set up
	getSlideNumberFromUrlFragment();
	document.querySelector('main').classList.add('👀');
	showSlide(true, true);
	onSlideEnter(slideEls[currentSlideNumber], true);

	document.body.addEventListener('keydown', onKeyDown);
	document.body.focus();
}

main();
