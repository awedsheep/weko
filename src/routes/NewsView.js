import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";
import { Redirect } from "react-router-dom";
import Brd from "../components/Brds/Brd"

function NewsView({ location }) {
	// console.log(location)

	// if(location.item===undefined){
	// 	return <Redirect to = "/" />
	// }else{
	// console.log("ATTENTION")
	// console.log(location);
	return (
		<div>
			<BrdOpen  />
			<Brd name="" cat="news"  />
		</div>
	);
	// }
}

export default NewsView;
