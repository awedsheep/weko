import React from 'react'
import Cookie from 'js-cookie'
import { useGlobalState, setLIState } from "../../loginState";



export default function LogoutButton() {
    const [state, setState] = useGlobalState("state");
    return (
        <div>
            <button onClick={eraseCookie}>Log Out</button>
        </div>
    )
    function eraseCookie(){
        Cookie.remove("accessToken")
        setState({...state, isAuth:false})
    }
}
