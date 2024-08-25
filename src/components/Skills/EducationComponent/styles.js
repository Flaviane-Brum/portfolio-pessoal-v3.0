import styled from "styled-components";

export const Education = styled.div`
	display: flex;
	gap: 1.25rem;

	@media (max-width: 37.5rem) {
		flex-direction: column;
		max-width: 400px;
	}
`;

export const DecEducation = styled.img`
	position: absolute;
	right: -50px;

	@media (max-width: 50rem) {
		right: 10px;
		top: -20px;
		width: 80px; /* Ajuste do tamanho no modo responsivo */
	}
`;
