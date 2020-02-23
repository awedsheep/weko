import React, { useEffect, useState } from "react";
import BoardItem from "./BarodItem";
import "./Board.css";
import more from "../images/more.png";
import { Link } from "react-router-dom";
import { getRecentTen } from "../../apiCall";
import { Image, Item } from "semantic-ui-react";

function Board({ newestID, name, cat, data }) {
	const [tenItems, setTenItems] = useState([]);

	async function fetchTenItems() {
		if(cat=="forum"){
			const res = await getRecentTen("entertainment");
			setTenItems(res);
		}else if(cat == "news"){
			const res = await getRecentTen("news")
			setTenItems(res)
		}
	}
	// console.log(data);
	useEffect(() => {
		fetchTenItems();
	}, []);
	console.log(tenItems);
	var ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	return (
		<div className="board">
			<div className="board_header">
				<Link to={"/" + cat} className="board__title">
					{name}
				</Link>
				<Link to={"/" + cat} className="board__more">
					<img src={more} alt="more" />
				</Link>
			</div>
			<div className="board_list">
				<ul>
					{tenItems
						.slice(0)
						.reverse()
						.map((item, i) => {
							return <BoardItem key={i} num={i} item={item} cat={cat} />;
						})}
				</ul>
			</div>
		</div>
	);
}

export default Board;
