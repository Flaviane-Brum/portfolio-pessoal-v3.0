import * as S from "./styles";
import dec1 from "/dec/decY2.svg";
import { TechnologieItem } from "./TechnologieItem";
import { FaCode } from "react-icons/fa";
import { dataTechs } from "../../helpers/data";
export const TechnologiesComponent = () => {
  return (
    <>
      <S.DecY2 src={dec1} alt="" />

      <h3>
        <FaCode color="#a78afb" size={20} />
        Habilidades
      </h3>
      <S.Technologies data-aos="flip-right">
        {dataTechs.map((tech) => (
          <TechnologieItem
            icon={<tech.icon color="#9071e9" size={60} />}
            techName={tech.techName}
            key={tech.id}
          />
        ))}
      </S.Technologies>
    </>
  );
};
