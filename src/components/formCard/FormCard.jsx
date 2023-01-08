/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import axios from 'axios';
// import { toast } from 'react-toastify';
import SlidingPanel from 'react-sliding-side-panel';
import { Link } from 'react-router-dom';

import './FormCard.css';
// import LoaderButton from 'components/loaderButton/LoaderButton';
import ResponseTable from './ResponseTable';

function FormCard({ sNO, title, formId, responderUri, createdAt, _id, getAllFormData }) {
    // const [isLoading, setIsLoading] = useState(false);
    const [openPanel, setOpenPanel] = useState(false);
    const [responseObject, setResponseObject] = useState({});
    // const [googleResponses, setgoogleResponses] = useState('');

    const generateReport = (data) => {
        setOpenPanel(true);
        console.log(data);

        const obj = {};
        // const dataobj = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const [, key, ...values] of data) {
            if (key in obj) {
                obj[key].push([key, ...values]);
            } else {
                obj[key] = [[key, ...values]];
            }
        }

        console.log(obj);
        const indexArray = [];
        let i = 0;
        const mainObj = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const key in obj) {
            if (i < 1) {
                const questionsArr = obj[key][0];
                console.log(questionsArr);
                questionsArr.forEach((element, index) => {
                    if (element.includes('Name of the')) {
                        indexArray.push(index);
                    }
                });
                console.log(indexArray);
                i++;
            } else {
                i++;
                mainObj[key] = {};
                console.log(obj[key]);
                const reponsesArray = obj[key];
                reponsesArray.forEach((element) => {
                    console.log(element);
                    for (let index = 0; index < indexArray.length; index++) {
                        const mainIdx = indexArray[index];

                        const teachId = `${element[mainIdx]} + ${
                            data[0][mainIdx + 1].split('the')[1]
                        }`;
                        console.log(teachId);

                        if (teachId in mainObj[key]) {
                            const tempArr = [];
                            for (let n = mainIdx + 1; n < mainIdx + 7; n++) {
                                tempArr.push(element[n]);
                            }
                            mainObj[key][teachId].push(tempArr);
                        } else {
                            const tempArr = [];
                            for (let n = mainIdx + 1; n < mainIdx + 7; n++) {
                                tempArr.push(element[n]);
                            }
                            mainObj[key][teachId] = [tempArr];
                        }
                    }
                });
            }
        }
        console.log(obj);
        console.log(mainObj);
        setResponseObject(mainObj);

        console.log(responseObject);
        console.log(Object.keys(mainObj));
    };

    async function getSheetResponses(spreadsheetId, accessToken) {
        const accessTokenn = sessionStorage.getItem('googleAccessToken');
        fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/A1:AZ10000`,
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

    const deleteForm = (deleteFormId) => {
        const token = localStorage.getItem('token');
        console.log(deleteFormId);
        axios({
            method: 'DELETE',
            // url: `http://fms-backend-production-ce11.up.railway.app/forms/${deleteFormId}`,
            url: `http://localhost:5000/forms/${deleteFormId}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response);
                if (response.status !== 500 || response.status !== 400) {
                    getAllFormData();
                }
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    };

    function shareForm() {
        const encodedMessage = encodeURIComponent(responderUri);
        window.open(`https://api.whatsapp.com/send?text=${encodedMessage}`);
    }

    return (
        <>
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
                    <button
                        type="button"
                        className="deleteBtn"
                        onClick={() => {
                            deleteForm(_id);
                        }}
                    >
                        <i className="fa-solid fa-trash" />
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

                <td className="tabtd" data-label="Share">
                    {/* <Link to="/https://api.whatsapp.com/send?text=www.google.com" target="_blank" data-action="share/whatsapp/share"> */}
                    <button
                        type="button"
                        className="shareFormBtn"
                        onClick={() => {
                            shareForm();
                        }}
                    >
                        Share
                    </button>
                    {/* </Link> */}
                </td>
            </tr>
            <SlidingPanel type="right" isOpen={openPanel} size={90}>
                <div>
                    {/* <div
                        style={{
                            display: 'flex',
                            position: 'absolute',
                            top: '70px',
                            left: '20px',
                            width: '100%',
                            height: "fit-content",
                            fontSize: '1.6rem',
                            background: 'transparent',
                            boxShadow: 'rgb(136 136 136) 0px 0px 2px 0px',
                            padding: '5px 15px',
                        }}
                    >
                        <p>test</p>
                    </div> */}
                    <div
                        style={{
                            padding: '70px 20px 20px 20px',
                        }}
                    >
                        {Object.keys(responseObject).map((key, i) => (
                            <ResponseTable
                                responseData={responseObject[key]}
                                key={i}
                                title={key}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
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

// {
//     form : {
//         teacher+sub : [[6 attribute], ...[6 attribute]];
//     }
// }
