import * as S from "./styles";
import PerfilImg from "/eu.avif";
import { Container } from "../Container";
import { TypeWriter } from "../TypeWriter";
import { FaFileDownload } from "react-icons/fa";

export const Intro = () => {
	return (
		<S.Intro aria-label="Introdução" id="home">
			<Container>
				<S.IntroWrapper>
					<S.IntroContent>
						<S.IntroName id="intro-name" data-aos="fade-down">
							<S.IntroSpan>Olá, sou</S.IntroSpan>
							<S.Title>
								Flaviane Brum<span>.</span>
							</S.Title>
							<TypeWriter value="Desenvolvedora Front-End." />
						</S.IntroName>
						<S.IntroCv>
							<a
								href="https://drive.google.com/file/d/1BgJHhHQ6iZQO3VBJxNZGTT2ECA2nczwp/view"
								target="_blank"
								rel="noreferrer"
							>
								<FaFileDownload size={20} /> Download CV
							</a>
						</S.IntroCv>
					</S.IntroContent>
					<S.IntroImg>
						<img
							src={PerfilImg}
							alt="Foto de Flaviane"
							width={536}
							height={690}
						/>
					</S.IntroImg>
				</S.IntroWrapper>
			</Container>
		</S.Intro>
	);
};
