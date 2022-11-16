import { useState } from "react";
import Menu from "./components/Menu";
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

	return (
		<div className="App">
			<Menu selectIcon={selectIcon} />
			<div className="coordinates" onClick={coordinates}></div>
		</div>
	);
}

export default App;
