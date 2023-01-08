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
                    console.log(response.data);
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
                                fontSize: '2.5em',
                                fontWeight: '600',
                                color: '#000000c7',
                                textAlign: 'center',
                                borderRadius: '10px',
                                padding: '1rem 2rem',
                                width: 'fit-content',
                                margin: 'auto',
                                marginBottom: '4rem',
                            }}
                        >
                            Analytics
                        </h2>
                    </div>
                    {
                        AllFormsData.length > 0 ? 
                            <table className="tab">
                            <thead className="tabthead">
                                <tr className="tabtr">
                                    <th className="tabth">S No.</th>
                                    <th className="tabth">Form Name</th>
                                    <th className="tabth">Created On</th>
                                    <th className="tabth">Edit/Delete</th>
                                    <th className="tabth">Responses/Report</th>
                                    <th className="tabth">Share On Whatsapp</th>
                                </tr>
                            </thead>
                            <tbody className="tabtbody">
                                {
                                    AllFormsData.length > 0 ? AllFormsData.map((item, index) => (
                                        <FormCard
                                            key={item.formId}
                                            sNO={index + 1}
                                            {...item}
                                            // eslint-disable-next-line react/jsx-no-bind
                                            getAllFormData={getAllFormData}
                                        />
                                    )) : <h1 
                                        style={{
                                            margin: '50px 50px',
                                            fontSize: '20px',
                                        }}
                                    >Please create a form first.</h1>
                                }
                            </tbody>
                        </table> : <h1 
                            style={{
                                margin: '50px 50px',
                                fontSize: '20px'
                            }}
                        >Please create a form first.</h1>
                    } 
                </div>
            </div>
        </>
    );
}

export default Analytics;
