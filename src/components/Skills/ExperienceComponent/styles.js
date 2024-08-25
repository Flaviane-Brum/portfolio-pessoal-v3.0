import styled from "styled-components";

export const Experience = styled.div`
	display: flex;
	gap: 1.25rem;
	position: relative; /* Isso garante que a imagem decorativa seja posicionada corretamente em relação a este elemento */

	img {
		position: absolute;
		left: 0;
		bottom: -40px;

		@media (max-width: 37.5rem) {
			bottom: -20px;
			left: 10px;
			width: 80px; /* Ajuste do tamanho no modo responsivo */
		}
	}

	@media (max-width: 37.5rem) {
		flex-direction: column;
		max-width: 400px;
	}
`;
