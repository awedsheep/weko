import React from "react";

import BoardsWrap from "../components/HomeBoard/BoardsWrap";
import { useGlobalState, setNavName } from "../state.js";

function Home({ data }) {
	const [currentNav] = useGlobalState("currentNav");
	React.useEffect(() => {
		if (currentNav !== "home") {
			setNavName("home");
		}
		console.log(currentNav);
	});
	return <div>{<BoardsWrap data={data} />}</div>;
}

export default Home;
