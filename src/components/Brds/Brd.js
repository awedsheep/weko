import React from "react";
import BrdItem from "./BrdItem";
import "./Brd.css";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Brd({ name, data, cat, handleActiveNav }) {
	console.log("Brd");
	console.log(data);

	return (
		<div className="brd">
			<span>{name}</span>

			<div className="brd_head">
				<div className="brd__number">번호</div>
				<div className="brd__title">제목</div>
				<div className="brd__author">글쓴이</div>
				<div className="brd__date">작성일</div>
				<div className="brd__reads">조회</div>
			</div>
			<div className="brd_body">
				{data
					.slice(0)
					.reverse()
					.map(item => {
						return (
							<BrdItem
								name={name}
								item={item}
								key={item.number}
								cat={cat}
								handleActiveNav={handleActiveNav}
							/>
						);
					})}
			</div>

			<div className="paging">
				<a href="/" className="paging_bt">
					<Icon name="angle double left" />
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle left" />
				</a>
				<a href="/" className="paging_number on">
					1
				</a>
				<a href="/" className="paging_number">
					2
				</a>
				<a href="/" className="paging_number">
					3
				</a>
				<a href="/" className="paging_number">
					4
				</a>
				<a href="/" className="paging_number">
					5
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle right" />
				</a>
				<a href="/" className="paging_bt">
					<Icon name="angle double right" />
				</a>
				<div className="writeButton">
					<Link
						to={{
							pathname: "/" + cat + "/write/",
							name: name,
							cat: { cat },
							handleActiveNav: { handleActiveNav }
						}}
					>
						<Button animated>
							<Button.Content visible>글쓰기</Button.Content>
							<Button.Content hidden>
								<Icon name="pencil alternate" />
							</Button.Content>
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Brd;
