import React, { useState } from 'react';
import { Sidebar, Navbar } from 'components';
import './ReportBug.css';

function ReportBug() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);
    return (
        <>
            {/* sidebar */}
            <Sidebar navToggle={navToggle} />
            <div
                className={
                    mainToggle ? 'ReportBugMain active' : 'ReportBugMain'
                }
            >
                {/* navbar */}
                <Navbar
                    setNavToggle={setNavToggle}
                    setMainToggle={setMainToggle}
                />
                <div>ReportBug</div>
            </div>
        </>
    );
}

export default ReportBug;
