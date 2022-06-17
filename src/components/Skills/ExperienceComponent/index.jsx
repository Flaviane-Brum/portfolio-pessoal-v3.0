import * as S from "./styles";
import dec3 from "/dec/decX3.svg";
import { FaBriefcase } from "react-icons/fa";

export const ExperienceComponent = () => {
  return (
    <S.Experience>
      <img src={dec3} alt="" />
      <h3>
        <FaBriefcase color="#a78afb" size={16} />
        Experiência
      </h3>
      <p data-aos="fade-down">
        Estou sempre em busca de melhores práticas e também em busca de
        aprender/experimentar novas tecnologias. Minhas experiências atuais são
        os projetos pessoais que fiz, e os que ainda estou desenvolvendo. Eles
        podem ser encontrados no meu{" "}
        <a
          href="https://github.com/Flaviane-Brum?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </S.Experience>
  );
};
