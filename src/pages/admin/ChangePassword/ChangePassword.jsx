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
            </div>
        </>
    );
}

export default ChangePassword;
