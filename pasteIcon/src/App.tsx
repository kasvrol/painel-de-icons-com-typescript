import { useState } from "react";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import "./App.css";

function App() {
	const [elements, setElements] = useState<Object[]>([]);
	const [selectedElement, setSelectedElement] = useState<string>("");
	let firstTime: number = 0;
	let firstTouch: any = null;

	function selectIcon(image: string) {
		const ref = `./src/assets/${image}.png`;
		setSelectedElement(ref);
	}

	const pasteIcon = (coordinates: any) => {
		if (selectedElement == "") return null;

		const element = {
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

	const removeIcon = (index: number) => {
		setElements((prevState) => prevState.filter((_, i) => i !== index));
	};

	const readArray = (index: number, event: any) => {
		const touchTime = new Date().getTime();
		const target = event.currentTarget;
		const doubleTouchTime = touchTime - firstTime < 300;
		const doubleTouchSpace = target == firstTouch;
		firstTime = touchTime;
		firstTouch = target;

		if (doubleTouchTime && doubleTouchSpace) {
			removeIcon(index);
		}
	};

	const renderIcon = (icon: any, index: number) => {
		return (
			<Draggable
				key={index}
				onMouseDown={(event) => readArray(index, event)}
			>
				<div
					style={{
						left: icon.clientX,
						top: icon.clientY,
						position: "absolute",
					}}
					className="icons"
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
				{elements.map((element: Object, index: number) => {
					return renderIcon(element, index);
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
