import React, { useEffect, useState } from 'react';
import './AdminHomePage.css'
import { gapi } from 'gapi-script';
import LoginGoogleButton from '../../../components/googleLogin/LoginGoogleButton';
import LogoutGoogleButton from '../../../components/googleLogin/LogoutGoogleButton';

const CLIENT_ID =
    '282391974322-87evpe1qamta10q0uuskfqesibdvrtb0.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAcut5XGS5iWvrcAljUIQ2D72KEIb67xVQ';
const SCOPES = 'https://www.googleapis.com/auth/drive';

const AdminHomePage = () => {
    const [formId, setFormId] = useState('');

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES,
            });
        });
    },[]);
    function createForm() {
        const accessToken = gapi.auth.getToken().access_token;

        const newForm = {
            info: {
                title: 'New Form',
            },
        };

        fetch('https://forms.googleapis.com/v1/forms', {
            method: 'POST',
            headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
            body: JSON.stringify(newForm),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFormId(data.formId);
                window.open(
                    `https://docs.google.com/forms/d/${data.formId}/edit`,
                );
            });
    }
    function getFormResponses() {
        const accessToken = gapi.auth.getToken().access_token;

        fetch(`https://forms.googleapis.com/v1/forms/${formId}/responses`, {
            method: 'GET',
            headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    }


    // MenuToggle

    // let toggle = document.querySelector('.toggle');
    // let navigation = document.querySelector('.navigation');
    // let main = document.querySelector('.main');

    // toggle.onclick = function() {
    //     navigation.classList.toggle('active');
    //     main.classList.toggle('active');
    // }


    // add hovered class in selected list item

    // const list = document.querySelectorAll('navigation li');
    // function activeLink() {
    //     list.forEach((item)=>
    //         item.classList.remove('hovered')
    //     )
    //     this.classList.add('hovered');
    // }

    // list.forEach((item) => item.addEventListener('mouseover', activeLink));

    return (
        <div className='adminContainer'>
            <section className=" gap-6" style={{
                    display:"none"
                }}>
                <div className="m-3 text-xl text-gray-dark font-semibold">
                    Feedback Management Portal for Maharaja Surajmal Institute
                    (GGSIPU)
                </div>
                {/* ignore */}
                <div style={{
                    display:"none"
                }}>
                    <LoginGoogleButton />
                    <LogoutGoogleButton />
                    <button
                        type="button"
                        style={{ border: '2px solid red' }}
                        onClick={() => createForm()}
                    >
                        Create Form
                    </button>
                    <button
                        type="button"
                        style={{ border: '2px solid red' }}
                        onClick={() => getFormResponses()}
                    >
                        Get Form Responses
                    </button>
                </div>
                {/* ignore */}
            </section>
            
            <div className='__container'>
                <div className='__navigation'>
                    <ul>
                        <li>
                            <a href="#">
                                <span className='icon'><i className="fa-solid fa-eye"/></span>
                                <span className='title'>FCAM</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='icon'><i className="fa-solid fa-user"/></span>
                                <span className='title'>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='icon'><i className="fa-solid fa-lock"/></span>
                                <span className='title'>Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='icon'><i className="fa-solid fa-right-from-bracket"/></span>
                                <span className='title'>Sign Out</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className='icon'><i className="fa-solid fa-message"/></span>
                                <span className='title'>Message</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* main */}
                <div className="__main">
                    <div className="__topbar">
                        <div className="__toggle">
                            <i className="fa-solid fa-bars"/>
                        </div>
                        <div className="user">
                            {/* <img src="../../assets/images/user.jpg" alt="" /> */}
                        </div>
                    </div>

                    {/* card */}
                    <div className="__cardBox">
                        <div className="__card">
                            <div>
                                <div className="__numbers">1,504</div>
                                <div className="__cardName">Total forms</div>
                            </div>
                            {/* <div className="__iconBx">
                                <i className="fa-solid fa-eye"/>
                            </div> */}
                        </div>
                        <div className="__card">
                            <div>
                                <div className="__numbers">80</div>
                                <div className="__cardName">Recent Responses</div>
                            </div>
                            {/* <div className="__iconBx">
                                icon
                            </div> */}
                        </div>
                        <div className="__card">
                            <div>
                                <div className="__numbers">254</div>
                                <div className="__cardName">Earning</div>
                            </div>
                            {/* <div className="__iconBx">
                                icon
                            </div> */}
                        </div>
                        <div className="__card">
                            <div>
                                <div className="__numbers">12313</div>
                                <div className="__cardName">Sales</div>
                            </div>
                            {/* <div className="__iconBx">
                                icon
                            </div> */}
                        </div>
                    </div>

                    {/* order details list */}
                    <div className="__details">
                        <div className="Totalforms">
                            <div className="__cardHeader">
                                <h2>Total Forms</h2>
                                <a href="#" className='__btn'>View All</a>
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
                                        <td> <span className='status responses'>42</span></td>
                                    </tr>
                                    <tr>
                                        <td>Temp Name</td>
                                        <td>www.editkrchupchaap.com</td>
                                        <td>www.sharekrchupchaap.com</td>
                                        <td> <span className='status responses'>42</span></td>
                                    </tr>
                                    <tr>
                                        <td>Temp Name</td>
                                        <td>www.editkrchupchaap.com</td>
                                        <td>www.sharekrchupchaap.com</td>
                                        <td> <span className='status responses'>42</span></td>
                                    </tr>
                                    <tr>
                                        <td>Temp Name</td>
                                        <td>www.editkrchupchaap.com</td>
                                        <td>www.sharekrchupchaap.com</td>
                                        <td> <span className='status responses'>42</span></td>
                                    </tr>
                                    <tr>
                                        <td>Temp Name</td>
                                        <td>www.editkrchupchaap.com</td>
                                        <td>www.sharekrchupchaap.com</td>
                                        <td> <span className='status responses'>42</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AdminHomePage;

// <!-- api key-->

// <!-- AIzaSyAcut5XGS5iWvrcAljUIQ2D72KEIb67xVQ -->

// <!-- client id -->

// <!-- 282391974322-87evpe1qamta10q0uuskfqesibdvrtb0.apps.googleusercontent.com -->

// <!-- client secret -->

// <!-- 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 -->
