import { createGlobalState } from "react-hooks-global-state";
import { updateItemsById } from "./apiCall";


const { setGlobalState, useGlobalState } = createGlobalState({
	cat: "loginInfo",
	date: "email",
	accessToken:"",
	isLoggedIn: false,
	userId: "",
	name: "",
	picture: ""
});

export function setLIState(param) {
    
    setGlobalState("date", param.date);
    setGlobalState("accessToken", param.accessToken);
    setGlobalState("isLoggedIn", param.isLoggedIn);
    setGlobalState("userId", param.userId);
    setGlobalState("name", param.name);
    setGlobalState("picture", param.picture);
    
    let newparam = {
        cat: param.cat,
        date: param.date,
        changedValue: {
                accessToken: param.accessToken,
                name: param.name,
                userId: param.userId,
                picture:param.picture,
                isLoggedIn:true
        }
    }
    console.log(param)
    updateItemsById(newparam);
}

export { useGlobalState};
