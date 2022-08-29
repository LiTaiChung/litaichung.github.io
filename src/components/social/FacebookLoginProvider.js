import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import { authLogin, authUser } from "store/actions/auth";

export default function FacebookLoginProvider({ children }) {
    const appId = process.env.REACT_APP_FACEBOOK_APP_ID;
    const dispatch = useDispatch();

    const responseFacebook = (response) => {
        dispatch(authLogin({ access_token: response.accessToken }));
        dispatch(
            authUser({
                name: response.name,
                avatar: response.picture.data.url,
            })
        );
        console.log(response);
    };
    
    return (
        <FacebookLogin
            appId={appId}
            autoLoad={false}
            fields="name,email,picture"
            scope="public_profile"
            callback={responseFacebook}
            render={(renderProps) => 
                React.cloneElement(children, {
                    onClick: () => renderProps.onClick
                })
            }
        />
    );
}
