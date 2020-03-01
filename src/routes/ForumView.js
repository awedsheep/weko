import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";
import { Redirect } from "react-router-dom";
import Brd from "../components/Brds/Brd"

function ForumView({ location }) {
	if (location.item === undefined) {
		return <Redirect to="/" />

	} else {
		return (
			<div>
				<BrdOpen item={location.item.item} />
				<Brd name="" cat="forum"  />
			</div>
		);
	}
}

export default ForumView;
