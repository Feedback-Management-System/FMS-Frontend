/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import msiLogo from '../../assets/images/user.jpg';
import './Navbar.css';

const Navbar = ({setMainToggle,setNavToggle}) => {

    function adminSidebarToggle() {
        setNavToggle((prev) => !prev);
        setMainToggle((prev) => !prev);
    }

    return (
        <>
              <div className="__topbar">
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <div
                            onClick={adminSidebarToggle}
                            id="__toggle"
                        >
                            <i className="fa-solid fa-bars" />
                        </div>
                        {/* <div>
                            Feedback Management Portal for Maharaja Surajmal
                            Institute (GGSIPU)
                        </div> */}
                        <div className="__user">
                            <h3>Welcome, Ayush Pun</h3>
                            <div className="__imgBx">
                                <img src={msiLogo} alt="User logo" />
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default Navbar;
