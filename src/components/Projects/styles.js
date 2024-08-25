import styled from "styled-components";
import topRight from "/dec/top-right.svg";

export const Projects = styled.article`
	background: url(${topRight}) no-repeat top 40px right 40px, var(--color-10);
	padding-top: 5rem;
	padding-bottom: 5rem;

	@media (max-width: 50rem) {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
		background: var(--color-10);
	}

	h2 {
		color: var(--color-0);
		margin-bottom: 2rem;
		justify-self: flex-start;
	}
`;

export const Project = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	height: 100%;
	gap: 1.5rem;

	@media (max-width: 50rem) {
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
	}

	@media (max-width: 30rem) {
		grid-template-columns: 1fr;
	}
`;
