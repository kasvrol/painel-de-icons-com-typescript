import "../../styles/Menu.css";
import { MenuIconsProps } from "../../utils/interfaces";
import image01 from "../../images/1048361.png";
import image02 from "../../images/1048329.png";
import image03 from "../../images/1048361.png";

const Menu: React.FC<MenuIconsProps> = ({ selectIcon }) => {
	return (
		<div className="menu">
			{Array.of(image01, image02, image03).map((icon) => {
				return (
					<section
						className="icon"
						key={icon}
						onClick={() => selectIcon(icon)}
					>
						<img src={icon} />
					</section>
				);
			})}
		</div>
	);
};

export default Menu;
