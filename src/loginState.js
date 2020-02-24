import { createGlobalState } from "react-hooks-global-state";

const initialState = {
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
const { setGlobalState, useGlobalStatelogin } = createGlobalState(initialState);

export { useGlobalStatelogin };
