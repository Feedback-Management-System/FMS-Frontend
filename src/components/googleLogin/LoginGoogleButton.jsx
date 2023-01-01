import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginGoogleButton = ({ checkLoginAndCreateForm }) => {
    const onSuccess = (res) => {
        console.log('Login Success currentUser:', res.profileObj);
        console.log(checkLoginAndCreateForm);
        // eslint-disable-next-line react/destructuring-assignment
        checkLoginAndCreateForm();
    };

    const onFailure = (res) => {
        console.log('Login failed res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId=" 282391974322-87evpe1qamta10q0uuskfqesibdvrtb0.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy="single_host_origin"
            />
        </div>
    );
};

export default LoginGoogleButton;
