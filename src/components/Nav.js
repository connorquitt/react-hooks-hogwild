import React, {useState} from "react";
import piggy from "../assets/porco.png";


const Nav = ({hogArray, setHogArray}) => {
	const [isCheck, setIsCheck] = useState(true)

	function FilterGrease(){
		setIsCheck(!isCheck)
		let updatedGrease = hogArray.filter((e) => e.greased === true)
		if(isCheck === true) {
			return setHogArray(updatedGrease)
		}else if(isCheck === false) {
			return null
		}
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
				<input type="text" id='search' />
				<input type="checkbox" id='isGreased' value={isCheck} onClick={FilterGrease}/>
			</div>
		</div>
	);
};

export default Nav;
