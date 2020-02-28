import React from "react";
import { Comment } from "semantic-ui-react";
import avatar from "../images/avatar.png";

function CommentItem({ num, name, date, body, replies, at }) {
	let rereplies = null;
	if (replies) {
		rereplies = replies.map((rep, i) => {
			return (
				<CommentItem
					key={num + "" + i}
					name={rep.name}
					date={rep.date}
					body={rep.body}
					replies={rep.replies}
					at={name}
				/>
			);
		});
	}

	return (
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
					<span className="commentBody">
						{at && <span className="at">@{at}</span>}
						{body}
					</span>
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>
						<span className="commentReply">Reply</span>
					</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
			{replies.length > 0 && <Comment.Group>{rereplies}</Comment.Group>}
		</Comment>
	);
}
export default CommentItem;
