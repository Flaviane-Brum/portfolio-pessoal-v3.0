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
              <TypeWriter value="Dev Front End e Estudante de ADS" />
            </S.IntroName>
            <S.IntroCv>
              <a
                href="https://drive.google.com/file/d/19zjme-wsURH2u3Gqw4xlgWv0nHPjE58H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileDownload size={20} weight="fill" /> Download CV
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
