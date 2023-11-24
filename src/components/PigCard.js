import React from "react";
import hogs from "../porkers_data";

function HandleClick(event) {
	const details = event.target.querySelector("#details")
	if(details.className === 'extra content'){
			return details.className = 'hidden'
	}else {
		return details.className = 'extra content'
	}
}

function PigCard(hogArray) {
	// const hog = hogArray.map((e) => {
	// 	return (
	// 	<div className="ui centered card" key={e.name}>
	// 		<div className="header">{e.name}</div>
	// 		<div className="image">
	// 			<img src={e.image} alr="pig loading..." />
	// 		</div>
	// 		<div className="ui bottom attached button" onClick={HandleClick}>
	// 			More Info
	// 			<div className="hidden" id='details'>
	// 			<p>Speciatly: {e.specialty}</p>
	// 			<p>Weight: {e.weight}</p>
	// 			<p>Greased: {e.greased ? 'Yes' : 'No'}</p>
	// 			<p>Highest Medal: {e["highest medal achieved"]}</p>
	// 		</div>
	// 		</div>
	// 	</div>
	// 	)
	// })
	// return hog
    console.log(hogArray)
}

export default PigCard