import * as S from "./styles";
import { FaCheck } from "react-icons/fa";

export const Features = ({ singleProject }) => {
	return (
		<S.Features>
			{singleProject.features.map((feature) => (
				<li key={feature}>
					{feature} <FaCheck color="#9071e9" />
				</li>
			))}
		</S.Features>
	);
};
