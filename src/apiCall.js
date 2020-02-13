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

export const NewNewsItem = {
	number: 133, //integer
	tag: "[Brandon]", //String
	title: "111111", //String
	author: "1313", //String
	date: "2020-02-10", // String
	view: 433, //integer
	body: "<div>anyString</div>",
	replies: ["123", "12", "22"], //array
	cat: "News"
};

// putPost(NewNewsItem);
export async function putPost(newParams) {
	console.log("entered");

	var index = await getItem("News", -1);
	// console.log(index);
	// index = index[0].index;
	const NewNewsItem = {
		id: index,
		...newParams
	};
	try {
		await axios.post(`${config.api.invokeUrl}/post`, NewNewsItem);
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}

	const params = {
		cat: "News",
		id: -1,
		changedValue: {
			index: index + 1
		}
	};
	updateItemsById(params);
}

// getRecentTen("News");
//need to compare with scan.... 2querycalls vs scan
export async function getRecentTen(cat, index) {
	try {
		const res = await axios.get(
			`${config.api.invokeUrl}/post/${cat}/${index}/getrecent`
		);
		// console.log(res);
		return res.data;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

// getItem("News", "123");
export async function getItem(cat, id) {
	console.log("attempting to start get Item or Items from key: cat, id");

	try {
		const res = await axios.get(`${config.api.invokeUrl}/post/${cat}/${id}`);
		// console.log(res.data);
		return res.data[0].index;
	} catch (err) {
		console.log(`error adding data: ${err}`);
	}
}

//아놔 업데이트 기능 구현 너무 어려웠음 ㅠㅠ. 지정된 아이디에 바꾸고 싶은 데이타만 changedValue에 넣어주셈 숫자 상관 없음
// updateItemsById();
export async function updateItemsById(params) {
	console.log("attempting to start update parameters");
	// const params = {
	// 	cat: "News",
	// 	id: "132", //Unique String
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
