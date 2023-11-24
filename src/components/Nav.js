import React, {useState} from "react";
import piggy from "../assets/porco.png";

const Nav = ({ isCheck, setIsCheck }) => {

	function HandleGrease() {
		setIsCheck(!isCheck)
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
				<input type="text" id='search'/>
				<input type="checkbox" id='isGreased' value={isCheck} onClick={HandleGrease}/>
			</div>
		</div>
	);
};

export default Nav;
