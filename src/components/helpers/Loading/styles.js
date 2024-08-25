import styled, { keyframes } from "styled-components";

const rotate = keyframes`
	0% {
		transform: scale(1) rotate(360deg);
	}
	50% {
		transform: scale(0.8) rotate(-360deg);
	}
	100% {
		transform: scale(1) rotate(360deg);
	}
`;

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export const LoaderWrapper = styled.div`
	height: 100px;
	width: 100px;

	@media (max-width: 50rem) {
		height: 60px;
		width: 60px;
	}
`;

export const Loader = styled.div`
	height: 100%;
	width: 100%;
	border: 4px solid var(--color-12);
	border-top-color: var(--color-p5);
	border-bottom-color: var(--color-0);
	animation: ${rotate} 5s linear infinite;
	border-radius: 50%;
`;

export const LoaderInner = styled(Loader)`
	border-top-color: var(--color-p3);
	border-bottom-color: var(--color-p7);
	animation-duration: 2.5s;
`;
