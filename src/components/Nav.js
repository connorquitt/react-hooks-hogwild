import React, {useState} from "react";
import piggy from "../assets/porco.png";
import hogs from "../porkers_data";


const Nav = ({hogArray, setHogArray}) => {
	const [searchVal, setSearchVal] = useState('')
	const [searchType, setSearchType] = useState(true)

	function FilterGrease(){
		let updatedGrease = hogArray.filter((e) => e.greased === true)
		setHogArray(updatedGrease)
	}

	function handleSearch(event) {
		setSearchVal(event.target.value)
		if(searchType === true){ //true===name
		 	let filteredHogsName = hogs.filter((e) => e.name.toLowerCase() === event.target.value.toLowerCase())
			console.log(filteredHogsName)
		 	return setHogArray(filteredHogsName)
		}else if(searchType === false){ //false===weight
			let filteredHogsWeight = hogs.filter((e) => e.weight.toString()[0] === event.target.value)
			console.log(filteredHogsWeight)
			return setHogArray(filteredHogsWeight)

		}
	}

	function resetPigs() {
		setSearchVal('')
		setSearchType(true)
		setHogArray(hogs)
	}

	function searchChange() {
		setSearchType(!searchType)
	}
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<input type="button" id='searchType' onClick={searchChange} value={searchType ? 'name' : 'weight'} />
				<input type="text" id='search' onChange={handleSearch} value={searchVal}/>
				<input type="button" id='isGreased' value='only greased' onClick={FilterGrease}/>
				<input type='button' id='reset' value='show all pigs' onClick={resetPigs} />
			</div>
		</div>
	);
};

export default Nav;
