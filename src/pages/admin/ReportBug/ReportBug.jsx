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
                <main>
                    <div className="reportABugContainer">
                        <div className="box">
                            <form
                                action=""
                                method=""
                                name="reportABugForm"
                                id="reportABugForm"
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
                                        value="sachdevaabu30@gmail.com"
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
