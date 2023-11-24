import React, {useEffect, useState} from "react";
import PigCard from "./PigCard";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
	const [isCheck, setIsCheck] = useState(true)
	const filteredHogs = useEffect(() => {
		hogs.filter((e) => e.greased === isCheck)
	}, [App])
	return (
		<div className="App">
			<Nav isCheck={isCheck} setIsCheck={setIsCheck}/>
			<PigCard hogArray={filteredHogs}/>
		</div>
	);
}

export default App;
