import React from "react";
import { GoogleLogin } from 'react-google-login';

const clientID = "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success! Current user: ", res.profileobj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! ", res);

    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}

export default Login;