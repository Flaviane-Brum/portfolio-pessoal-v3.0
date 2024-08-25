import styled from "styled-components";

export const Features = styled.ul`
	background-color: var(--color-11);
	box-shadow: 0 4px 16px 4px rgb(0 0 0 / 30%);
	border-radius: 4px;
	padding: 1rem;

	li {
		background-color: var(--color-12);
		font: var(--roboto-16);
		font-size: 0.875rem;
		font-weight: 500;
		padding: 0.625rem 1rem;
		border-radius: 4px;
		box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
		border-bottom: 2px solid var(--color-11);
		position: relative;
		overflow: hidden;
		color: var(--color-5);
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:last-of-type {
			border-bottom: 0;
		}

		@media (max-width: 30rem) {
			svg {
				display: none;
			}
		}
	}
`;
