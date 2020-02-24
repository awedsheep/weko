import React from 'react'
import InstagramLogin from 'react-instagram-login'
import Cookies from 'js-cookie'
import { setLIState } from "../../loginState";




function Instagram({ isLoggedIn}) {
    let fbContent;

    function responseGoogle(res) {

        console.log(res)
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


            // setLIState(params);
        
    }
 
    if (isLoggedIn) {
        fbContent = null;
    } else {
        fbContent = <InstagramLogin
            clientId="206045957177362"
            autoLoad={false}
            onSuccess={responseGoogle}
            buttonText="Login with Instagram"
        />
    }
    return (
        <div>
            {fbContent}
        </div>
    )
}

export default Instagram;
