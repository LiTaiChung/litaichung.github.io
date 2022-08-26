import React from "react";
import { GoogleLogin } from "react-google-login";

export default function GoogleLoginProvider({ children }) {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <GoogleLogin
            clientId={clientId}
            render={(renderProps) =>
                React.cloneElement(children, {
                    onClick: renderProps.onClick
                })
            }
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
}
