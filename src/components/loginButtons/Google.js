import React from 'react'
import GoogleLogin from 'react-google-login'
import Cookies from 'js-cookie'
import { setLIState } from "../../loginState";




function Google({ isLoggedIn}) {
    let fbContent;

    function responseGoogle(res) {

        // console.log(res)
        Cookies.set('accessToken', res.accessToken, { expires: res.expiresIn / 60 / 60 / 24 })
        const params = {
            cat: "loginInfo",
            date: res.profileObj.email,
            accessToken: res.accessToken,
            userId: res.profileObj.googleId,
            name: res.profileObj.name,
            picture: res.profileObj.imageUrl,
            isAuth: true
        };
        // console.log(params)


            setLIState(params);
        
    }
    function responseGoogleError(res) { console.log(res) }

    if (isLoggedIn) {
        fbContent = null;
    } else {
        fbContent = <GoogleLogin
            clientId="212291333783-idjkj6vdfsp6p2o1vv3ns1644ofeu3o9.apps.googleusercontent.com"
            autoLoad={false}
            onFailure={responseGoogleError}
            onSuccess={responseGoogle}
            buttonText="Login with Google"
        />
    }
    return (
        <div>
            {fbContent}
        </div>
    )
}

export default Google;
