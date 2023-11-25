import React, {useEffect, useState} from "react";
import PigCard from "./PigCard";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [hogArray, setHogArray] = useState(hogs)
	return (
		<div className="App">
			<Nav hogArray={hogArray} setHogArray={setHogArray}/>
			<PigCard hogArray={hogArray}/>
		</div>
	);
}

export default App;
