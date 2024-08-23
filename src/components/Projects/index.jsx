import * as S from "./styles";
import { Container } from "../Container";
import { Subtitle } from "../Subtitle";
import { ProjectItem } from "./ProjectItem";
import { useProject } from "../../hooks/useProject";

export const Projects = () => {
	const { projectList } = useProject();

	return (
		<S.Projects id="projetos">
			<Container>
				<Subtitle>Projetos</Subtitle>

				<S.Project>
					{projectList &&
						projectList.map((project) => (
							<ProjectItem project={project} key={project.id} />
						))}
				</S.Project>
			</Container>
		</S.Projects>
	);
};
