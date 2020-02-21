import { createGlobalState } from "react-hooks-global-state";
const initialState = { currentNav: "home", name: "" };
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
export { useGlobalState };
