/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
import SlidingPanel from 'react-sliding-side-panel';

import './FormCard.css';

function FormCard({ sNO, title, formId, createdAt }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [openPanel, setOpenPanel] = useState(false);
    // const [googleResponses, setgoogleResponses] = useState('');

    const generateReport = (data) => {
        setOpenPanel(true);
        console.log(data);

        const obj = {};
        // const dataobj = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const [value1, key, ...values] of data) {
            if (key in obj) {
                obj[key].push([value1, ...values]);
            } else {
                obj[key] = [[value1, ...values]];
            }
        }

        // eslint-disable-next-line no-restricted-syntax
        // for (const key in object) {
        //     if (Object.hasOwnProperty.call(object, key)) {
        //         const element = object[key];

        //     }
        // }

        console.log(obj);
    };

    async function getSheetResponses(spreadsheetId, accessToken) {
        const accessTokenn = sessionStorage.getItem('googleAccessToken');
        fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:Z10000`,
            {
                method: 'GET',
                headers: new Headers({
                    Authorization: `Bearer ${accessTokenn}`,
                    'Content-Type': 'application/json',
                }),
            },
        )
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((data) => {
                generateReport(data.values);
            })
            .catch((error) => {
                console.log(error);
            });

        // Make a request to the spreadsheets.values.get method
        // const response = await axios.get(
        //     `https://www.googleapis.com/sheets/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:Z1000`,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${accessToken}`,
        //             'Content-Type': 'application/json',
        //         },
        //     },
        // );

        // // Return the response data
        // return response.data.values;
    }

    function getFormResponses(reportFormId) {
        const accessToken = sessionStorage.getItem('googleAccessToken');

        // console.log(accessToken);
        // const update = {
        //     includeFormInResponse: true,
        //     requests: [
        //         {
        //             updateFormInfo: {
        //                 info: {
        //                     description:
        //                         "Please complete this quiz based on this week's readings for class.",
        //                 },
        //                 updateMask: 'description',
        //             },
        //         },
        //     ],
        // };
        fetch(
            `https://forms.googleapis.com/v1/forms/1K1gb91Plh7rGNFzjuFxYSRakdln5QdshBghhx2oZ-SU`,
            {
                method: 'GET',
                headers: new Headers({
                    Authorization: `Bearer ${accessToken}`,
                }),
                // body: JSON.stringify(update),
            },
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // setgoogleResponses(data);
                console.log(data);
                getSheetResponses(data.linkedSheetId);
                // generateReport(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const editForm = (editFormId) => {
        window.open(
            `https://docs.google.com/forms/d/${editFormId}/edit`,
            '_blank',
        );
    };

    return (
        <>
            <button
                type="button"
                style={{
                    border: '2px solid red',
                }}
                // onClick={() => generateReport()}
            >
                not available
            </button>
            <tr className="tabtr">
                <td className="tabtd" data-label="S No.">
                    {sNO}
                </td>
                <td data-label="Form Name" className="tab-title">
                    {title}
                </td>
                <td className="tabtd" data-label="Created On">
                    {createdAt?.split('T')[0]}
                </td>
                <td className="tabtd" data-label="Edit Form">
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
                <td className="tabtd" data-label="Responses">
                    <button
                        type="button"
                        className="reportBtn"
                        onClick={() => {
                            getFormResponses(formId);
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
                                        Communication Skills(B)
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
                                        Interactive approach and clear doubts(C)
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
                                        Cover all topics(D)
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
                                        Punctuality in taking classes(E)
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
                                        Control over the class(F)
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
