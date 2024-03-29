/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
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
import { Bar, Pie } from 'react-chartjs-2';

import {
    Sidebar,
    Navbar,
    GoogleLoginModal,
    LoginGoogleButton,
    LogoutGoogleButton,
} from 'components';

import './AdminHomePage.css';
import { gapi } from 'gapi-script';
import Loader from 'components/loader/Loader';
import { restUrl } from '../../../endpoints';
import TemplateFormArray from './FormTemplateArray';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const SCOPES = 'https://www.googleapis.com/auth/drive';

const AdminHomePage = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [mainToggle, setMainToggle] = useState(false);

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
    const [totalFormsCount, settotalFormsCount] = useState(0);
    const [recentResponsesCount, setrecentResponsesCount] = useState(0);
    const [recentFormResponse, setRecentFormResponse] = useState({});
    const [pageLoaded, setpageLoaded] = useState(false);

    const token = localStorage.getItem('token');

    const formResponseObject = {
        five: '',
        four: '',
        three: '',
        two: '',
        one: '',
    };

    function getFormResponses(reportFormId) {
        const accessToken = gapi.auth.getToken().access_token;

        fetch(
            `https://forms.googleapis.com/v1/forms/${reportFormId}/responses`,
            {
                method: 'GET',
                headers: new Headers({
                    Authorization: `Bearer ${accessToken}`,
                }),
            },
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.responses.forEach((element) => {
                    console.log(element.answers);
                    // eslint-disable-next-line no-restricted-syntax
                    for (const key in element.answers) {
                        if (element.answers) {
                            const val =
                                element.answers[key].textAnswers.answers[0]
                                    .value;
                            switch (val) {
                                case '5':
                                    formResponseObject.five++;
                                    break;
                                case '4':
                                    formResponseObject.four++;
                                    break;
                                case '3':
                                    formResponseObject.three++;
                                    break;
                                case '2':
                                    formResponseObject.two++;
                                    break;
                                case '1':
                                    formResponseObject.one++;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    console.log(formResponseObject);
                    setRecentFormResponse(formResponseObject);
                });
                setrecentResponsesCount(data.responses?.length);
                if (data.responses) {
                    console.log(data.responses);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setpageLoaded(true);
            });
    }

    function getAllFormData() {
        // setIsLoading(true);

        axios({
            method: 'GET',
            // url: `http://fms-backend-production-ce11.up.railway.app/forms/`,
            url: `${restUrl}/forms/`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(async (response) => {
                console.log(response);
                if (response.status === 200) {
                    // setIsLoading(false);
                    console.log(response.data[response.data.length - 1]);
                    getFormResponses(
                        response.data[response.data.length - 1]?.formId,
                    );
                    settotalFormsCount(response.data?.length);
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
        gapi.load('client:auth2', () => {
            gapi.client
                .init({
                    apiKey: API_KEY,
                    clientId: CLIENT_ID,
                    scope: SCOPES,
                })
                .then(() => {
                    // console.log(gapi.auth?.getToken()?.access_token);
                    sessionStorage.setItem(
                        'googleAccessToken',
                        gapi.auth?.getToken()?.access_token,
                    );
                    getAllFormData();
                });
        });
    }, []);
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
                    data: [
                        +recentFormResponse.five,
                        +recentFormResponse.four,
                        +recentFormResponse.three,
                        +recentFormResponse.two,
                        +recentFormResponse.one,
                    ],
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
    }, [recentFormResponse]);

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

    function saveFormDataToBackend(responderUri, title, formId) {
        axios({
            method: 'POST',
            // url: `http://fms-backend-production-ce11.up.railway.app/forms`,
            url: `${restUrl}/forms`,
            data: {
                responderUri,
                title,
                formId,
            },
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

    async function createFormTemplate(formId, title, responderUri) {
        const accessToken = gapi.auth.getToken().access_token;
        const update = {
            requests: TemplateFormArray,
            includeFormInResponse: false,
        };

        await fetch(
            `https://forms.googleapis.com/v1/forms/${formId}:batchUpdate`,
            {
                method: 'POST',
                headers: new Headers({
                    Authorization: `Bearer ${accessToken}`,
                }),
                body: JSON.stringify(update),
            },
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                console.log(data);
                saveFormDataToBackend(responderUri, title, formId);
                window.open(`https://docs.google.com/forms/d/${formId}/edit`);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    async function createForm(formName) {
        const accessToken = gapi.auth.getToken().access_token;

        const newForm = {
            info: {
                title: formName,
                document_title: formName,
            },
        };

        await fetch('https://forms.googleapis.com/v1/forms', {
            method: 'POST',
            headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
            body: JSON.stringify(newForm),
        })
            .then((response) => {
                return response.json();
            })
            .then(async (data) => {
                // console.log(data);

                await createFormTemplate(
                    data.formId,
                    data.info.title,
                    data.responderUri,
                );
                document.getElementById('modal-btn').checked = false;
                getAllFormData();
            });
    }

    const pieData = {
        labels: [
            'Communication Skills',
            'Interactive Approach',
            'Subject knowledge',
            'Covers all topics',
            'Punctuality',
            'Control over class',
        ],
        datasets: [
            {
                // label: 'Parameters',
                data: [60, 60, 60, 60, 60, 60],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132,  1)',
                    'rgba(75, 192, 192,  1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 120, 21, 1)',
                ],
                borderColor: [
                    'rgba(54, 162, 235,  1)',
                    'rgba(255, 206, 86,  1)',
                    'rgba(255, 99, 132,  1)',
                    'rgba(75, 192, 192,  1)',
                    'rgba(153, 102, 255,  1)',
                    'rgba(255, 120, 21, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Parameters',
            },
        },
    };

    const loaderStyle = {
        width: '100%',
        height: `calc(100vh - 90px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        verticalAlign: 'top',
        background: '#ffffff',
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
                        // onClick={() => getFormResponses()}
                    >
                        Get Form Responses
                    </button>
                </div>
                {/* ignore */}
            </section>

            <div className="__container">
                <Sidebar navToggle={navToggle} />
                <div className={mainToggle ? '__main active' : '__main'}>
                    <Navbar
                        setNavToggle={setNavToggle}
                        setMainToggle={setMainToggle}
                    />

                    {pageLoaded ? (
                        <>
                            <div className="hero__section">
                                <div className="__cardBox">
                                    <div className="__card">
                                        <div>
                                            <div className="__numbers">
                                                {totalFormsCount || '0'}
                                            </div>
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
                                            <div className="__numbers">
                                                {recentResponsesCount || '0'}
                                            </div>
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
                //     style={{
                //         border: '2px solid red',
                //     }}
                //     type="button"
                //     onClick={getFormResponses}
                // >
                //     get responses
                // </button> */}
                            <div className="graphBox">
                                <div className="__box">
                                    <Pie options={pieOptions} data={pieData} />
                                </div>
                                <div className="__box">
                                    <Bar
                                        options={chartOptions}
                                        data={chartData}
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <Loader Style={loaderStyle} />
                    )}
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
