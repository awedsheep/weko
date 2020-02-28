import React from "react";
import Cookie from "js-cookie";
import { useGlobalState, setLIState } from "../../state";

export default function LogoutButton() {
	const [state, setState] = useGlobalState("state");
	return (
		<div>
			<p>정말 로그아웃 하시겠습니까?</p>
			<button onClick={eraseCookie}>Log Out</button>
		</div>
	);
	function eraseCookie() {
		Cookie.remove("accessToken");
		setState({ ...state, isAuth: false });
	}
}
