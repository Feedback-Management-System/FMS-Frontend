import React, { useState } from 'react';
import { Sidebar, Navbar } from 'components';
import './Analytics.css';

function Analytics() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

    return (
        <>
            {/* sidebar */}
            <Sidebar navToggle={navToggle} />
            <div
                className={
                    mainToggle ? 'AnalyticsMain active' : 'AnalyticsMain'
                }
            >
                {/* navbar */}
                <Navbar
                    setNavToggle={setNavToggle}
                    setMainToggle={setMainToggle}
                />

                {/* order details list */}
                <div className="__details">
                    <div className="Totalforms">
                        <div className="__cardHeader">
                            <h2>Total Forms</h2>
                            <a href="#" className="__btn">
                                View All
                            </a>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Form Name</td>
                                    <td>Edit Link</td>
                                    <td>Sharable Link</td>
                                    <td>Responses</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Temp Name</td>
                                    <td>www.editkrchupchaap.com</td>
                                    <td>www.sharekrchupchaap.com</td>
                                    <td>
                                        {' '}
                                        <span className="status responses">
                                            42
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Temp Name</td>
                                    <td>www.editkrchupchaap.com</td>
                                    <td>www.sharekrchupchaap.com</td>
                                    <td>
                                        {' '}
                                        <span className="status responses">
                                            42
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Temp Name</td>
                                    <td>www.editkrchupchaap.com</td>
                                    <td>www.sharekrchupchaap.com</td>
                                    <td>
                                        {' '}
                                        <span className="status responses">
                                            42
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Temp Name</td>
                                    <td>www.editkrchupchaap.com</td>
                                    <td>www.sharekrchupchaap.com</td>
                                    <td>
                                        {' '}
                                        <span className="status responses">
                                            42
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Temp Name</td>
                                    <td>www.editkrchupchaap.com</td>
                                    <td>www.sharekrchupchaap.com</td>
                                    <td>
                                        {' '}
                                        <span className="status responses">
                                            42
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Analytics;
