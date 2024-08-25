import styled, { keyframes } from "styled-components";

const slide = keyframes`
	0% {
		transform: translateX(-1000px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	animation: ${slide} 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

	p {
		font: var(--poppins-16);
		color: var(--color-0);
		margin-bottom: 1rem;
	}

	a {
		font: var(--poppins-18);
		color: var(--color-p5);
		&:hover {
			color: var(--color-p3);
		}
	}
`;

export const Title = styled.h1`
	color: var(--color-0);
	font: var(--poppins-64);
	margin-bottom: 0.5rem;

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
