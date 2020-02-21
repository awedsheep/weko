import React from "react";
import Brd from "../components/Brds/Brd";

function News({ data }) {
	return (
		<div>
			<Brd data={data} name="캐나다소식" cat="news" />
		</div>
	);
}

export default News;
