import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
	function selectIcon(image: string) {
		console.log(image);
	}

	return (
		<div className="App">
			<Menu selectIcon={selectIcon} />
		</div>
	);
}

export default App;
