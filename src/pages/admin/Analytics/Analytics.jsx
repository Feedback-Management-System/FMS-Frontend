import React, { useState } from 'react';
import { Sidebar, Navbar, FormCard } from 'components';

import './Analytics.css';

function Analytics() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

    const formdata = [
        {
            sNO: 1,
            email: 'BCA-5B-2021-22',
            viewId: '12348346',
            editId: 'dkmc21mvf231vfvsc',
            createdAt: '01-07-2021',
        },
        {
            sNO: 2,
            email: 'BCA-3A-2021-22',
            viewId: '12344353',
            editId: 'jkm1mvf231vfvsc',
            createdAt: '23-07-2021',
        },
        {
            sNO: 3,
            email: 'BCA-5B-2021-22',
            viewId: '12345356',
            editId: 'aaac21mvf231vfvsc',
            createdAt: '01-07-2021',
        },
        {
            sNO: 4,
            email: 'BCA-5B-2021-22',
            viewId: '123406556',
            editId: 'qwmd21mvf231vfvsc',
            createdAt: '01-07-2021',
        },
        {
            sNO: 5,
            email: 'BCA-5B-2021-22',
            viewId: '123543556',
            editId: 'plmc21mvf231vfvsm',
            createdAt: '01-07-2021',
        },
        {
            sNO: 6,
            email: 'BCA-5B-2021-22',
            viewId: '123345356',
            editId: 'kmhu21mvf931vfvsc',
            createdAt: '01-07-2021',
        },
    ];

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
                {/* <div className="__details">
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
                </div> */}

                {/* analytics */}
                <div className="AnalyticsFormContainer">
                    <div className="AnalyticscardHeader">
                        <h2
                            style={{
                                fontSize: '2em',
                                fontWeight: '600',
                                color: 'var(--white)',
                                textAlign: 'center',
                                background: 'var(--blue)',
                                borderRadius: '20px',
                                padding: '1rem 2rem',
                                width: 'fit-content',
                                margin: 'auto',
                                marginBottom: '4rem',
                                boxShadow: '0 7px 25px rgb(0 0 0 / 8%)',
                            }}
                        >
                            Analytics
                        </h2>
                    </div>
                    <table className="tab">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Form Name</th>
                                <th>Created at</th>
                                <th>Edit Form</th>
                                <th>Responses/Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formdata.length > 0 &&
                                formdata.map((item) => (
                                    <FormCard
                                        key={item.viewId}
                                        // generateReport={generateReport}
                                        {...item}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Analytics;
