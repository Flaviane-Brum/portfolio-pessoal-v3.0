import * as S from "./styles";

export const Loading = () => {
	return (
		<S.LoaderContainer>
			<S.LoaderWrapper>
				<S.Loader>
					<S.LoaderInner></S.LoaderInner>
				</S.Loader>
			</S.LoaderWrapper>
		</S.LoaderContainer>
	);
};
