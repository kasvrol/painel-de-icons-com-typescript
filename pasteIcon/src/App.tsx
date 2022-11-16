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

	function paste() {
		console.log(selectedElement);
	}

	paste();

	return (
		<div className="App">
			<Menu selectIcon={selectIcon} />
		</div>
	);
}

export default App;
