import styled, { keyframes } from "styled-components";

const animateHover = keyframes`
	0%,
	100% {
		transform: translate3d(0, 0, 0);
	}
	50% {
		transform: translate3d(0, -100%, 0);
	}
	51% {
		transform: translate3d(0, 100%, 0);
	}
`;

export const Techs = styled.ul`
	background-color: var(--color-12);
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	box-shadow: 0 4px 16px 4px rgb(0 0 0 / 30%);
	border-radius: 4px;
	padding: 1rem;
	margin-bottom: 2.5rem;

	@media (max-width: 30rem) {
		grid-template-columns: 1fr;
	}

	li {
		font: var(--roboto-16);
		font-size: 0.875rem;
		font-weight: 500;
		padding: 0.625rem 1rem;
		border-radius: 4px;
		box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
		background-color: var(--color-11);
		border: 2px solid var(--color-12);
		position: relative;
		overflow: hidden;
		color: var(--color-5);
		display: flex;
		align-items: center;

		&::before {
			content: "";
			display: block;
			background: var(--gradient);
			width: 3px;
			position: absolute;
			height: 2.3rem;
			left: 3px;
			z-index: 2;
			border-radius: 4px;
		}

		&:hover::before {
			animation: ${animateHover} 0.5s forwards;
		}
	}
`;
