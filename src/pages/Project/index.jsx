import * as S from "./styles";
import { Container } from "../../components/Container";
import { HeaderProject } from "./HeaderProject";
import { Loading } from "../../components/helpers/Loading";
import { ProjectInfo } from "./ProjectInfo";
import { OtherProjects } from "./OtherProjects";
import { Subtitle } from "../../components/Subtitle";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import useMedia from "../../hooks/useMedia";
import { useProject } from "../../hooks/useProject";
import { Suspense, useEffect, lazy } from "react";
import { useState } from "react";
import firebase from "../../services/firebase";
import { useLocation, useParams } from "react-router-dom";
import Head from "../../components/helpers/Head";
const ProjectSlide = lazy(() => import("./ProjectSlide"));

const Project = () => {
  const { projectList } = useProject();
  const tablet = useMedia("(max-width:61.938rem)");
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [singleProject, setSingleProject] = useState([]);
  const location = useLocation();
  const getSingleProject = async (id) => {
    setLoading(true);
    try {
      const docRef = await firebase
        .firestore()
        .collection("projetos")
        .doc(id)
        .get();

      if (docRef.exists) {
        setLoading(true);

        const data = docRef.data();
        setSingleProject(data);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getSingleProject(id);
  }, [id, location]);
  const links = projectList.filter((link) => {
    return link.id !== id;
  });

  return (
    <S.ProjectContainer id="top">
      <HeaderProject />
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <S.Project>
            {singleProject.length !== 0 && (
              <Suspense fallback={<div></div>}>
                <Head
                  title={singleProject.title}
                  description={singleProject.description}
                />
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
            )}
          </S.Project>
        )}
      </Container>
    </S.ProjectContainer>
  );
};

export default Project;
