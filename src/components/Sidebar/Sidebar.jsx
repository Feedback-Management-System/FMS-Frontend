/* eslint-disable */
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

// import { LoginPage, LandingPage } from 'pages';

import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

const Sidebar = ({ router }) => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const location = useLocation();
    return (
        <>
            {location.pathname.includes('admin') ? (
                <h1>Sidebar</h1>
            ) : // <IconContext.Provider value={{ color: 'undefined' }}>
            //     <div className="sidebar">
            //         <Link to="#" className="menu-bars" />
            //         <FaIcons.FaBars onClick={showSidebar} />
            //     </div>
            //     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            //         <ul className="nav-menu-items" onClick={showSidebar}>
            //             <li className="navbar-toggle">
            //                 <Link to="#" className="menu-bars">
            //                     <AiIcons.AiOutlineClose />
            //                 </Link>
            //             </li>
            //             {SidebarData.map((item, index) => {
            //                 return (
            //                     <li key={index} className={item.cName}>
            //                         <Link to={item.path}>
            //                             {item.icon}
            //                             <span>{item.title}</span>
            //                         </Link>
            //                     </li>
            //                 );
            //             })}
            //         </ul>
            //     </nav>
            // </IconContext.Provider>
            null}
        </>
    );
};

export default Sidebar;
