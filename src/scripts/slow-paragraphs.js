class SlowParagraphs extends HTMLElement {
	static register() {
		if ('customElements' in window) {
			customElements.define('slow-paragraphs', SlowParagraphs);
		}
	}

	static classes = {
		root: 'sp',
		wrapper: 'sp__wrapper',
		p: 'sp__p',
	};

	static #css = `
		.${SlowParagraphs.classes.root} {
			block-size: 100dvb;
			container: --sp-root / size;
			display: block;
			overflow-block: scroll;
			overflow-y: scroll;
			scroll-snap-type: block mandatory;
		}
		.${SlowParagraphs.classes.wrapper} {
			align-items: center;
			display: grid;
			inline-size: 100%;
			justify-content: stretch;
			min-block-size: 100cqb;
			padding-block: 1em 2em;
			scroll-snap-align: start;
		}
		.${SlowParagraphs.classes.p} {
		}
	`;

	get supports() {
		return 'replaceSync' in CSSStyleSheet.prototype;
	}

	constructor() {
		super();

		if (!this.supports) return;

		const sheet = new CSSStyleSheet();
		console.log('sheet', sheet);
		sheet.replaceSync(SlowParagraphs.#css);
		console.log('sheet', sheet);
		document.adoptedStyleSheets.push(sheet);

		// this.headingStyles = {};
		// this.instanceIndex = globalInstanceIndex++;
	}

	connectedCallback() {
		if (!this.supports) return;

		this.classList.add(SlowParagraphs.classes.root);

		const children = this.eligibleChildren;
		for (const child of children) {
			const wrapper = document.createElement('div');
			wrapper.classList.add(SlowParagraphs.classes.wrapper);
			wrapper.appendChild(child);

			this.appendChild(wrapper);
		}
	}

	get eligibleChildren() {
		return this.querySelectorAll([
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'p',
			'pre',
		]);
	}
}

SlowParagraphs.register();

export { SlowParagraphs };
