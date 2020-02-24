import React from "react";
import Board from "./Board";
import "./BoardsWrap.css";

let res;
function BoardsWrap({ data }) {
	return (
		<div className="boarder_warp">
			<div>
				<Board name="캐나다소식" newestID={res} cat="news" data={data.news} />
				<Board name="자유게시판" newestID={res} cat="forum" data={data.forum} />
				<Board
					name="온라인장터"
					newestID={res}
					cat="buysell"
					data={data.buysell}
				/>
				<Board name="정보/팁" newestID={res} cat="info" data={data.info} />
			</div>
		</div>
	);
}

export default BoardsWrap;
