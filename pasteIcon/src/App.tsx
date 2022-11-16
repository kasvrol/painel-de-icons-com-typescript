import { useState } from "react";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import "./App.css";

function App() {
	const [elements, setElements] = useState<Object[]>([]);
	const [iconIndex, setIconIndex] = useState<number>(0);
	const [selectedElement, setSelectedElement] = useState<string>("");

	function selectIcon(image: string) {
		const ref = `./src/assets/${image}.png`;
		setSelectedElement(ref);
	}

	const pasteIcon = (coordinates: any) => {
		if (selectedElement == "") return null;

		setIconIndex(iconIndex + 1);
		const element = {
			id: iconIndex,
			ref: selectedElement,
			clientX: coordinates.clientX,
			clientY: coordinates.clientY,
		};
		setElements((prevState) => [...prevState, element]);
	};

	const coordinates = (event: any) => {
		const { clientX, clientY } = event;
		pasteIcon({ clientX, clientY });
	};

	const renderIcon = (icon: any) => {
		return (
			<div
				style={{
					left: icon.clientX,
					top: icon.clientY,
					position: "absolute",
				}}
				className="icons"
				key={icon.id}
			>
				Image
			</div>
		);
	};

	return (
		<div className="App">
			<Menu selectIcon={selectIcon} />
			<div className="coordinates" onClick={coordinates}>
				{elements.map((element) => {
					return renderIcon(element);
				})}
			</div>
		</div>
	);
}

export default App;
