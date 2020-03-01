import React, { useEffect, useState } from "react";
import BoardItem from "./BarodItem";
import "./Board.css";
import more from "../images/more.png";
import { Link } from "react-router-dom";
import { getRecentTwenty } from "../../apiCall";
import { useGlobalState } from "../../state"
import { Icon } from "semantic-ui-react";

function Board({ newestID, name, cat, data }) {

	const [postings, setPostings] = useGlobalState(cat);
	const [loaded, setLoaded] = useState(false);

	// console.log(cat)
	async function fetchTenItems() {
		var res;
		if (cat === "forum") {
			res = await getRecentTwenty("entertainment");
			setPostings(res);
			setLoaded(true);
		} else if (cat === "news") {
			res = await getRecentTwenty("news");
			setPostings(res);
			setLoaded(true);
		}

	}
	// console.log(data);
	
	useEffect(() => {
		fetchTenItems();
	}, []);

	// console.log(tenItems);
	// console.log(postings);
	var placeholder = new Array(10).fill(0) //soreum
	return (
		<div className="board">
			<div className="board_header">
				<Link to={"/" + cat+"/1"} className="board__title">
					{name}
				</Link>
				<Link to={"/" + cat+"/1"} className="board__more">
					<img src={more} alt="more" />
				</Link>
			</div>
			<div className="board_list">
				<ul>
					{loaded ?
						postings.slice(0,10).map((item, i) => {
							return (<BoardItem
								key={i}
								num={i}
								item={item}
								cat={cat}
							/>);

						}) : placeholder.map(element => {
							return <li><Icon loading name='spinner'/></li>
						})
					}
				</ul>
			</div>
		</div>
	);
}

export default Board;
