import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";
import { Redirect } from "react-router-dom";

function ForumView({ location }) {
	if (location.item === undefined) {
		return <Redirect to="/" />

	} else {
		return (
			<div>
				<BrdOpen item={location.item.item} />
			</div>
		);
	}
}

export default ForumView;
