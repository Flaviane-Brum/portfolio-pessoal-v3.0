import styled from "styled-components";

export const Technologies = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	color: #fff;

	@media (max-width: 480px) {
		justify-content: center;
		gap: 12px;
	}
`;

export const DecY2 = styled.img`
	position: absolute;
	left: -50px;
	top: -20px;

	@media (max-width: 480px) {
		left: 10px;
		top: -10px;
		width: 80px; /* Ajuste do tamanho no modo responsivo */
	}
`;
