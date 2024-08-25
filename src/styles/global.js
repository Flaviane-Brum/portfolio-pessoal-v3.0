import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	/* Resetting default styles */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	*::after,
	*::before {
		box-sizing: border-box;
	}

	/* Scrollbar Styling */
	::-webkit-scrollbar {
		width: 1rem;
	}

	::-webkit-scrollbar-track {
		margin: 1em 0;
		border-radius: 1em;
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 1.5rem;
		border: 0.375rem solid transparent;
		background-color: #9071e9;
		background-clip: padding-box;
		-webkit-transition: background-color 0.16s ease;
		transition: background-color 0.16s ease;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #6961d7;
	}

	/* Color and Font Variables */
	:root {
		--color-0: #ffffff;
		--color-1: #f7f7f7;
		--color-2: #ededed;
		--color-3: #dedede;
		--color-4: #cccccc;
		--color-5: #b2b2b2;
		--color-6: #9c9c9c;
		--color-7: #717171;
		--color-8: #595959;
		--color-9: #404040;
		--color-10: #2e2e2e;
		--color-11: #111111;
		--color-12: #000000;

		--color-p1: #f2e1ff;
		--color-p2: #ddc8ff;
		--color-p3: #c3aeff;
		--color-p4: #a78afb;
		--color-p5: #9071e9;
		--color-p6: #6961d7;
		--color-p7: #554dbe;
		--color-p8: #393199;
		--color-p9: #251f72;
		--color-p10: #140f4b;
		--color-p11: #09062c;
		--gradient: linear-gradient(180deg, var(--color-p3) 0%, var(--color-p5) 100%);

		/* Desktop Font sizes */
		--poppins-12: 400 0.75rem/1.35 "Poppins", sans-serif;
		--poppins-16: 400 1rem/1.5 "Poppins", sans-serif;
		--poppins-18: 400 1.125rem/1.35 "Poppins", sans-serif;
		--poppins-24: 400 1.5rem/1.5 "Poppins", sans-serif;
		--poppins-32: 600 2rem/1.25 "Poppins", sans-serif;
		--poppins-48: 600 3rem/1.5 "Poppins", sans-serif;
		--poppins-64: 600 4rem/1.125 "Poppins", sans-serif;

		--roboto-14: 400 0.875rem/1.43 "Roboto", sans-serif;
		--roboto-16: 400 1rem/1.5 "Roboto", sans-serif;
		--roboto-18: 400 1.125rem/1.35 "Roboto", sans-serif;
		--roboto-24: 400 1.5rem/1.5 "Roboto", sans-serif;
		--roboto-32: 500 2rem/1.25 "Roboto", sans-serif;
	}

	body {
		font-family: "Roboto", sans-serif;
		-webkit-font-smoothing: antialiased;
		background-color: var(--color-12);
	}

	/* Responsive Font Sizes */
	@media (max-width: 1080px) {
		html {
			font-size: 93.75%;
		}
	}

	@media (max-width: 720px) {
		html {
			font-size: 87.5%;
		}
	}

	button, a {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
		display: block;
	}

	h1, h2, h3, h4, ul, p {
		margin: 0;
	}

	/* Splide styles */
	.splide {
		padding: 2.5em;
		background-color: var(--color-12);
		width: 100%;
		max-width: 600px;
		border-radius: 4px;
		margin-bottom: 2.5rem;

		@media (max-width: 61.938rem) {
			margin-bottom: 1rem;
		}
	}

	.splide__arrow:hover:not(:disabled) svg {
		fill: var(--color-p3);
	}

	.splide__arrow svg {
		fill: var(--color-p5);
		height: 2.5em;
		transition: fill 0.2s linear;
		width: 2.5em;
	}

	.splide__pagination__page.is-active {
		background: var(--color-p7);
	}

	.splide__pagination__page:hover {
		background: var(--color-p9);
	}

	.splide__arrow--next {
		right: 0em;
	}

	.splide__arrow--prev {
		left: 0em;
	}

	.splide__slide img {
		border-radius: 4px;
	}

	@media (max-width: 50rem) {
		.splide__arrow svg {
			padding: 0.5em;
		}
	}
`;
