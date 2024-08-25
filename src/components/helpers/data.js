import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import {
	FaUserAlt,
	FaFolderOpen,
	FaGraduationCap,
	FaHome,
	FaGithub
} from "react-icons/fa";
import {
	SiJavascript,
	SiHtml5,
	SiReact,
	SiCss3,
	SiGit,
	SiSass,
	SiBootstrap,
	SiGithub,
	SiVuedotjs,
	SiTailwindcss
} from "react-icons/si";

// Icon Data
export const dataIcons = [
	{ id: 0, icon: IoLogoJavascript, name: "iconJs" },
	{ id: 1, icon: IoLogoCss3, name: "iconCss" },
	{ id: 2, icon: IoLogoHtml5, name: "iconHTML" },
];

// Navigation Links Data
export const liValues = [
	{ id: 0, text: "Home", icon: FaHome, idLink: "home" },
	{ id: 1, text: "Quem sou", icon: FaUserAlt, idLink: "quem-sou" },
	{ id: 2, text: "Projetos", icon: FaFolderOpen, idLink: "projetos" },
	{ id: 3, text: "Formação", icon: FaGraduationCap, idLink: "formacao" },
	{ id: 4, text: "Github", icon: FaGithub, idLink: "github" },
];

// Course Data
export const dataCourses = [
	{ id: 0, courseName: "Web Design Completo", courseTime: "44H" },
	{ id: 1, courseName: "CSS com SASS", courseTime: "12H" },
	{ id: 2, courseName: "React Completo", courseTime: "36H" },
	{ id: 3, courseName: "Frontend Do Zero ao Profissional", courseTime: "36H" },
	{ id: 4, courseName: "HTML e CSS para Iniciantes completo", courseTime: "23H" },
	{ id: 5, courseName: "JavaScript Completo ES6+", courseTime: "74H" },
	{ id: 6, courseName: "Automação Front End com NPM", courseTime: "8H" },
];

// Technologies Data
export const dataTechs = [
	{ id: 0, icon: SiHtml5, techName: "HTML5" },
	{ id: 1, icon: SiCss3, techName: "CSS3" },
	{ id: 2, icon: SiSass, techName: "Sass" },
	{ id: 3, icon: SiBootstrap, techName: "Bootstrap" },
	{ id: 4, icon: SiTailwindcss, techName: "Tailwind" },
	{ id: 5, icon: SiJavascript, techName: "Javascript" },
	{ id: 6, icon: SiReact, techName: "ReactJs" },
	{ id: 7, icon: SiVuedotjs, techName: "VueJs" },
	{ id: 8, icon: SiGit, techName: "Git" },
	{ id: 9, icon: SiGithub, techName: "Github" },
];

// Language Colors for GitHub Repos
export const arrayLanguage = [
	{ id: 0, lang: "JavaScript", bg: "#f1e05a" },
	{ id: 1, lang: "PHP", bg: "#4F5D95" },
	{ id: 2, lang: "TypeScript", bg: "#3178c6" },
	{ id: 3, lang: "CSS", bg: "#563d7c" },
	{ id: 4, lang: "HTML", bg: "#e34c26" },
	{ id: 5, lang: "SCSS", bg: "#c6538c" },
];
