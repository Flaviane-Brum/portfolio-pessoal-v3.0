import * as S from "./styles";
import { Container } from "../Container";
import { Link } from "react-router-dom";
export const NotFound = ({ text }) => {
	return (
		<S.MainContainer>
			<Container>
				<S.Title>
					Error: 404<span>.</span>
				</S.Title>
				<p>{text}</p>
				<Link to="/">Voltar para Home</Link>
			</Container>
		</S.MainContainer>
	);
};
