import styled from "styled-components";

export const OtherProjects = styled.div`
	background-color: var(--color-12);
	color: var(--color-0);
	padding: 1rem;
	border-radius: 5px;

	@media (max-width: 61.938rem) {
		margin-bottom: 1rem;
	}
`;

export const NavigationProject = styled.nav`
	background: var(--color-11);
	border-radius: 4px;
	overflow: hidden;

	ul {
		@media (max-width: 61.938rem) {
			display: flex;
			flex-direction: column;
		}

		li {
			&:hover {
				background: var(--color-p5);
			}

			&:last-child a::after {
				background-color: transparent;
			}

			a {
				font: var(--poppins-18);
				padding: 0.9375rem 0.625rem 0rem 0.625rem;
				display: block;
				color: #ffffff;

				&:hover {
					color: #0e1013;
				}

				&::before {
					content: "";
					display: inline-block;
					width: 10px;
					height: 10px;
					background-image: var(--gradient);
					border-radius: 50%;
					border: 2px solid var(--color-12);
					margin-right: 6px;
				}

				&::after {
					content: "";
					width: 100%;
					height: 2px;
					background: var(--color-12);
					display: block;
					margin-top: 0.9375rem;
				}

				&:hover::after {
					background: var(--color-p5);
				}
			}
		}
	}
`;
