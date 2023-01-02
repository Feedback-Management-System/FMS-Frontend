/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { gapi } from 'gapi-script';
import SlidingPanel from 'react-sliding-side-panel';

import './FormCard.css';

function FormCard({ sNO, title, formId, createdAt }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [openPanel, setOpenPanel] = useState(false);

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
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const generateReport = (reportFormId) => {
        setOpenPanel(true);
        getFormResponses(reportFormId);

        // axios({
        //     method: 'PATCH',
        //     url: `${restUrl}/api/v1/errReport/change/status`,
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //     },
        //     data: {
        //         id: id,
        //         status: newStatus,
        //     },
        // })
        //     .then(async (response) => {
        //         if (response.data.status.code == 200) {
        //             await callBug();
        //             toast.info(`Report Bug Status Updated`, {
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //             setIsLoading(false);
        //         } else {
        //             toast.error(`Something went wrong`, {
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //             setIsLoading(false);
        //         }
        //     })
        //     .catch((error) => {
        //         toast.error(`Something went wrong`, {
        //             position: toast.POSITION.BOTTOM_RIGHT,
        //         });
        //         setIsLoading(false);
        //         console.error(error);
        //     });
    };

    const editForm = (editFormId) => {
        window.open(
            `https://docs.google.com/forms/d/${editFormId}/edit`,
            '_blank',
        );
    };

    // const token = localStorage.getItem('token');

    // function changestatus(e) {
    //     const newStatus = e.target.value;
    //     setIsLoading(true);

    //     axios({
    //         method: 'PATCH',
    //         url: `${restUrl}/api/v1/errReport/change/status`,
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //         data: {
    //             id: id,
    //             status: newStatus,
    //         },
    //     })
    //         .then(async (response) => {
    //             if (response.data.status.code == 200) {
    //                 await callBug();
    //                 toast.info(`Report Bug Status Updated`, {
    //                     position: toast.POSITION.BOTTOM_RIGHT,
    //                 });
    //                 setIsLoading(false);
    //             } else {
    //                 toast.error(`Something went wrong`, {
    //                     position: toast.POSITION.BOTTOM_RIGHT,
    //                 });
    //                 setIsLoading(false);
    //             }
    //         })
    //         .catch((error) => {
    //             toast.error(`Something went wrong`, {
    //                 position: toast.POSITION.BOTTOM_RIGHT,
    //             });
    //             setIsLoading(false);
    //             console.error(error);
    //         });
    // }

    return (
        <>
            <tr>
                <td data-label="S No.">{sNO}</td>
                <td data-label="Form Name" className="tab-title">
                    {title}
                </td>
                <td data-label="Created On">{createdAt?.split('T')[0]}</td>
                <td data-label="Edit Form">
                    <button
                        type="button"
                        className="editBtn"
                        onClick={() => {
                            editForm(formId);
                        }}
                    >
                        Edit Form
                    </button>
                </td>
                <td data-label="Responses">
                    <button
                        type="button"
                        className="reportBtn"
                        onClick={() => {
                            generateReport(formId);
                        }}
                    >
                        Generate Report
                    </button>
                </td>
            </tr>
            <SlidingPanel type="right" isOpen={openPanel} size={70}>
                <div>
                    <div
                        style={{
                            padding: '70px 20px 20px 20px',
                        }}
                    >
                        My Panel Content
                        <table className="reportTable">
                            <thead>
                                <tr>
                                    <th className="head" rowSpan="2">
                                        S. No.{' '}
                                    </th>
                                    <th
                                        className="head"
                                        rowSpan="2"
                                        colSpan="2"
                                    >
                                        {' '}
                                        Faculty{' '}
                                    </th>
                                    <th className="head">Subject </th>
                                    <th className="head"> Attributes </th>
                                    <th className="head" colSpan="1">
                                        {' '}
                                        Total Marks{' '}
                                    </th>
                                    <th className="head" colSpan="2">
                                        {' '}
                                        Maximum Marks{' '}
                                    </th>
                                    <th className="head" colSpan="2">
                                        {' '}
                                        Marks Scored in %{' '}
                                    </th>
                                    <th
                                        className="head"
                                        rowSpan="2"
                                        colSpan="2"
                                    >
                                        {' '}
                                        Average Percentage %{' '}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="data" rowSpan="6">
                                        {' '}
                                        1{' '}
                                    </td>
                                    <td
                                        className="data"
                                        rowSpan="6"
                                        colSpan="2"
                                    >
                                        Name1
                                    </td>
                                    <td className="data" rowSpan="6">
                                        Subject1
                                    </td>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                    <td className="data" rowSpan="6">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                </tr>
                                <tr>
                                    <td className="data">
                                        Subject Knowledge(A)
                                    </td>
                                    <td className="data">60</td>
                                    <td className="data" colSpan="2">
                                        60
                                    </td>
                                    <td className="data" colSpan="2">
                                        100%
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button
                        type="button"
                        style={{
                            position: 'absolute',
                            top: '20px',
                            left: '25px',
                            fontSize: '1.6rem',
                            background: 'transparent',
                            boxShadow: 'rgb(136 136 136) 0px 0px 2px 0px',
                            padding: '5px 15px',
                            cursor: 'pointer',
                            borderRadius: '10px',
                        }}
                        onClick={() => setOpenPanel(false)}
                    >
                        ✖
                    </button>
                </div>
            </SlidingPanel>
        </>
    );
}

export default FormCard;
