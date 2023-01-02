/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import SlidingPanel from 'react-sliding-side-panel';

import './FormCard.css';

function FormCard({ sNO, email, editId, createdAt }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [openPanel, setOpenPanel] = useState(false);

    const generateReport = () => {
        setOpenPanel(true);
    };

    // const token = localStorage.getItem('token');

    // let bugColorClass;
    // let openSelect, resolveSelect, wontSelect, other;

    // if (status === 'Open') {
    //     bugColorClass = 'btn btn-danger';
    //     openSelect = 'selected';
    // } else if (status === 'Resolved') {
    //     bugColorClass = 'btn btn-info';
    //     resolveSelect = 'selected';
    // } else if (status === "Won't Fix") {
    //     bugColorClass = 'btn btn-warning';
    //     wontSelect = 'selected';
    // } else {
    //     bugColorClass = 'btn btn-primary';
    //     other = 'selected';
    // }

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
                <td data-label="sNO">{sNO}</td>
                <td data-label="Email" className="tab-email">
                    {email}
                </td>
                <td data-label="Created at">{createdAt}</td>
                <td data-label="editId">
                    <button type="button" className="editBtn">
                        Edit Form
                    </button>
                </td>
                <td data-label="Report">
                    <button
                        type="button"
                        className="reportBtn"
                        onClick={generateReport}
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
                        <table>
                            <thead>
                                <tr>
                                    <th rowSpan="2">S. No. </th>
                                    <th rowSpan="2" colSpan="2">
                                        {' '}
                                        Faculty{' '}
                                    </th>
                                    <th>Subject </th>
                                    <th> Attributes </th>
                                    <th colSpan="1"> Total Marks </th>
                                    <th colSpan="2"> Maximum Marks </th>
                                    <th colSpan="2"> Marks Scored in % </th>
                                    <th rowSpan="2" colSpan="2">
                                        {' '}
                                        Average Percentage %{' '}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan="6"> 1 </td>
                                    <td rowSpan="6" colSpan="2">
                                        Name1
                                    </td>
                                    <td rowSpan="6">Subject1</td>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
                                    <td rowSpan="6">100%</td>
                                </tr>
                                <tr>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
                                </tr>
                                <tr>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
                                </tr>
                                <tr>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
                                </tr>
                                <tr>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
                                </tr>
                                <tr>
                                    <td>Subject Knowledge(A)</td>
                                    <td>60</td>
                                    <td colSpan="2">60</td>
                                    <td colSpan="2">100%</td>
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
