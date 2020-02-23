import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'
import Cookies from 'js-cookie'
import { putPost } from '../../apiCall'
import App from '../../App'
import { useGlobalState, setLIState } from "../../loginState";




function Facebook({ isLoggedIn, email, name, picture }) {
    let fbContent;
    function componentClicked() { console.log('clicked') }
    function responseFacebook(res) {
        if (res.status !== "not_authorized") {
        //    console.log(res)
            Cookies.set('accessToken', res.accessToken, { expires: res.expiresIn / 60 / 60 / 24 })
            const params = {
                cat: "loginInfo",
                date: res.email,
                accessToken: res.accessToken,
                userId: res.userId,
                name: res.name,
                picture: res.picture.data.url,
                isAuth: true
            };
            
            setLIState(params);
        }
    }

    if (isLoggedIn) {
    // fbContent = <div><img src={picture} /><h3>{name}</h3>{" " + email}</div>
    fbContent = null;
    } else {
        fbContent = <FacebookLogin
            appId="198926918154851"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
    
        />
    }
    return (
        <div>
            {fbContent}
        </div>
    )
}

export default Facebook;
