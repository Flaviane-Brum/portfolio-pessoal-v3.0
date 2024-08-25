import * as S from "./styles";
import decX from "/dec/decX.svg";
import { FaBriefcase } from "react-icons/fa";
import { ExperienceItem } from "./ExperienceItem";

export const ExperienceComponent = () => {
	return (
		<>
			<h3>
				<FaBriefcase color="#a78afb" size={16} />
				Experiência
			</h3>

			<S.Experience data-aos="flip-left">
				<img src={decX} alt="" />
				<ExperienceItem
					ExperienceCompany="IBCMED"
					ExperienceOffice="Função: Programadora Front-end Júnior"
					ExperienceYear="2023 - 2024 1 ano 8 meses"
				/>
				<ExperienceItem
					ExperienceCompany="WEBGLOBAL"
					ExperienceOffice="Função: Desenvolvedora web Júnior"
					ExperienceYear="2024 - Atual 4 meses"
				/>
			</S.Experience>
		</>
	);
};
