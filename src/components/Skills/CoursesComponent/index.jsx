import * as S from "./styles";
import dec2 from "/dec/decX.svg";
import { CoursesItem } from "./CoursesItem";
import { FaBookOpen } from "react-icons/fa";
import { dataCourses } from "../../helpers/data.js";
export const CoursesComponent = () => {
  return (
    <>
      <S.Dec2 src={dec2} alt="" />
      <h3>
        <FaBookOpen color="#a78afb" size={16} />
        Cursos / Especializações
      </h3>
      <S.Courses data-aos="fade-up">
        {dataCourses.map((course) => (
          <CoursesItem
            courseName={course.courseName}
            courseTime={course.courseTime}
            key={course.id}
          />
        ))}
      </S.Courses>
    </>
  );
};
