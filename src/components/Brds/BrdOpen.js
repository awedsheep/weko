import React, { useState } from "react";
import "./BrdOpen.css";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";
import CommentItem from "./CommentItem";
import { useGlobalState, setNavName } from "../../state.js";
import { Link } from "react-router-dom";
import { getItem, putComment, dateFormatted } from "../../apiCall";

function Brd_Open(params) {
	const [currentNav] = useGlobalState("currentNav");
	const [replies, setReplies] = useState([]);
	const [commentBody, setCommentBody] = useState("");
	console.log(params)
	var item = params.item
	React.useEffect(() => {
		var currentURL = window.location.pathname.split("/")[1];
		if (currentURL !== currentNav) {
			//setNavName(currentURL);
		}
		fetchComment();
	}, []);

	async function fetchComment() {
		var commentList = await getItem(item.cat + "-" + item.date);
		commentList.sort(function(a, b) {
			return a.id.localeCompare(b.id);
		});
		var comments = [];
		var current;
		var indexC = 0;
		var x = 1;

		while (indexC < commentList.length) {
			current = comments;
			var splited = commentList[indexC].id.split("-");
			var len = splited.length;

			for (var i = 1; i <= len; i++) {
				var num = parseInt(splited[i - 1]);
				if (i == len) {
					commentList[indexC]["replies"] = [];
					current.push(commentList[indexC]);
				} else if (len != 1) {
					current = current[num - 1]["replies"];
				}
			}
			indexC++;
		}
		setReplies(comments);
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

	function submitHandler(e) {
		e.preventDefault();

		// console.log(date);
		// var body = commentBody.replace(/(?:\r\n|\r|\n)/g, "<br/>");
		var commentParam = {
			cat: item.cat + "-" + item.date,
			date: dateFormatted(),
			name: "ms.G",
			comment: commentBody,
			id: String(replies.length + 1),
		};

		putComment(commentParam);
		commentParam.replies = [];
		setReplies([...replies, commentParam]);
	}

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
					<col width="150" />
					<col width="50" />
					<col width="120" />
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
							{item.name}
						</td>

						<th className="table__ table_mobile" scope="row">
							작성일
						</th>

						<td className="table__date table__">
							{item.date.substring(0, 16)}
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
								cat = {rep.cat}
								key={i}
								num={i}
								id = {rep.id}
								name={rep.name}
								date={rep.date}
								body={rep.comment}
								replies={rep.replies}
								setReplies={setReplies}
							/>
						);
					})}

					<Form reply onSubmit={submitHandler}>
						<Form.TextArea onChange={e => setCommentBody(e.target.value)} />
						<Button
							content="Add Comment"
							labelPosition="left"
							icon="edit"
							primary
							type="submit"
						/>
					</Form>
				</Comment.Group>
			</div>
		</div>
	);
}

export default Brd_Open;
