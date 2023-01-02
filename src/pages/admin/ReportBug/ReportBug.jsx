import React, { useState } from 'react';
import axios from 'axios';
import { Sidebar, Navbar } from 'components';
import './ReportBug.css';

function ReportBug() {
    const [bugReport, setBugReport] = useState('');
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user'));

    function sendBugReport(e) {
        e.preventDefault();
        axios({
            method: 'POST',
            url: `http://localhost:5000/users/reportBugs`,
            data: { description: bugReport },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

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
                <main>
                    <div className="reportABugContainer">
                        <div className="box">
                            <form
                                name="reportABugForm"
                                id="reportABugForm"
                                onSubmit={sendBugReport}
                            >
                                <h2 className="title">Give your Feedback</h2>

                                <div className="emails">
                                    <label
                                        className="inputLabel"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="yourEmail"
                                        name="yourEmail"
                                        value={userData?.email}
                                        disabled
                                    />
                                </div>

                                <div className="feedback">
                                    <label
                                        className="inputLabel"
                                        htmlFor="feedback"
                                    >
                                        Feedback
                                    </label>
                                    <textarea
                                        name="message"
                                        id="feedback"
                                        cols="150"
                                        rows="8"
                                        value={bugReport}
                                        onChange={(e) => {
                                            setBugReport(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="buttonSubmit">
                                    <button
                                        type="submit"
                                        id="submitBtn"
                                        className="submitBtn"
                                    >
                                        <span>Submit</span>
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

export default ReportBug;
