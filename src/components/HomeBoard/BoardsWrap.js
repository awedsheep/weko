import React from "react";
import Board from "./Board";
import "./BoardsWrap.css";

function BoardsWrap() {
	return (
		<div className="boarder_warp">
			<div>
				<Board name="캐나다소식" cat="news" />
				<Board name="자유게시판" cat="forum" />
				<Board name="온라인장터" cat="buysell" />
				<Board name="정보/팁" cat="info" />
			</div>
		</div>
	);
}

export default BoardsWrap;
