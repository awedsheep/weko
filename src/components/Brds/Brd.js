import React, { useEffect, useState } from "react";
import BrdItem from "./BrdItem";
import "./Brd.css";
import { Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useGlobalState, setNavName } from "../../state.js";
import { getItemByNumber } from "../../apiCall";
import BrdOpen from "./BrdOpen";

function Brd({ name, data, cat }) {
	const [currentNav] = useGlobalState("currentNav");
	var path = window.location.pathname;
	var split = path.split("/");
	cat = split[1];
	const [postings, setPostings] = useGlobalState(cat);

	var itemAbsoluteNum = -1;

	var page = parseInt(split[2]);
	if (split.length >= 4) {
		itemAbsoluteNum = parseInt(split[3]);
	}

	React.useEffect(() => {
		var currentURL = path.split("/")[1];
		if (currentURL !== currentNav) {
			setNavName(currentURL);
		}
	});

	async function fetchFourtyMore() {
		var category = cat;
		if (cat === "forum") {
			category = "entertainment";
		}

		var pageReq = Math.ceil(page / 5) * 100;
		var abNumReq = Math.ceil(itemAbsoluteNum / 100) * 100;

		if (pageReq < abNumReq) {
			pageReq = abNumReq;
		}

		var diff = pageReq - postings.length;
		// console.log("diff : " + diff)

		if (postings.length === 0) {
			var hundredMoreItems = await getItemByNumber(category, null, diff);
			// console.log()
			setPostings([...hundredMoreItems]);
		} else if (diff >= 1) {
			var lastItem = postings[postings.length - 1]; // this might be changed if DB sorting Date is different
			var fourtyMoreItems = await getItemByNumber(
				category,
				lastItem.date,
				diff
			);
			setPostings([...postings, ...fourtyMoreItems]);
		}
	}

	useEffect(() => {
		fetchFourtyMore();
	}, [page]);
	// console.log(postings)

	var basePage = Math.floor(page / 5);
	if (page % 5 === 0) {
		basePage--;
	}

	var upUntilPage = Math.ceil(postings.length / 20);
	var writeButton = (
		<div className="writeButton">
			<Link
				to={{
					pathname: "/write/" + cat,
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
	);

	var navigation = (
		<div className="paging">
			<Link
				to={
					basePage * 5 !== 0 ? "/" + cat + "/" + basePage * 5 : "/" + cat + "/1"
				}
				className="paging_bt"
			>
				<Icon name="angle double left" />
			</Link>
			<Link
				to={
					page - 1 >= 1 ? "/" + cat + "/" + (page - 1) : "/" + cat + "/" + page
				}
				className="paging_bt"
			>
				<Icon name="angle left" />
			</Link>
			{basePage * 5 + 1 <= upUntilPage ? (
				<Link
					to={"/" + cat + "/" + (basePage * 5 + 1)}
					className={page % 5 === 1 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 1}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 2 <= upUntilPage ? (
				<Link
					to={"/" + cat + "/" + (basePage * 5 + 2)}
					className={page % 5 === 2 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 2}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 3 <= upUntilPage ? (
				<Link
					to={"/" + cat + "/" + (basePage * 5 + 3)}
					className={page % 5 === 3 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 3}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 4 <= upUntilPage ? (
				<Link
					to={"/" + cat + "/" + (basePage * 5 + 4)}
					className={page % 5 === 4 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 4}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 5 <= upUntilPage ? (
				<Link
					to={"/" + cat + "/" + (basePage * 5 + 5)}
					className={page % 5 === 0 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 5}
				</Link>
			) : (
				<></>
			)}
			<Link
				to={
					page + 1 <= upUntilPage || postings.length % 100 === 0
						? "/" + cat + "/" + (page + 1)
						: "/" + cat + "/" + page
				}
				className="paging_bt"
			>
				<Icon name="angle right" />
			</Link>
			<Link
				to={
					basePage * 5 + 5 <= upUntilPage
						? "/" + cat + "/" + (basePage * 5 + 6)
						: "/" + cat + "/" + upUntilPage
				}
				className="paging_bt"
			>
				<Icon name="angle double right" />
			</Link>
			{writeButton}
		</div>
	);

	// console.log("THIS IS ABSOLUTE ITEM NUMBER: " + itemAbsoluteNum);
	// console.log("THIS IS THE PAGE I WANT TO GO TO: " + basePage * 5);
	// console.log("UPPAGEUNTIL: " + upUntilPage);

	var navigationWithItem = (
		<div className="paging">
			<Link
				to={{
					pathname:
						basePage * 5 !== 0
							? "/" + cat + "/" + basePage * 5 + "/" + itemAbsoluteNum
							: "/" + cat + "/1/" + itemAbsoluteNum,
					item: postings[itemAbsoluteNum]
				}}
				className="paging_bt"
			>
				<Icon name="angle double left" />
			</Link>
			<Link
				to={{
					pathname:
						page - 1 >= 1
							? "/" + cat + "/" + (page - 1) + "/" + itemAbsoluteNum
							: "/" + cat + "/" + page + "/" + itemAbsoluteNum,
					item: postings[itemAbsoluteNum]
				}}
				className="paging_bt"
			>
				<Icon name="angle left" />
			</Link>
			{basePage * 5 + 1 <= upUntilPage ? (
				<Link
					to={{
						pathname:
							"/" + cat + "/" + (basePage * 5 + 1) + "/" + itemAbsoluteNum,
						item: postings[itemAbsoluteNum]
					}}
					className={page % 5 === 1 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 1}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 2 <= upUntilPage ? (
				<Link
					to={{
						pathname:
							"/" + cat + "/" + (basePage * 5 + 2) + "/" + itemAbsoluteNum,
						item: postings[itemAbsoluteNum]
					}}
					className={page % 5 === 2 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 2}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 3 <= upUntilPage ? (
				<Link
					to={{
						pathname:
							"/" + cat + "/" + (basePage * 5 + 3) + "/" + itemAbsoluteNum,
						item: postings[itemAbsoluteNum]
					}}
					className={page % 5 === 3 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 3}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 4 <= upUntilPage ? (
				<Link
					to={{
						pathname:
							"/" + cat + "/" + (basePage * 5 + 4) + "/" + itemAbsoluteNum,
						item: postings[itemAbsoluteNum]
					}}
					className={page % 5 === 4 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 4}
				</Link>
			) : (
				<></>
			)}
			{basePage * 5 + 5 <= upUntilPage ? (
				<Link
					to={{
						pathname:
							"/" + cat + "/" + (basePage * 5 + 5) + "/" + itemAbsoluteNum,
						item: postings[itemAbsoluteNum]
					}}
					className={page % 5 === 0 ? "paging_number on" : "paging_number"}
				>
					{basePage * 5 + 5}
				</Link>
			) : (
				<></>
			)}
			<Link
				to={{
					pathname:
						page + 1 <= upUntilPage || postings.length % 100 === 0
							? "/" + cat + "/" + (page + 1) + "/" + itemAbsoluteNum
							: "/" + cat + "/" + page + "/" + itemAbsoluteNum,
					item: postings[itemAbsoluteNum]
				}}
				className="paging_bt"
			>
				<Icon name="angle right" />
			</Link>
			<Link
				to={{
					pathname:
						basePage * 5 + 5 <= upUntilPage
							? "/" + cat + "/" + (basePage * 5 + 6) + "/" + itemAbsoluteNum
							: "/" + cat + "/" + upUntilPage + "/" + itemAbsoluteNum,
					item: postings[itemAbsoluteNum]
				}}
				className="paging_bt"
			>
				<Icon name="angle double right" />
			</Link>
			{writeButton}
		</div>
	);

	

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
				{postings.slice((page - 1) * 20, page * 20).map((item, i) => {
					return (
						<BrdItem
							name={name}
							key={i}
							cat={cat}
							page={page}
							num={(page - 1) * 20 + i}
						/>
					);
				})}
			</div>

			{split.length < 4 ? navigation : navigationWithItem}
		</div>
	);
}

export default Brd;
