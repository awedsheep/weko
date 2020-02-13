import React, { useEffect } from "react";
import Board from "./Board";
import "./BoardsWrap.css";
import { getItem } from "../../apiCall";

let res;
function BoardsWrap() {
	async function fetchNewstID() {
		res = await getItem("News", -1);
	}
	useEffect(() => {
		fetchNewstID();
		// console.log(res);
	}, []);
	return (
		<div className="boarder_warp">
			<div>
				<Board name="캐나다소식" newestID={res} cat="news" />
				<Board name="자유게시판" newestID={res} cat="forum" />
				<Board name="온라인장터" newestID={res} cat="buysell" />
				<Board name="정보/팁" newestID={res} cat="info" />
			</div>
		</div>
	);
}

export default BoardsWrap;
