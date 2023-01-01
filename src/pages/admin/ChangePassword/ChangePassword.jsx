/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Sidebar, Navbar } from 'components';
import './ChangePassword.css';

function ChangePassword() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);
    const [oldpasswordType, setOldPasswordType] = useState(true);
    const [newpasswordType, setNewPasswordType] = useState(true);
    const [confirmpasswordType, setConfirmPasswordType] = useState(true);

    const togglePassword = (type) => {
        if (type === 'oldpasswordType') {
            setOldPasswordType((prevType) => !prevType);
        }
        if (type === 'newpasswordType') {
            setNewPasswordType((prevType) => !prevType);
        }
        if (type === 'confirmpasswordType') {
            setConfirmPasswordType((prevType) => !prevType);
        }
    };

    return (
        <>
            {/* sidebar */}
            <Sidebar navToggle={navToggle} />
            <div
                className={
                    mainToggle
                        ? 'ChangePasswordMain active'
                        : 'ChangePasswordMain'
                }
            >
                {/* navbar */}
                <Navbar
                    setNavToggle={setNavToggle}
                    setMainToggle={setMainToggle}
                />
                <main>
                    <div className="changePasswordContainer">
                        <div className="box">
                            <form
                                name="changePasswordForm"
                                id="changePasswordForm"
                            >
                                <h2 className="formTitle">Change Password</h2>

                                <div className="passwords">
                                    <label
                                        className="inputLabel"
                                        htmlFor="oldpassword"
                                    >
                                        Old Password
                                    </label>
                                    <input
                                        type={
                                            oldpasswordType
                                                ? 'password'
                                                : 'text'
                                        }
                                        id="oldPassword"
                                        name="oldPassword"
                                        required
                                    />
                                    {oldpasswordType ? (
                                        <i
                                            className="fa-solid fa-eye-slash"
                                            onClick={() => {
                                                togglePassword(
                                                    'oldpasswordType',
                                                );
                                            }}
                                        />
                                    ) : (
                                        <i
                                            className="fa-solid fa-eye"
                                            onClick={() => {
                                                togglePassword(
                                                    'oldpasswordType',
                                                );
                                            }}
                                        />
                                    )}
                                    {/* <i className="fa-solid fa-eye" /> */}
                                </div>

                                <div className="passwords">
                                    <label
                                        className="inputLabel"
                                        htmlFor="newPassword"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        type={
                                            newpasswordType
                                                ? 'password'
                                                : 'text'
                                        }
                                        id="newPassword"
                                        name="newPassword"
                                    />
                                    {newpasswordType ? (
                                        <i
                                            className="fa-solid fa-eye-slash"
                                            onClick={() => {
                                                togglePassword(
                                                    'newpasswordType',
                                                );
                                            }}
                                        />
                                    ) : (
                                        <i
                                            className="fa-solid fa-eye"
                                            onClick={() => {
                                                togglePassword(
                                                    'newpasswordType',
                                                );
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="passwords">
                                    <label
                                        className="inputLabel"
                                        htmlFor="confirmPassword"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type={
                                            confirmpasswordType
                                                ? 'password'
                                                : 'text'
                                        }
                                        id="confirmPassword"
                                        name="confirmPassword"
                                    />
                                    {confirmpasswordType ? (
                                        <i
                                            className="fa-solid fa-eye-slash"
                                            onClick={() => {
                                                togglePassword(
                                                    'confirmpasswordType',
                                                );
                                            }}
                                        />
                                    ) : (
                                        <i
                                            className="fa-solid fa-eye"
                                            onClick={() => {
                                                togglePassword(
                                                    'confirmpasswordType',
                                                );
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="buttonContinue">
                                    <button
                                        type="submit"
                                        id="submitButton"
                                        className="submitButton"
                                    >
                                        <span>Save</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default ChangePassword;
