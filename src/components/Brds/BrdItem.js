import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Brd_Item({ item, cat, name }) {
	let c = "#";
	c += Math.floor(Math.random() * 10);
	c += Math.floor(Math.random() * 10);
	c += Math.floor(Math.random() * 10);

	return (
		<div className="brd_Item">
			<div className="brd__number">{item.number}</div>
			<div className="brd__title">
				<Link
					to={{
						pathname: "/" + cat + "/view/" + item.number,
						item: { item },
						name: { name }
					}}
				>
					<div className="brd_item_title">
						<div className="brd_tag" style={{ color: c }}>
							{item.tag ? item.tag : ""}
						</div>
						{item.title}
						<span className="brd_item_rep">
							<img
								style={{ height: "9px", marginLeft: "3px", marginRight: "3px" }}
								src="https://img.icons8.com/ios-filled/50/ff0000/n.png"
								alt="new"
							/>
							[3]
						</span>
					</div>
				</Link>
			</div>
			<div className="brd__author">
				<Icon fitted name="edit outline" color="blue" />
				{item.author}
			</div>
			<div className="brd__date">{item.date.substring(0, 10)}</div>
			<div className="brd__reads">
				<span className="views__mobile">views: </span>
				{item.view}
			</div>
		</div>
	);
}

export default Brd_Item;
