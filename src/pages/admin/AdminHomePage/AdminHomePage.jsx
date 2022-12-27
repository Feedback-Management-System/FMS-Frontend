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
    });
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
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.onclick = function() {
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    }


    // add hovered class in selected list item
    const list = document.querySelectorAll('navigation li');
    function activeLink() {
        list.forEach((item)=>
            item.classList.remove('hovered')
        )
        this.classList.add('hovered');
    }

    list.forEach((item) => item.addEventListener('mouseover', activeLink));

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
            
            <div className='container'>
                <div className='navigation'>
                    <ul>
                        <li>
                            <a href="#">
                                {/* <span className='icon'></span> */}
                                <span className='title'>FCAM</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {/* <span className='icon'></span> */}
                                <span className='title'>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {/* <span className='icon'></span> */}
                                <span className='title'>Password</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {/* <span className='icon'></span> */}
                                <span className='title'>Sign Out</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                {/* <span className='icon'></span> */}
                                <span className='title'>Message</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* main */}
                <div className="main">
                    <div className="topbar">
                        <div className="toggle">
                            {/*ham icon */}
                        </div>
                        <div className="user">
                            {/* <img src="" alt="" /> */}
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
