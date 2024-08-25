import * as S from "./styles";
import Logo from "/logo.svg";
import { Container } from "../Container";
import { FaGithubSquare, FaLinkedin, FaHeart } from "react-icons/fa";

export const Footer = () => {
	return (
		<S.Footer>
			<Container>
				<S.FooterGrid>
					<img src={Logo} width={141} height={33} alt="Logo do meu site" />

					<S.FooterContact>
						<h3>Contato</h3>
						<S.ContactList>
							<li>
								<a href="tel:+5551983577853">(51) 99254-2853</a>
							</li>
							<li>
								<a href="mailto:flavianebs3@gmail.com">flavianebs3@gmail.com</a>
							</li>
							<li>Porto Alegre</li>
							<li>Rio Grande do Sul - RS</li>
						</S.ContactList>
					</S.FooterContact>

					<S.FooterSocial>
						<h3>Redes sociais</h3>
						<S.SocialList>
							<a
								aria-label="Link para o meu Github"
								href="https://github.com/Flaviane-Brum?tab=repositories"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithubSquare color="#9071e9" size={40} />
							</a>
							<a
								href="https://www.linkedin.com/in/flaviane-brum/"
								target="_blank"
								aria-label="Link para o meu Linkedin"
								rel="noreferrer"
							>
								<FaLinkedin color="#9071e9" size={40} />
							</a>
						</S.SocialList>
					</S.FooterSocial>

					<p>
						Criado com <FaHeart size={16} color="#9071e9" /> por Flaviane <span>Brum</span>
					</p>
				</S.FooterGrid>
			</Container>
		</S.Footer>
	);
};
