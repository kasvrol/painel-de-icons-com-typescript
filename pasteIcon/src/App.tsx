import { useState, useRef } from "react";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import "./App.css";

function App() {
	const iconRef = useRef(null);
	const [elements, setElements] = useState<Object[]>([]);
	const [iconIndex, setIconIndex] = useState<number>(0);
	const [selectedElement, setSelectedElement] = useState<string>("");
	let firstTime: number = 0;
	let firstTouch: any = null;

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

	const removeIcon = () => {
		console.log(elements);
	};

	const readArray = (icon: number, event: any) => {
		const touchTime = new Date().getTime();
		const target = event.currentTarget;
		const doubleTouchTime = touchTime - firstTime < 300;
		const doubleTouchSpace = target == firstTouch;
		firstTime = touchTime;
		firstTouch = target;

		console.log(doubleTouchTime, doubleTouchSpace, removeIcon());
	};

	const renderIcon = (icon: any, index: number) => {
		return (
			<Draggable
				nodeRef={iconRef}
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
