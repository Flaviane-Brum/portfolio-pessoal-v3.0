import { useEffect } from "react";

const Head = ({ title, description }) => {
	useEffect(() => {
		document.title = `${title} | Portfólio`;

		const metaDescription = document.querySelector("meta[name='description']");
		if (metaDescription) {
			metaDescription.setAttribute("content", description || "");
		}
	}, [title, description]);

	return null;
};

export default Head;
