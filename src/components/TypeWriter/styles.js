import styled, { keyframes } from "styled-components";

const blinkTextCursor = keyframes`
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
`;

export const TextCursor = styled.span`
	border-right: 1px solid var(--color-p5);
	margin-left: 0.5rem;
	animation: ${blinkTextCursor} 1s infinite;
`;

export const Container = styled.p`
	display: inline-block;
	margin: 0;
	color: var(--color-5);
	font: var(--roboto-24);

	@media (max-width: 50rem) {
		margin-bottom: 0.25rem;
	}

	@media (max-width: 37.5rem) {
		font-size: 1rem;
	}
`;
