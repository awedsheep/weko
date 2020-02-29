import { createGlobalState } from "react-hooks-global-state";
import { updateItemsById, getItem } from "./apiCall";

const initialState = {
	currentNav: "home",
	name: "",
	loginOpen:false,
	news:[],
	buysell:[],
	forum:[],
	info:[],
	state: {
		cat: "loginInfo",
		date: "email",
		accessToken: "",
		userId: "",
		name: "",
		picture: "",
		isAuth: false
	}
};
const { setGlobalState, useGlobalState } = createGlobalState(initialState);
export const setNavName = s => {
	switch (s) {
		case "news":
			setGlobalState("name", "캐나다소식");
			break;
		case "forum":
			setGlobalState("name", "자유게시판");
			break;
		case "info":
			setGlobalState("name", "정보/팁");
			break;
		case "buysell":
			setGlobalState("name", "온라인장터");
			break;
		default:
			setGlobalState("name", "");
	}
	setGlobalState("currentNav", s);
};

export function setLIState(param) {
	setGlobalState("state", v => ({
		...v,
		date: param.date,
		accessToken: param.accessToken,
		userId: param.userId,
		name: param.name,
		picture: param.picture,
		isAuth: param.isAuth
	}));

	let newparam = {
		cat: param.cat,
		date: param.date,
		changedValue: {
			accessToken: param.accessToken,
			name: param.name,
			userId: param.userId,
			picture: param.picture
		}
	};

	

		
	// console.log(param)
	updateItemsById(newparam);
}

export { useGlobalState };
