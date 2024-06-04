import React from "react";
import { GoogleLogin } from 'react-google-login';
import { C_ID, A_KEY, SCOP } from './config';


const CLIENT_ID = {C_ID}
const API_KEY = {A_KEY}
const SCOPES = {SCOP}

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
                clientId={C_ID}
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