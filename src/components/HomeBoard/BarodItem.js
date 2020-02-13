import React from "react";
import { Link } from "react-router-dom";

function BoardItem({ num, item, cat }) {
	console.log(item);
	return (
		<li>
			<Link
				to={{
					pathname: "/" + cat + "/view/" + num,
					item: { item }
				}}
			>
				<div className="board_item_title">
					<div className="board_item_num_rep">
						<img
							style={{ height: "9px", marginRight: "3px" }}
							src="https://img.icons8.com/ios-filled/50/ff0000/n.png"
							alt="new"
						/>
						[3]
					</div>
					<div className="board_title">
						<div className="board_tag">{item.tag ? item.tag : ""}</div>
						{item.title}
					</div>

					{/* <div className="board_item_new">N</div> */}
				</div>
			</Link>
			{/* <Link
				to={{
					pathname: "/news/view/" + item.number,
					item: { item },

					handleActiveNav: { handleActiveNav }
				}}
			>
				<div className="board_tag">{item.tag ? item.tag : ""}</div>
				<div className="board_item_title">{item.title}</div>
			</Link> */}
			<span>{item.date.substring(0, 10)}</span>
		</li>
	);
}

export default BoardItem;
