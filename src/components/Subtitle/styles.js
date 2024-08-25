import styled from "styled-components";

export const Subtitle = styled.h2`
	font: var(--poppins-64);
	color: var(--color-0);

	span {
		color: var(--color-p5);
	}

	@media (max-width: 64rem) {
		font: var(--poppins-48);
	}

	@media (max-width: 37.5rem) {
		font-size: 2.25rem;
	}
`;
