import React, { useState, useEffect } from "react";
import { Comment, Form, Button } from "semantic-ui-react";
import avatar from "../images/avatar.png";
import { dateFormatted, putComment } from "../../apiCall";
import { useGlobalState } from "../../state.js";
import item from "./BrdOpen"
function CommentItem({
	cat,
	num,
	name,
	id,
	date,
	body,
	replies,
	at,
	setReplies,
	rep,
	repTree,
	fetchComment,
	login
}) {
	const [commentBoxShow, setCommentBoxShow] = useState(false);
	const [commentBody, setCommentBody] = useState("");
	const [commentShow, setCommentShow] = useGlobalState("commentShow");
	let rereplies = null;
	const [add, setAdd] = useState(false);
	if (replies) {
		rereplies = replies.map((rep, i) => {
			return (
				<CommentItem
					cat={rep.cat}
					id={rep.id}
					key={num + "" + i}
					name={rep.name}
					date={rep.date}
					body={rep.comment}
					replies={rep.replies}
					at={name}
					setReplies={setReplies}
					rep={rep}
					repTree={repTree}
					fetchComment={fetchComment}
					login={login}
				/>
			);
		});
	}

	async function submitHandler(e) {
		e.preventDefault();
		await fetchComment();
		// console.log(date);
		// var body = commentBody.replace(/(?:\r\n|\r|\n)/g, "<br/>");
		setAdd(true);
		// setCommentBody(commentBody);
	}


	if(add){
		var commentParam = {
			cat: cat,
			date: dateFormatted(),
			name: login.name,
			comment: commentBody,
			id: id + "-" + (replies.length + 1)
		};

		putComment(commentParam);
		commentParam["replies"] = [];
		rep.replies.push(commentParam);
		function a() {
			setReplies([...repTree]);
		}
		a();
		setCommentBody("");
		setCommentShow(!commentShow);
		setCommentBoxShow(!commentBoxShow);
		setAdd(false);
	}

	return (
		<>
			<Comment>
				<Comment.Avatar src={avatar} />
				<Comment.Content>
					<Comment.Author as="a">
						<span className="commentName">{name}</span>
					</Comment.Author>
					<Comment.Metadata>
						<div>
							<span className="commentDate">{date}</span>
						</div>
					</Comment.Metadata>
					<Comment.Text>
						<span className="commentBody" style={{ whiteSpace: "pre-line" }}>
							{at && <span className="at">@{at}</span>}
							{body}
						</span>
					</Comment.Text>
					<Comment.Actions>
						<Comment.Action>
							<span
								className="commentReply"
								onClick={() => {
									setCommentBoxShow(!commentBoxShow);
									setCommentShow(!commentShow);
								}}
							>
								Reply
							</span>
						</Comment.Action>
						<Form
							reply
							style={{ display: commentBoxShow ? "flow-root" : "none" }}
							onSubmit={submitHandler}
						>
							<Form.TextArea
								onChange={e => setCommentBody(e.target.value)}
								value={commentBody}
							/>
							<Button
								content="Add Comment"
								labelPosition="left"
								icon="edit"
								primary
								type="submit"
							/>
						</Form>
					</Comment.Actions>
				</Comment.Content>
				{replies.length > 0 && <Comment.Group>{rereplies}</Comment.Group>}
			</Comment>
		</>
	);
}
export default CommentItem;
