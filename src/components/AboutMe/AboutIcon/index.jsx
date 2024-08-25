import * as S from "./styles";
export const AboutIcon = ({ Icon, name }) => {
	return (
		<S.Icons className={name}>
			<Icon />
		</S.Icons>
	);
};
