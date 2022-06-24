import * as S from "./styles";
import { Link } from "react-router-dom";
export const OtherProjects = ({ links }) => {
  return (
    <S.OtherProjects>
      <h3>Outros projetos</h3>
      <S.NavigationProject>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={`project/${link.id}`}>{link.title}</Link>
            </li>
          ))}
          <li>
            <Link to="/">Voltar para Home</Link>
          </li>
        </ul>
      </S.NavigationProject>
    </S.OtherProjects>
  );
};
