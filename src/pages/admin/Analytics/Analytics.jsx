import React, { useState, useEffect } from 'react';
import { Sidebar, Navbar, FormCard } from 'components';
import { toast } from 'react-toastify';
import axios from 'axios';

import './Analytics.css';

function Analytics() {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

    const [AllFormsData, setAllFormsData] = useState([]);

    function getAllFormData() {
        // setIsLoading(true);
        const token = localStorage.getItem('token');

        axios({
            method: 'GET',
            // url: `http://fms-backend-production-ce11.up.railway.app/forms/`,
            url: `http://localhost:5000/forms/`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(async (response) => {
                console.log(response);
                if (response.status === 200) {
                    // setIsLoading(false);
                    setAllFormsData(response.data);
                } else {
                    toast.error('Something went wrong', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    // setIsLoading(false);
                }
            })
            .catch((error) => {
                // setIsLoading(false);
                toast.error('Something went wrong', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                console.error(error);
            });
    }

    useEffect(() => {
        getAllFormData();
    }, []);

    // const formdata = [
    //     {
    //         sNO: 1,
    //         email: 'BCA-5B-2021-22',
    //         viewId: '12348346',
    //         editId: 'dkmc21mvf231vfvsc',
    //         createdAt: '01-07-2021',
    //     },
    //     {
    //         sNO: 2,
    //         email: 'BCA-3A-2021-22',
    //         viewId: '12344353',
    //         editId: 'jkm1mvf231vfvsc',
    //         createdAt: '23-07-2021',
    //     },
    //     {
    //         sNO: 3,
    //         email: 'BCA-5B-2021-22',
    //         viewId: '12345356',
    //         editId: 'aaac21mvf231vfvsc',
    //         createdAt: '01-07-2021',
    //     },
    //     {
    //         sNO: 4,
    //         email: 'BCA-5B-2021-22',
    //         viewId: '123406556',
    //         editId: 'qwmd21mvf231vfvsc',
    //         createdAt: '01-07-2021',
    //     },
    //     {
    //         sNO: 5,
    //         email: 'BCA-5B-2021-22',
    //         viewId: '123543556',
    //         editId: 'plmc21mvf231vfvsm',
    //         createdAt: '01-07-2021',
    //     },
    //     {
    //         sNO: 6,
    //         email: 'BCA-5B-2021-22',
    //         viewId: '123345356',
    //         editId: 'kmhu21mvf931vfvsc',
    //         createdAt: '01-07-2021',
    //     },
    // ];

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
                                <th>Created On</th>
                                <th>Edit Form</th>
                                <th>Responses/Report</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllFormsData.length > 0 &&
                                AllFormsData.map((item, index) => (
                                    <FormCard
                                        key={item.formId}
                                        sNO={index + 1}
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
