import React from "react";
import "./BrdOpen.css";
import { Button, Comment, Form, Header, Icon } from "semantic-ui-react";
import CommentItem from "./CommentItem";
import { useGlobalState, setNavName } from "../../state.js";
import { Link } from "react-router-dom";

function Brd_Open() {
	const [currentNav] = useGlobalState("currentNav");
	React.useEffect(() => {
		var currentURL = window.location.pathname.split("/")[1];
		if (currentURL !== currentNav) {
			setNavName(currentURL);
		}
	});
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
	}

	const item = {
		number: 4,
		title: "html과 css로 웹사이트를 만들어요",
		author: "관리자",
		date: "2020-01-01-13-32",
		view: 232,
		body:
			'안녕하세요 Ready to Combat 울프팀 입니다.\
	<br />\
	금일 오전 7시 부터 진행된 정기점검이 완료되어 현재 정상적으로\
	서버가 오픈되었습니다. <br />\
	고객님들께서 게임에 접속이 가능하신 상태이니 게임에 접속을\
	해보시기 바랍니다. <br />\
	<br />\
	<strong>[업데이트 내용]</strong>\
	<br />\
	1.선물함 추가 및 선물시스템 업데이트 <br />\
	2.EX아이템(한코인아이템) 업데이트 <br />\
	3.신규 무기 칼(근접무기) 업데이트 <br />\
	&nbsp;* EX진지점령/울프진지점령 모드에서 인간형으로 플레이시\
	3번키로 선택가능\
	<br />\
	4.신규 총기 P-226(보조무기) 업데이트 <br />\
	6.프라이드 마크 130개 업데이트\
	<br />\
	<br />\
	<span style={{ color: "red" }}>감사합니다.</span>\
	<br />\
	<br />\
	<img\
		src="https://clipartart.com/images/big-small-clipart-11.png"\
		height="150px"\
	></img>',
		replies: [
			{
				name: "안서영",
				body: "예술적으로 아름답네요!",
				date: "2020-02-25-13:33",
				replies: []
			}
		]
	};

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
					{item.replies.map((rep, i) => {
						return (
							<CommentItem
								key={i}
								num={i}
								name={rep.name}
								date={rep.date}
								body={rep.body}
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
