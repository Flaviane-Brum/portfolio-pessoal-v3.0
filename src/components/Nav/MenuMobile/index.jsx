import * as S from "./styles";
import { useState } from "react";
import { liValues } from "../../helpers/data";
import { Link } from "react-scroll";

export const MenuMobile = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <S.Navigation>
      <ul>
        {liValues.map((value) => (
          <S.NavigationItem
            onClick={() => setActiveId(value.id)}
            className={activeId === value.id ? "active" : undefined}
            key={value.id}
          >
            <Link to={value.idLink}>
              <S.Icon>{<value.icon />}</S.Icon>
              <S.Text>{value.text}</S.Text>
            </Link>
          </S.NavigationItem>
        ))}
        <S.Indicater></S.Indicater>
      </ul>
    </S.Navigation>
  );
};
