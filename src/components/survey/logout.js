import React from "react";
import { GoogleLogout } from 'react-google-login';

const clientID = "185862281568-2hgglps5jv8erpobb8hl9h1i5ikkdps1.apps.googleusercontent.com"

function Logout() {

    const onSuccess = () => {
        console.log("Logout Successfull!")
    }

    return(
        <div id="signOutBUtton">
            <GoogleLogout
                clientId={clientID}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;