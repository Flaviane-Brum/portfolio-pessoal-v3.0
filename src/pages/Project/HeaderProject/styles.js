import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderProject = styled.header`
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(24px);
	-webkit-backdrop-filter: blur(24px);
	box-shadow: 0 1px 1px var(--color-11);
	position: fixed;
	width: 100%;
	z-index: 99;
	top: 0;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: 1.25rem;
	padding: 1rem 0;
	justify-content: center;
`;

export const HeaderLogo = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--color-5);

	svg {
		color: var(--color-p5);
		font-size: 2rem;
	}
`;
