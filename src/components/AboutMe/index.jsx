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
              height={600}
              width={600}
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
              Me chamo Flaviane, amo solucionar problemas através dos códigos.
              Estou em transição de carreira, atualmente estudando{" "}
              <strong>Análise e desenvolvimento de sistemas</strong>.
            </p>
            <p data-aos="fade-down" data-aos-delay="80">
              Busco uma oportunidade na área de desenvolvimento web com o
              objetivo de obter experiências e vivencias e aprimorar meu
              desenvolvimento profissional e pessoal.
            </p>
          </S.AboutContent>
        </S.AboutWrapper>
      </Container>
    </S.About>
  );
};
