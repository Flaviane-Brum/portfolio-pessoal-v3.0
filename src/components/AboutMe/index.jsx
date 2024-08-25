import * as S from "./styles";
import FlaviGif from "/flavi.gif";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { dataIcons } from "../helpers/data";
import { AboutIcon } from "./AboutIcon";

export const AboutMe = () => {
	return (
		<S.About id="quem-sou">
			<Container>
				<S.AboutWrapper>
					<S.AboutImg>
						<S.Gif
							src={FlaviGif}
							alt="Gif de uma menina pensando"
						/>
						{dataIcons.map((icon) => (
							<AboutIcon
								key={icon.id}
								Icon={icon.icon}
								alt={icon.alt}
								name={icon.name}
							/>
						))}
					</S.AboutImg>
					<S.AboutContent>
						<Subtitle data-aos="fade-down">Quem sou</Subtitle>
						<p data-aos="fade-down">
							Olá! Sou formada em Análise e Desenvolvimento de Sistemas e trabalho como Programadora Web na WebGlobal. Tenho paixão pelo desenvolvimento web e sempre busco aprender novas tecnologias para aprimorar minhas habilidades.
						</p>
						<p data-aos="fade-down" data-aos-delay="80">
							Tenho conhecimento em <strong>JavaScript</strong>, <strong>ReactJS</strong>, <strong>VueJS</strong>, <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong> e <strong>WordPress</strong>, com experiência na criação de blogs institucionais.
						</p>
						<p data-aos="fade-down" data-aos-delay="100">
							Nas horas livres, foco em estudar novas linguagens de programação e tecnologias avançadas, mantendo-me atualizada com as tendências da área.
						</p>
						<p data-aos="fade-down" data-aos-delay="120">
							Estou sempre em busca de aprender e dominar novas tecnologias, o que me mantém motivada e em constante evolução no desenvolvimento web.
						</p>
					</S.AboutContent>
				</S.AboutWrapper>
			</Container>
		</S.About>
	);
};
