import * as S from "./styles";
import { liValues } from "../helpers/data";
import { useState } from "react";

export const Nav = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <S.Nav>
      <S.Menu>
        {liValues.map((value) => (
          <li key={value.id}>
            <S.Anchor
              activeClass="active"
              to={value.idLink}
              smooth={true}
              offset={-85}
              duration={500}
              className={activeId === value.id ? "active" : undefined}
              onClick={() => setActiveId(value.id)}
            >
              {value.text}
            </S.Anchor>
          </li>
        ))}
      </S.Menu>
    </S.Nav>
  );
};
