import { useEffect, useState } from "react";
import { AboutMe } from "../../components/AboutMe";
import { Intro } from "../../components/Intro";
import { Projects } from "../../components/Projects";
import { Header } from "../../components/Header";
import { Skills } from "../../components/Skills";
import { Github } from "../../components/Github";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Footer } from "../../components/Footer";
import Head from "../../components/helpers/Head";
const Home = () => {

	useEffect(() => {
		AOS.init({
			duration: 1500,
			once: true,
		});
	}, []);

	return (
		<>
			<Header />
			<main>
				<Head
					title="Home"
					description="Olá me chamo Flaviane Brum, sou  estudante de programação, em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
				/>
				<Intro />
				<AboutMe />
				<Projects />
				<Skills />
				<Github />

			</main>
			<Footer />
		</>
	);
};
export default Home;
