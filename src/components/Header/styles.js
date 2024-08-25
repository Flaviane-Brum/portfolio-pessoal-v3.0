import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(24px);
	-webkit-backdrop-filter: blur(24px);
	box-shadow: 0 1px 1px var(--color-11);
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 99;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1.25rem;
	padding-top: 1.25rem;
	padding-bottom: 1.25rem;

	nav {
		position: relative;
		display: flex;
		align-items: center;
	}

	@media (max-width: 50rem) {
		justify-content: center;
		flex-direction: column;
	}

	@media (max-width: 30rem) {
		gap: 0.188rem;
	}
`;

export const HeaderLogo = styled(Link)`
	img {
		height: 28px;
	}

	@media (max-width: 30rem) {
		display: none;
	}
`;
