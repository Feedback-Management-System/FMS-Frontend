import React from 'react';
import './GoogleLoginModal.css';
import { LoginGoogleButton } from 'components';

const GoogleLoginModal = () => {
    return (
        <>
            <input
                className="modal-btn"
                type="checkbox"
                id="modal-btn"
                name="modal-btn"
            />
            <label htmlFor="modal-btn">Create Form</label>
            <div className="modal">
                <div className="modal-wrap">
                    <p>
                        Click below to login from your google account.
                        <br />
                        <br />
                        <span className="googleLoginButton">
                            <LoginGoogleButton />
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GoogleLoginModal;
