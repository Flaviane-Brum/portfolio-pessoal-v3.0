import styled from "styled-components";
import bottomRight from "/dec/bottom-right.svg";
import topRight from "/dec/top-right.svg";

export const Github = styled.article`
	background: url(${topRight}) no-repeat top 40px right 40px,
		url(${bottomRight}) no-repeat right 40px bottom 40px, var(--color-12);
	padding-top: 5rem;
	padding-bottom: 5rem;
	color: var(--color-5);

	h2 {
		color: var(--color-0);
		margin-bottom: 2rem;
		justify-self: flex-start;
	}

	@media (max-width: 64rem) {
		background: var(--color-12);
	}

	@media (max-width: 50rem) {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
`;

export const GithubWrapper = styled.div`
	display: grid;
	grid-template-columns: 350px 1fr;
	font: var(--poppins-12);
	color: var(--color-4);
	align-items: center;
	gap: 2.56rem;
	margin-bottom: 2rem;
	box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
	border-radius: 5px;

	@media (max-width: 61.938rem) {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}
`;

export const GithubContent = styled.div`
	margin-bottom: 1rem;
	text-align: center;
`;

export const GithubImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	img {
		height: 120px;
		width: 120px;
		border-radius: 50%;
	}

	h3 {
		font: var(--roboto-18);
		margin: 1rem 0;
		text-align: left;
	}

	@media (max-width: 61.938rem) {
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;

		h3 {
			font: var(--roboto-18);
			margin: 0 0 0.5rem 0;
		}
	}
`;

export const GithubImage = styled.img`
	border-radius: 50%;
	padding: 0.2rem;
	box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
	border: 1px solid var(--color-12);
`;

export const GithubInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	span {
		display: flex;
		align-items: center;
		gap: 4px;
		color: var(--color-6);
		font: var(--roboto-14);

		svg {
			color: var(--color-p5);
		}
	}

	p {
		font-size: 1rem;
		color: var(--color-3);
		max-width: 420px;
		font: var(--roboto-14);
	}
`;

export const GithubList = styled.ul`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`;

export const GithubListItem = styled.li`
	display: flex;
	align-items: center;
	gap: 4px;
	font-size: var(--roboto-14);
	margin-top: 0.75rem;

	svg {
		color: var(--color-p5);
	}
`;

export const GithubStatus = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	border: 1px solid var(--color-10);
	padding: 2rem;
	border-radius: 6px;

	@media (max-width: 61.938rem) {
		grid-template-columns: 1fr;
		gap: 1.25rem;
		border: 0;
		padding: 0;
	}
`;

export const GithubRepoList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;

	@media (max-width: 61.938rem) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 37.5rem) {
		grid-template-columns: 1fr;
	}
`;

export const GithubRepoListItem = styled.li`
	width: 100%;
	min-height: 150px;
	border-radius: 6px;
	background: var(--color-11);
	padding: 1rem;

	h3 {
		display: flex;
		gap: 0.5rem;
		color: var(--color-p5);
		align-items: center;
		font: var(--poppins-18);
		font-weight: 600;

		span {
			display: flex;
			flex: 1;
			justify-content: flex-end;
			align-items: flex-end;

			small {
				border-radius: 6px;
				padding: 0.3rem;
				font-size: 0.75rem;
				background: var(--color-12);
			}
		}
	}

	p {
		margin: 1rem 0;
		font: var(--roboto-14);
	}

	.wrapper {
		display: flex;
		gap: 0.5rem;
		align-items: center;

		.icons {
			display: flex;
			gap: 1rem;
			flex: 1;

			.circle {
				display: flex;
				gap: 0.2rem;
				align-items: center;

				svg {
					border-radius: 50%;
					padding: 1px;
					border: 1px solid var(--color-12);
				}
			}

			span {
				display: flex;
				align-items: center;
				gap: 4px;

				svg {
					color: var(--color-p5);
				}
			}
		}

		.links {
			display: flex;
			align-items: center;
			gap: 0.5rem;

			svg {
				color: var(--color-p5);
			}
		}
	}
`;

export const Pagination = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	gap: 1rem;

	.btn {
		padding: 0.5rem;
		background-color: var(--color-p5);
		border-radius: 5px;
		font: var(--poppins-12);
		font-weight: 600;
		color: var(--color-p10);
		border: 1px solid var(--color-10);

		&:hover {
			background-color: var(--color-9);
			border-color: var(--color-9);
			color: var(--color-2);
		}

		&:disabled {
			background-color: var(--color-p5);
			opacity: 0.5;
			cursor: not-allowed;
		}

		&:focus {
			background-color: var(--color-p6);
		}

		&:active {
			background-color: var(--color-p6);
			color: var(--color-p1);
		}
	}
`;
