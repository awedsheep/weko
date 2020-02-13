import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";

function NewsView({ location }) {
	return (
		<div>
			<BrdOpen item={location.item.item} />
		</div>
	);
}

export default NewsView;
