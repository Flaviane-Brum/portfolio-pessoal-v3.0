import styled from "styled-components";

export const CoursesItem = styled.li`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	padding: 0.5rem 0;
	border-bottom: 1px solid var(--color-11);
	font: var(--roboto-16);
	color: var(--color-4);

	&:last-child {
		border: 0;
	}

	span {
		color: var(--color-6);
		text-align: right;
		flex: 1;
	}

	@media (max-width: 20rem) {
		font: var(--roboto-14);
	}
`;
