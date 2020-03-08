import axios from "axios";
const config = require("./config.json");

/*
	UPDATE NOTICE:
		1. putPost(newParams) function now auto-generate unique increamental id.
		2. DynamoDB now has current id(index) kept and it updates whenever a new post commits.
		3. getItem(cat, id) is able to get single item by cat and id.
		4. getRecentTen(cat) is NEWLY added. it only retrieve 10 recent items.
	
		**THESE METHODS will benefit as the size of the database grows 
			since it never scans entire table***
	
		5.fetch() method scans entire table and return the whole table.
	*/

// export const NewNewsItem = {
// 	cat: "news",
// 	date: "2020-02-13-07-18-23-000",
// 	content: 9,
//	numComment: 0
// };

// putPost(NewNewsItem);
export async function putPost(newParams) {
	console.log("Creating New Post...");
	try {
		await axios.post(`${config.api.invokeUrl}/post`, newParams);
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}

	updateIndex(newParams.cat);
}

export async function updateIndex(cat) {
	const params = {
		cat: cat,
		increament: true
	};

	try {
		const res = await axios.patch(`${config.api.invokeUrl}/post/index`, params);
		// console.log(res);
		return res.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

export async function getItemByNumber(cat, date, num) {
	console.log(`getting ${num} of Items form ${cat}`);
	var myparam = { cat, date, num };
	try {
		const res = await axios.post(
			`${config.api.invokeUrl}/post/getlist`,
			myparam
		);
		console.log(res);
		return res.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

// getRecentTen("News");
//need to compare with scan.... 2querycalls vs scan
export async function getRecentTwenty(cat) {
	try {
		const res = await axios.get(`${config.api.invokeUrl}/post/${cat}`);
		// console.log(res);
		return res.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

// getItem("news", "123");
// getItem("news")
export async function getItem(cat, date) {
	console.log("attempting to start get Item or Items from key: cat, date");
	// console.log(cat);
	// console.log(date);
	try {
		var res = [];
		if (date == null) {
			res = await axios.get(`${config.api.invokeUrl}/post/${cat}/n`);
		} else {
			res = await axios.get(`${config.api.invokeUrl}/post/${cat}/${date}`);
		}
		// console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

//아놔 업데이트 기능 구현 너무 어려웠음 ㅠㅠ. 지정된 아이디에 바꾸고 싶은 데이타만 changedValue에 넣어주셈 숫자 상관 없음
// updateItemsById();
export async function updateItemsById(params) {
	console.log("attempting to start update parameters");
	// const params = {
	// 	cat: "news",
	// 	date: "2020-02-13", //Unique String
	// 	changedValue: {
	// 		title: "NEW 22 CASTLE", //String
	// 		author: "KJ Choi", //String
	// 		date: "2020-02-10", // String
	// 		body: "<div>SOMESOME</div>",
	//		replies [1 2 3]
	// 	}
	// };

	//
	try {
		await axios.patch(`${config.api.invokeUrl}/post`, params);
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

//fetch();
export async function fetch() {
	try {
		const res = await axios.get(`${config.api.invokeUrl}/post`);
		return res.data;
	} catch (err) {
		console.log(`error recieving data: ${err}`);
	}
}

//test with and "#n >= :v and #n2 >= :v2"
// var filterParam = {
// 	cat : "news",
// 		expression: "#n >= :v",
// 		names: {"#n": "content"},
// 		values: {":v": 5}

// }

// getCatWithFiltered("news", filterExpression);
export async function getCatWithFiltered(filterParam) {
	console.log("attempting to start get Item or Items from key: cat, date");

	try {
		var res = await axios.post(
			`${config.api.invokeUrl}/post/filtered`,
			filterParam
		);

		// console.log(res.data[0]);
		return res.data[0];
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

// const NewComment = {
// 		cat: "rootPostInfo", // "news/2020-02-13"
// 		date: "2020-02-13-07-18-23-000",
// 		parent: {cat: "newsC", date:"2020-02-13-07-18-23-001"},
// 		children: [] //this is array
// 	};

export async function putComment(newParams) {
	console.log("Creating New comment...");
	try {
		await axios.post(`${config.api.invokeUrl}/comment`, newParams);
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
	var sp = newParams.cat.split(/-(.+)/);
	console.log(sp);
	updateItemsById({ cat: sp[0], date: sp[1], increament: true });
}

// const NewUser = {
// 		id: "ckswn111@hotmail.com",
// 		pass: "123456789"
// 	};

export async function putUser(newUserParam) {
	console.log("Creating New user...");
	try {
		var data = await axios.post(`${config.api.invokeUrl}/login`, newUserParam);
		// console.log("hash: " + data.data)
		return data.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

export async function authenticateUser(userParam) {
	console.log("authenticate a user...");
	try {
		var data = await axios.patch(`${config.api.invokeUrl}/login`, userParam);
		console.log("success logging in? " + data.data);
		return data.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

export async function updateCommentById(params) {
	console.log("attempting to start update parameters");
	// const params = {
	// 	cat: "news",
	// 	date: "2020-02-13", //Unique String
	// 	changedValue: {
	// 		content: "",
	// 		up:""
	// 	}
	// };

	//
	try {
		await axios.patch(`${config.api.invokeUrl}/comment`, params);
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

export function dateFormatted() {
	let current_date = new Date();
	let formatted_date =
		current_date.getFullYear() +
		"-" +
		("0" + (current_date.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + current_date.getDate()).slice(-2) +
		"-" +
		("0" + current_date.getHours()).slice(-2) +
		"-" +
		("0" + current_date.getMinutes()).slice(-2) +
		"-" +
		("0" + current_date.getSeconds()).slice(-2) +
		"-" +
		("0" + current_date.getMilliseconds()).slice(-3);
	formatted_date.substring(-3);
	return formatted_date;
}

export function calulateDayDiff(day) {
	var sp1 = dateFormatted().split("-");
	var sp2 = day.split("-");
	return (
		(new Date(
			parseInt(sp1[0]),
			parseInt(sp1[1]),
			parseInt(sp1[2]),
			parseInt(sp1[3]),
			parseInt(sp1[4]),
			parseInt(sp1[5]),
			parseInt(sp1[6])
		) -
			new Date(
				parseInt(sp2[0]),
				parseInt(sp2[1]),
				parseInt(sp2[2]),
				parseInt(sp2[3]),
				parseInt(sp2[4]),
				parseInt(sp2[5]),
				parseInt(sp2[6])
			)) /
		(1000 * 60 * 60 * 24)
	);
}

//데이타 베이스 배워서 일단 내가 임의로 넣은걸 콘솔로 띄워봤음 (DynamoDB -> Lambda -> API gateWay -> Here)
// load database and console it
// ComponentDidMount
// useEffect(() => {
// 	async function fetch() {
// 		try {
// 			const res = await axios.get(`${config.api.invokeUrl}/post`);
// 			console.log(res.data);
// 		} catch (err) {
// 			console.log(`error recieving data: ${err}`);
// 		}
// 	}
// 	fetch();
// }, []);

// console.log(data);
