import React, { useState } from 'react';
import { Sidebar, Navbar } from 'components';
import './ChangePassword.css';

function ChangePassword() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);
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
                                action=""
                                method=""
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
                                        type="password"
                                        id="oldPassword"
                                        name="oldPassword"
                                        required
                                    />
                                    <i className="fa-solid fa-eye" />
                                </div>

                                <div className="passwords">
                                    <label
                                        className="inputLabel"
                                        htmlFor="newPassword"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                    />
                                    <i className="fa-solid fa-eye" />
                                </div>

                                <div className="passwords">
                                    <label
                                        className="inputLabel"
                                        htmlFor="confirmPassword"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                    />
                                    <i className="fa-solid fa-eye" />
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
