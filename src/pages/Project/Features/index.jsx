import * as S from "./styles";
import { FaCheck } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export const Features = ({ singleProject }) => {
	return (
		<>
			{/* <h4>
				<HiSparkles color="#9071e9" size={18} />
				Funcionalidades
			</h4> */}
			<S.Features>
				{singleProject.features.map((feature) => (
					<li key={feature}>
						{feature} <FaCheck color="#9071e9" />
					</li>
				))}
			</S.Features>
		</>
	);
};
