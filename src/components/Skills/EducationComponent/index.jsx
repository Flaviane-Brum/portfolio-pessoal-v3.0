import * as S from "./styles";
import dec1 from "/dec/decY.svg";
import { EducationItem } from "./EducationItem";
import { FaUserGraduate } from "react-icons/fa";

export const EducationComponent = () => {
	return (
		<>
			<S.DecEducation src={dec1} alt="" />
			<h3>
				<FaUserGraduate color="#a78afb" size={16} />
				Educação
			</h3>
			<S.Education data-aos="flip-left">
				<EducationItem
					courseType="Tecnólogo"
					institution="FAQI (Concluído)"
					courseName="Análise e desenvolvimento de sistemas"
				/>
				<EducationItem
					courseType="Técnico"
					courseName="Curso técnico informática para internet"
					institution="Colégio Protásio Alves"
				/>
			</S.Education>
		</>
	);
};
