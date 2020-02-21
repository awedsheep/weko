import React from "react";
import Brd from "../components/Brds/Brd";

function InfoTips({ data }) {
	return (
		<div>
			<Brd data={data} name="정보/팁" cat="info" />
		</div>
	);
}

export default InfoTips;
