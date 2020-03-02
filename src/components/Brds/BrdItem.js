import React from "react";
import { Link } from "react-router-dom";
import { Icon, ItemDescription } from "semantic-ui-react";
import { useGlobalState, setNavName } from "../../state.js";
import {
	updateItemsById,
	dateFormatted,
	calulateDayDiff
} from "../../apiCall.js";

function Brd_Item({ cat, name, page, num }) {
	const [postings, setPostings] = useGlobalState(cat);
	let c = "#";
	c += Math.floor(Math.random() * 10);
	c += Math.floor(Math.random() * 10);
	c += Math.floor(Math.random() * 10);

	var item = postings[num];

	// if (item.numComment === undefined) {
	// 	updateItemsById({
	// 		cat: item.cat,
	// 		date: item.date,
	// 		changedValue: { numComment: 0 }
	// 	});
	// }
	return (
		<div className="brd_Item">
			<div className="brd__title">
				<Link
					onClick={() => window.scrollTo(0, 0)}
					to={{
						pathname: "/" + cat + "/" + page + "/" + num,
						item: { item },
						name: { name }
					}}
				>
					<div className="brd_item_title">
						<div className="brd_tag" style={{ color: c }}>
							{item.tag ? item.tag : ""}
						</div>
						{item.title}
						<span
							className="brd_item_rep"
							style={{
								marginLeft: "3px"
							}}
						>
							{calulateDayDiff(item.date) > 7 ? (
								""
							) : (
								<img
									style={{
										height: "9px",

										marginRight: "3px"
									}}
									src="https://img.icons8.com/ios-filled/50/ff0000/n.png"
									alt="new"
								/>
							)}
							[{item.numComment}]
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
