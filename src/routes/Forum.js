import React from "react";
import Brd from "../components/Brds/Brd";

function Forum({ data }) {
	return (
		<div>
			<Brd data={data} name="자유게시판" cat="forum" />
		</div>
	);
}

export default Forum;
