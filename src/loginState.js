import { createGlobalState } from "react-hooks-global-state";
import { updateItemsById } from "./apiCall";

const initialState = {

    state:{
        cat: "loginInfo",
        date: "email",
        accessToken:"",
        userId: "",
        name: "",
        picture: "",
        isAuth: false
    }
	
};
const { setGlobalState, useGlobalState } = createGlobalState(initialState);




export function setLIState(param) {
    
    setGlobalState("state", (v) => ({...v, date: param.date, accessToken: param.accessToken, userId:param.userId, name:param.name, picture:param.picture, isAuth:param.isAuth}));
    // setGlobalState("accessToken", param.accessToken);
    // setGlobalState("isLoggedIn", param.isLoggedIn);
    // setGlobalState("userId", param.userId);
    // setGlobalState("name", param.name);
    // setGlobalState("picture", param.picture);
    
    let newparam = {
        cat: param.cat,
        date: param.date,
        changedValue: {
                accessToken: param.accessToken,
                name: param.name,
                userId: param.userId,
                picture:param.picture,
        }
    }
    // console.log(param)
    updateItemsById(newparam);
}

export { useGlobalState};
