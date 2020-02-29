import React, { useEffect } from "react";
import BrdItem from "./BrdItem";
import "./Brd.css";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useGlobalState, setNavName } from "../../state.js";
import { getItemByNumber } from "../../apiCall";


function Brd({ name, data, cat }) {
	const [currentNav] = useGlobalState("currentNav");
	const [postings, setPostings] = useGlobalState(cat);

	React.useEffect(() => {
		var currentURL = window.location.pathname.split("/")[1];
		if (currentURL !== currentNav) {
			setNavName(currentURL);
		}
	});

	async function fetchFourtyMore(){
		
		if(postings.length >= 10 & postings.length < 50){
			var lastItem = postings[0]; // this might be changed if DB sorting Date is different 
			var fourtyMoreItems = await getItemByNumber(cat, lastItem.date, 40)
			setPostings([...postings, ...fourtyMoreItems])
		}else{
			var fiftyMoreItems = await getItemByNumber(cat, null, 50)
			setPostings([...fiftyMoreItems])
		}
		
	}

	useEffect(() => {
		fetchFourtyMore();
	}, [])
	
	// console.log(postings)

	return (
		<div className="brd">
			<span>
				<Link to={"/" + currentNav}>{name}</Link>
			</span>

			<div className="brd_head">
				<div className="brd__number">번호</div>
				<div className="brd__title">제목</div>
				<div className="brd__author">글쓴이</div>
				<div className="brd__date">작성일</div>
				<div className="brd__reads">조회</div>
			</div>
			<div className="brd_body">
				{postings
					.slice(0)
					.reverse()
					.map((item, i) => {
						return (
							<BrdItem name={name} item={item} key={i} cat={cat} />
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
							cat: { cat }
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
