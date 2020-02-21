import React from "react";
import Brd from "../components/Brds/Brd";

function BuySell({ data }) {
	return (
		<div>
			<Brd data={data} name="온라인장터" cat="buysell" />
		</div>
	);
}

export default BuySell;
