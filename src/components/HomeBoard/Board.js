import React, { useEffect, useState } from "react";
import BoardItem from "./BarodItem";
import "./Board.css";
import more from "../images/more.png";
import { Link } from "react-router-dom";
import { getRecentTen } from "../../apiCall";
// import { Image, Item } from "semantic-ui-react";

function Board({ newestID, name, cat }) {
	const [tenItems, setTenItems] = useState([]);

	async function fetchTenItems() {
		const res = await getRecentTen("News", newestID);
		setTenItems(res);
	}

	useEffect(() => {
		fetchTenItems();
	}, []);
	// console.log(tenItems);
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
					{/* <Item.Group>
					{tenItems
						.slice(0)
						.reverse()
						.map(item => {
							return (
								<Item>
									<Item.Image
										size="tiny"
										src="https://www.economicdevelopmentwinnipeg.com/uploads/blog_post/blog_post_image_835.t1552920467.jpg"
									/>

									<Item.Content>
										<Item.Header as="a">Hello</Item.Header>
										<Item.Meta>Description</Item.Meta>
										<Item.Description>
											{item.body.substring(0, 100)}
										</Item.Description>
										<Item.Extra>Additional Details</Item.Extra>
									</Item.Content>
								</Item>
							);
						})}
				</Item.Group> */}
				</ul>
			</div>
		</div>
	);
}

export default Board;
