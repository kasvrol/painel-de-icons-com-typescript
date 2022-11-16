import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
	const [elements, setElements] = useState([]);
	const [iconIndex, setIconIndex] = useState<number>(0);
	const [selectedElement, setSelectedElement] = useState<string>("");

	function selectIcon(image: string) {
		const ref = `./src/assets/${image}.png`;
		setSelectedElement(ref);
	}

	const coordinates = (event: any) => {
		const { clientX, clientY } = event;
		console.log({ clientX, clientY });
	};

	return (
		<div className="App">
			<Menu selectIcon={selectIcon} />
			<div className="coordinates" onClick={coordinates}></div>
		</div>
	);
}

export default App;
