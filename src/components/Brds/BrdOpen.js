import React, { useState } from "react";
import "./BrdOpen.css";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";
import CommentItem from "./CommentItem";
import { useGlobalState, setNavName } from "../../state.js";
import { Link } from "react-router-dom";
import { getItem } from "../../apiCall"



function Brd_Open({ item }) {
	const [currentNav] = useGlobalState("currentNav");
	const [replies, setReplies] = useState([]);
	React.useEffect(() => {

		var currentURL = window.location.pathname.split("/")[1];
		if (currentURL !== currentNav) {
			//setNavName(currentURL);
		}
		fetchComment()
	}, []);

	async function fetchComment() {
		const commentList = await getItem(item.cat + "_" + item.date);
		commentList.sort(function (a, b) {
			return a.id.localeCompare(b.id)
		})
		var comments = [];
		var current = comments;
		var indexC = 0;
		var x = 1;
		while (indexC < commentList.length) {
		
			var len = commentList[indexC].id.split("-").length
			current.push(commentList[indexC])
			current[indexC]["replies"] = [];
			console.log(current)
			if(x <= len){
				if(current.replies){
					current = current.replies[current.replies.length-1]
				}
				x = len;
			}
			// if (len === x) {
				
				
			// } else {
			// 	x++;
			// }
			indexC++;
		}
		console.log("object")
		console.log(commentList)
		setReplies(commentList);
	}


	var name;
	switch (currentNav) {
		case "news":
			name = "캐나다소식";
			break;
		case "forum":
			name = "자유게시판";
			break;
		case "info":
			name = "정보/팁";
			break;
		case "buysell":
			name = "온라인장터";
			break;
		default:
			break;
	}

	// 	replies: [
	// 		{
	// 			name: "안서영",
	// 			body: "예술적으로 아름답네요!",
	// 			date: "2020-02-25-13:33",
	// 			replies: []
	// 		}
	// 	]

	return (
		<div className="open_table">
			<span className="open_title">
				<Link to={"/" + currentNav}>{name}</Link>
			</span>
			<table cellSpacing="0" border="1" className="tbl_type">
				<colgroup>
					<col width="80" />
					<col />
					<col width="80" />
					<col width="100" />
					<col width="50" />
					<col width="80" />
				</colgroup>
				<thead>
					<tr>
						<th className="table_mobile" scope="row">
							제목
						</th>
						<td className="table__title" colSpan="5">
							{item.title}
						</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<th className="table__ table_mobile" scope="row">
							작성자
						</th>

						<td className="table__ table__author">
							<Icon fitted name="edit outline" color="blue" />
							시곻나라말사미듕
						</td>

						<th className="table__ table_mobile" scope="row">
							작성일
						</th>

						<td className="table__date table__">
							{/* {item.date.substring(0, 10)} */ item.date.substring(0, 10)}
						</td>

						<th className="table__ table_mobile" scope="row">
							조회
						</th>

						<td className="table__ table_mobile">{item.view}</td>
					</tr>

					<tr>
						<td
							colSpan="6"
							className="cont"
							dangerouslySetInnerHTML={{ __html: item.body }}
						// dangerouslySetInnerHTML={{ __html: test }}
						>
							{/* // {item.body} */}
						</td>
					</tr>
				</tbody>
			</table>
			<div className="commnetBox">
				<Comment.Group>
					<Header as="h3" dividing>
						Comments (0)
					</Header>
					{replies.map((rep, i) => {
						return (
							<CommentItem
								key={i}
								num={i}
								name={"cjChoi"}
								date={rep.date}
								body={rep.comment}
								replies={rep.replies}
							/>
						);
					})}

					<Form reply>
						<Form.TextArea />
						<Button
							content="Add Comment"
							labelPosition="left"
							icon="edit"
							primary
						/>
					</Form>
				</Comment.Group>
			</div>
		</div>
	);
}

export default Brd_Open;
