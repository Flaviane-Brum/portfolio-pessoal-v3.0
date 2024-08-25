import * as S from "./styles";
import { useState } from "react";
import { liValues } from "../../helpers/data";

export const MenuMobile = () => {
	const [activeId, setActiveId] = useState(0);

	return (
		<S.Navigation>
			<ul>
				{liValues.map((value) => (
					<S.NavigationItem
						key={value.id}
						className={activeId === value.id ? "active" : undefined}
					>
						<S.Anchor
							onClick={() => setActiveId(value.id)}
							className={activeId === value.id ? "active" : undefined}
							to={value.idLink}
							activeClass="active"
							smooth={true}
							offset={-133}
							duration={500}
						>
							<S.Icon>{<value.icon />}</S.Icon>
							<S.Text>{value.text}</S.Text>
						</S.Anchor>
					</S.NavigationItem>
				))}
				<S.Indicater />
			</ul>
		</S.Navigation>
	);
};
