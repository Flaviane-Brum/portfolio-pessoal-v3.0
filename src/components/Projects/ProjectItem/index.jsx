import * as S from "./styles";
import { FaEye } from "react-icons/fa";
import useMedia from "../../../hooks/useMedia";

export const ProjectItem = ({ project }) => {
  const mobile = useMedia("(max-width: 48rem)");

  return (
    <S.Card data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
      <S.LinkDetails to={`project/${project.id}`}>
        <img
          src={project.image}
          alt={project.title}
          width={1020}
          height={724}
        />
        <S.ProjectTitle>{project.title}</S.ProjectTitle>
        <S.ProjectDescription>{project.description}</S.ProjectDescription>
        <S.TechList>
          {project.techs.map((tech) => (
            <S.Tech key={tech}>{tech}</S.Tech>
          ))}
        </S.TechList>
        {mobile ? (
          <S.CallToAction>
            <FaEye size={20} />
            Clique para ver mais
          </S.CallToAction>
        ) : (
          ""
        )}
      </S.LinkDetails>
    </S.Card>
  );
};
