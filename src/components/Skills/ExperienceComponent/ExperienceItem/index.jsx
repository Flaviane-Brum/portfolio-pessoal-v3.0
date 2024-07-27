import * as S from "./styles";
export const ExperienceItem = ({ ExperienceCompany, ExperienceOffice, ExperienceYear }) => {
	return (
		<S.ExperienceItem>
			<span>{ExperienceCompany}</span>
			<h4>{ExperienceOffice}</h4>
			<span>{ExperienceYear}</span>
		</S.ExperienceItem>
	);
};
