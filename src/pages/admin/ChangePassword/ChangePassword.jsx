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
                <div>ChangePassword</div>
                <main>
                    {/* <div className="page"></div>
                <div className="main-box"></div> */}
                    <div>{/* <span></span> */}</div>
                    <div>
                        <h4>Trouble Signing In</h4>
                    </div>
                    <div>
                        <form method="post">
                            <label htmlFor="">
                                <input type="text" />
                                {/* <span></span> */}
                            </label>
                        </form>
                    </div>
                    <div>
                        {/* <button></button> */}
                        {/* <a href=""></a> */}
                    </div>
                </main>
            </div>
        </>
    );
}

export default ChangePassword;
