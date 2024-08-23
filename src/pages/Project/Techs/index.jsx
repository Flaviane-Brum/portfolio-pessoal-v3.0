import * as S from "./styles";
import { FaTools } from "react-icons/fa";

export const Techs = ({ singleProject }) => {
	return (
		<>
			{/* <h4>
				<FaTools color="#9071e9" size={14} />
				Tecnologias
			</h4> */}
			<S.Techs>
				{singleProject.techs.map((tech) => (
					<li key={tech}>{tech}</li>
				))}
			</S.Techs>
		</>
	);
};
