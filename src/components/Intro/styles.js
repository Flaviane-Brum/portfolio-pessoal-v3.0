import styled, { keyframes } from "styled-components";
import bottomLeft from "/dec/bottom-left.svg";

const moveUpDown = keyframes`
	0%,
	100% {
		top: 0vh;
	}
	50% {
		top: 1vh;
	}
`;

export const Intro = styled.section`
	background: var(--color-12) url(${bottomLeft}) no-repeat bottom 40px left 20px;

	@media (max-width: 50rem) {
		background: var(--color-12);
	}
`;

export const IntroWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 0 2.5rem;
	padding: 7.5rem 0;

	@media (max-width: 50rem) {
		grid-template-columns: 1fr;
		gap: 2rem;
		padding: 10rem 0 2.5rem;
	}
`;

export const IntroContent = styled.div`
	@media (max-width: 50rem) {
		text-align: center;
	}
`;

export const IntroSpan = styled.span`
	color: var(--color-5);
	font: var(--roboto-24);

	@media (max-width: 50rem) {
		margin-bottom: 0.25rem;
	}

	@media (max-width: 37.5rem) {
		font-size: 1rem;
	}
`;

export const IntroName = styled.div`
	color: var(--color-0);
	margin-bottom: 2rem;

	@media (max-width: 37.5rem) {
		margin-bottom: 1rem;
	}
`;

export const IntroCv = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex-wrap: wrap;

	a {
		font: var(--poppins-16);
		color: var(--color-5);
		font-weight: 600;
		letter-spacing: 0.015em;
		text-transform: uppercase;

		&:hover {
			color: var(--color-0);
		}

		svg {
			color: var(--color-p5);
			position: relative;
			top: 2px;

			@media (max-width: 37.5rem) {
				width: 18px;
			}
		}
	}

	@media (max-width: 50rem) {
		justify-content: center;
	}

	@media (max-width: 37.5rem) {
		gap: 1rem;
	}
`;

export const Title = styled.h1`
	color: var(--color-0);
	margin-bottom: 0.5rem;
	font: var(--poppins-64);

	span {
		color: var(--color-p5);
		font: var(--poppins-64);

		@media (max-width: 37.5rem) {
			font-size: 2.25rem;
		}
	}

	@media (max-width: 37.5rem) {
		font-size: 2.25rem;
		max-width: 20ch;
		margin: 0 auto;
		margin-bottom: 0.5rem;
	}
`;

export const IntroImg = styled.div`
	position: relative;
	max-width: 320px;
	justify-self: center;
	animation: ${moveUpDown} 4s linear infinite;

	img {
		object-fit: cover;
		filter: brightness(0.8);
		border-radius: 50%;
	}

	@media (max-width: 50rem) {
		grid-row: 1;
		margin: 0 auto;
		max-width: 300px;
	}

	@media (max-width: 37.5rem) {
		max-width: 200px;
		grid-row: 1;
		margin: 0 auto;
		align-self: self-end;
		border-radius: 4px;
	}
`;
