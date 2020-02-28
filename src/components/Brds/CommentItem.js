import React, { useState } from "react";
import { Comment, Form, Button } from "semantic-ui-react";
import avatar from "../images/avatar.png";
import { dateFormatted, putComment } from "../../apiCall";

function CommentItem({ cat, num, name, id, date, body, replies, at, setReplies }) {
	const [commentBoxShow, setCommentBoxShow] = useState(false)
	const [commentBody, setCommentBody] = useState("")
	let rereplies = null;
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
				/>

			);
		});
	}


	function submitHandler(e) {
		e.preventDefault();

		// console.log(date);
		// var body = commentBody.replace(/(?:\r\n|\r|\n)/g, "<br/>");


		var commentParam = {
			cat: cat,
			date: dateFormatted(),
			name: "ms.G",
			comment: commentBody,
			id: id + "-" + (replies.length + 1),
		};

		// putComment(commentParam);
		commentParam.replies = [];
		function a() {
			setReplies([...replies, commentParam]);
		}
	
	a();

}

return (<>
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
					<span className="commentReply" onClick={() => setCommentBoxShow(!commentBoxShow)}>Reply</span>
				</Comment.Action>
				<Form reply style={{ display: (commentBoxShow ? "initial" : "none") }} onSubmit={submitHandler}>
					<Form.TextArea onChange={e => setCommentBody(e.target.value)
					} />
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
		{replies.length > 0 && <Comment.Group>{rereplies}

		</Comment.Group>}
	</Comment>
</>
);
}
export default CommentItem;
