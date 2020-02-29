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
	var path = window.location.pathname
	var page = parseInt(path.split("/")[2]);

	React.useEffect(() => {
		var currentURL = path.split("/")[1];
		if (currentURL !== currentNav) {
			setNavName(currentURL);
		}
	});

	async function fetchFourtyMore() {
		var category = cat;
		if (cat === "forum") {
			category = "entertainment"
		}

		var diff = Math.ceil(page / 5) * 100 - postings.length;
		console.log("diff : " + diff)

		if (postings.length === 0) {
			var hundredMoreItems = await getItemByNumber(category, null, 100)
			// console.log()
			setPostings([...hundredMoreItems])
		}
		else if (diff >= 1) {
			var lastItem = postings[postings.length - 1]; // this might be changed if DB sorting Date is different 
			var fourtyMoreItems = await getItemByNumber(category, lastItem.date, diff)
			setPostings([...postings, ...fourtyMoreItems])
		}
	}

	useEffect(() => {
		fetchFourtyMore();
	}, [page])
	// console.log(postings)

	var basePage = Math.floor(page / 5)
	if (page % 5 === 0) {
		basePage--;
	}

	var upUntilPage = Math.ceil(postings.length / 20);
	console.log(upUntilPage)
	console.log("page : "+page)
	return (
		<div className="brd">
			<span>
				<Link to={"/" + currentNav}>{name}</Link>
			</span>

			<div className="brd_head">
				<div className="brd__title">제목</div>
				<div className="brd__author">글쓴이</div>
				<div className="brd__date">작성일</div>
				<div className="brd__reads">조회</div>
			</div>
			<div className="brd_body">
				{postings.slice((page - 1) * 20, (page) * 20).map((item, i) => {
					return (
						<BrdItem name={name} item={item} key={i} cat={cat} />
					);
				})}
			</div>

			<div className="paging">
				<Link to={(basePage * 5) !==0 ? "/" + cat + "/" + (basePage * 5): "/" + cat + "/1"} className="paging_bt">
					<Icon name="angle double left" />
				</Link>
				<Link to={((page - 1) >= 1) ? "/" + cat + "/" + (page - 1) : "/" + cat + "/" + (page) } className="paging_bt">
					<Icon name="angle left" />
				</Link>
				{(basePage * 5 + 1) <= upUntilPage ? <Link to={"/" + cat + "/" + (basePage * 5 + 1)} className={page % 5 === 1 ? "paging_number on" : "paging_number"}>
					{basePage * 5 + 1}
				</Link> : <></>}
				{(basePage * 5 + 2) <= upUntilPage ? <Link to={"/" + cat + "/" + (basePage * 5 + 2)} className={page % 5 === 2 ? "paging_number on" : "paging_number"}>
					{basePage * 5 + 2}
				</Link> : <></>}
				{(basePage * 5 + 3) <= upUntilPage ? <Link to={"/" + cat + "/" + (basePage * 5 + 3)} className={page % 5 === 3 ? "paging_number on" : "paging_number"}>
					{basePage * 5 + 3}
				</Link> : <></>}
				{(basePage * 5 + 4) <= upUntilPage ? <Link to={"/" + cat + "/" + (basePage * 5 + 4)} className={page % 5 === 4 ? "paging_number on" : "paging_number"}>
					{basePage * 5 + 4}
				</Link> : <></>}
				{(basePage * 5 + 5) <= upUntilPage ? <Link to={"/" + cat + "/" + (basePage * 5 + 5)} className={page % 5 === 0 ? "paging_number on" : "paging_number"}>
					{basePage * 5 + 5}
				</Link> : <></>}
				<Link to={((page + 1) <= upUntilPage) || postings.length%100 === 0 ? "/" + cat + "/" + (page + 1) : "/" + cat + "/" + (page) } className="paging_bt">
					<Icon name="angle right" />
				</Link>
				<Link to={(basePage * 5+5) <= upUntilPage ? "/" + cat + "/" + (basePage * 5 + 6): "/" + cat + "/" + upUntilPage} className="paging_bt">
					<Icon name="angle double right" />
				</Link>
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
