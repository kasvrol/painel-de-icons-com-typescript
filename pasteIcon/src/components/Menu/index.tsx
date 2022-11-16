import "../../style/Menu.css";
import { MenuIconsProps } from "../../utils/interfaces";

const Menu: React.FC<MenuIconsProps> = ({ selectIcon }) => {
	return (
		<div className="menu">
			{Array.of("1048323", "1048329", "1048361").map((icon) => {
				return (
					<section
						className="icon"
						key={icon}
						onClick={() => selectIcon(icon)}
					>
						<img src={`../../public/${icon}.png`} />
					</section>
				);
			})}
		</div>
	);
};

export default Menu;
