/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    RadialLinearScale,
} from 'chart.js';
import { Bar, PolarArea } from 'react-chartjs-2';

import {
    Sidebar,
    Navbar,
    GoogleLoginModal,
    LoginGoogleButton,
    LogoutGoogleButton,
} from 'components';

import './AdminHomePage.css';
import { gapi } from 'gapi-script';

const CLIENT_ID =
    '282391974322-87evpe1qamta10q0uuskfqesibdvrtb0.apps.googleusercontent.com';
const API_KEY = 'AIzaSyAcut5XGS5iWvrcAljUIQ2D72KEIb67xVQ';
const SCOPES = 'https://www.googleapis.com/auth/drive';

const AdminHomePage = () => {
    const [formId, setFormId] = useState('');

    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                scope: SCOPES,
            });
        });
    }, []);

    // const myPromise = new Promise(function (myResolve, myReject) {
    //     const token = gapi.auth?.getToken()?.access_token;

    //     myResolve(token); // when successful
    //     myReject(); // when error
    // });

    // myPromise.then(function (token) {
    //     console.log(token);
    // });

    async function getAccessToken() {
        const accessToken = gapi.auth?.getToken()?.access_token;
        return accessToken;
    }

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
                console.log(data);
                setFormId(data.formId);
                document.getElementById('modal-btn').checked = false;
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

    // function adminSidebarToggleMain() {
    //     setMainToggle((prev) => !prev);
    // navigation.classList.toggle('active');
    // main.classList.toggle('active');
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        RadialLinearScale,
    );

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: [
                'Five Star',
                'Four Star',
                'Three Star',
                'Two Star',
                'One Star',
            ],
            datasets: [
                {
                    label: ['Rating'],
                    data: [12, 30, 29, 39, 10],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                },
            ],
        });

        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Recent Form Responses',
                },
            },
        });
    }, []);

    const pieData = {
        labels: [
            'Five Star',
            'Four Star',
            'Three Star',
            'Two Star',
            'One Star',
        ],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 6, 23, 21, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="adminContainer">
            <section
                className=" gap-6"
                style={{
                    display: 'none',
                }}
            >
                <div className="m-3 text-xl text-gray-dark font-semibold">
                    Feedback Management Portal for Maharaja Surajmal Institute
                    (GGSIPU)
                </div>
                {/* ignore */}
                <div
                    style={{
                        display: 'none',
                    }}
                >
                    {/* <LoginGoogleButton />
                    <LogoutGoogleButton /> */}
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

            <div className="__container">
                {/* sidebar */}
                <Sidebar navToggle={navToggle} />
                {/* main */}
                <div className={mainToggle ? '__main active' : '__main'}>
                    {/* navbar */}
                    <Navbar
                        setNavToggle={setNavToggle}
                        setMainToggle={setMainToggle}
                    />

                    {/* card */}
                    <div className="hero__section">
                        <div className="__cardBox">
                            <div className="__card">
                                <div>
                                    <div className="__numbers">1,504</div>
                                    <div className="__cardName">
                                        Total forms
                                    </div>
                                </div>
                                <div className="__iconBx">
                                    <i className="fa-solid fa-layer-group" />
                                </div>
                            </div>
                            <div className="__card">
                                <div>
                                    <div className="__numbers">80</div>
                                    <div className="__cardName">
                                        Recent Responses
                                    </div>
                                </div>
                                <div className="__iconBx">
                                    <i className="fa-solid fa-user-clock" />
                                </div>
                            </div>
                        </div>
                        <GoogleLoginModal
                            getAccessToken={getAccessToken}
                            createForm={createForm}
                        />
                    </div>
                    {/* <button
                        style={{
                            border: '2px solid red',
                        }}
                        type="button"
                        onClick={getFormResponses}
                    >
                        get responses
                    </button> */}

                    {/* charts */}
                    <div className="graphBox">
                        <div className="__box">
                            {/* <Pie data={pieData} /> */}
                            <PolarArea data={pieData} />
                        </div>
                        <div className="__box">
                            <Bar options={chartOptions} data={chartData} />
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
