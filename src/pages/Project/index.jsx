import * as S from "./styles";
import { Container } from "../../components/Container";
import { Loading } from "../../components/helpers/Loading";
import { HeaderProject } from "./HeaderProject";
import { ProjectInfo } from "./ProjectInfo";
import { OtherProjects } from "./OtherProjects";
import { Subtitle } from "../../components/Subtitle";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import useMedia from "../../hooks/useMedia";
import { useProject } from "../../hooks/useProject";
import { Suspense, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import Head from "../../components/helpers/Head";
const ProjectSlide = lazy(() => import("./ProjectSlide"));
import { NotFound } from "../../components/NotFound";

const Project = () => {
	const { projectList, getSingleProject, singleProject, loading } = useProject();
	const tablet = useMedia("(max-width:61.938rem)");
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			getSingleProject(id);
			window.scrollTo(0, 0);
		}
	}, [id], getSingleProject);

	const links = projectList.filter((link) => link.id !== id);

	return (
		<S.ProjectContainer id="top">
			<HeaderProject />
			<Container>
				{loading ? (
					<Loading />
				) : (
					<S.Project>
						{singleProject ? (
							<Suspense fallback={<Loading />}>
								<Head title={singleProject.title} description={singleProject.description} />
								<S.ProjectSpan>Projeto</S.ProjectSpan>
								<Subtitle>{singleProject.title}</Subtitle>
								<S.GridContainer>
									{tablet ? (
										<S.ProjectWrapper>
											<ProjectSlide singleProject={singleProject} />
											<ProjectInfo singleProject={singleProject} />
											<OtherProjects links={links} />
											<S.Up
												to="top"
												smooth={true}
												aria-label="Ir para o topo da página"
											>
												<BsFillArrowUpSquareFill color="#9071e9" size={30} />
											</S.Up>
										</S.ProjectWrapper>
									) : (
										<>
											<S.ProjectWrapper>
												<ProjectSlide singleProject={singleProject} />
												<OtherProjects links={links} />
											</S.ProjectWrapper>
											<ProjectInfo singleProject={singleProject} />
										</>
									)}
								</S.GridContainer>
							</Suspense>
						) : (
							<NotFound text="Projeto não encontrado" />
						)}
					</S.Project>
				)}
			</Container>
		</S.ProjectContainer>
	);
};

export default Project;
