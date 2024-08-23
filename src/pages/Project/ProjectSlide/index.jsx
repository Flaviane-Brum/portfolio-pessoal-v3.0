import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";

const ProjectSlide = ({ singleProject }) => {
	return (
		<>

			<Splide aria-label="Meus projetos">
				{singleProject.slide.map((img) => (
					<SplideSlide key={img}>
						<img
							src={img}
							alt={`Imagem do projeto ${singleProject.title}`}
							width={1024}
							height={663}
						/>
					</SplideSlide>
				))}
			</Splide>
		</>
	);
};
export default ProjectSlide;
