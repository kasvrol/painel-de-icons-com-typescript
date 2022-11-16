import { useState, useRef } from "react";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import "./App.css";

function App() {
	const iconRef = useRef(null);
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
			<Draggable nodeRef={iconRef} key={icon.id}>
				<div
					style={{
						left: icon.clientX,
						top: icon.clientY,
						position: "absolute",
					}}
					className="icons"
					ref={iconRef}
				>
					Image
				</div>
			</Draggable>
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
			<button
				className="button"
				onClick={() => setSelectedElement("")}
			></button>
		</div>
	);
}

export default App;
