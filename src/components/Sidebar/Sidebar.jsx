/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';

// import { LoginPage, LandingPage } from 'pages';

import './Sidebar.css';

const Sidebar = ({ navToggle }) => {
    const SideBarPathIndex = {
        '/admin/dashboard': 0,
        '/admin/analytics': 1,
        '/admin/change-password': 2,
        '/admin/report-bug': 3,
    };
    // eslint-disable-next-line
    const [selectedOption, setSelectedOption] = useState(
        SideBarPathIndex[window.location.pathname],
    );

    const logout = () => {
        // toast.success('Logged out Successfully', {
        //     position: toast.POSITION.BOTTOM_RIGHT,
        // });
        localStorage.removeItem('token');
    };
    return (
        <>
            <div className={navToggle ? '__navigation active' : '__navigation'}>
                <ul>
                    <li>
                        <a>
                            <span className="icon">
                                <i className="fa-solid fa-eye" />
                            </span>
                            <span
                                className="title"
                                style={{
                                    fontSize: '2rem',
                                }}
                            >
                                FCAM
                            </span>
                        </a>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <span className="icon">
                                <i className="fa-solid fa-user" />
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/analytics">
                            <span className="icon">
                                <i className="fa-solid fa-lock" />
                            </span>
                            <span className="title">Analytics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/change-password">
                            <span className="icon">
                                <i className="fa-solid fa-lock" />
                            </span>
                            <span className="title">Change Password</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/report-bug">
                            <span className="icon">
                                <i className="fa-solid fa-message" />
                            </span>
                            <span className="title">Report a Bug</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={logout}>
                            <span className="icon">
                                <i className="fa-solid fa-right-from-bracket" />
                            </span>
                            <span className="title">Sign Out</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
