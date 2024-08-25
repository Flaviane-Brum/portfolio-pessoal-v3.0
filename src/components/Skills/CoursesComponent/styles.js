import styled from "styled-components";

export const Courses = styled.ul`
	max-width: 467px;
	background-color: var(--color-12);
	padding: 1.25rem;
	border-radius: 4px;

	@media (max-width: 50rem) {
		max-width: 100%;
	}
`;

export const Dec2 = styled.img`
	position: absolute;
	right: 0;
	top: -60px;

	@media (max-width: 50rem) {
		top: -40px;
		right: 10px;
		width: 80px; /* Ajusta o tamanho da imagem no modo responsivo */
	}
`;
