// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

function FormCard({ SNO, email, editId, createdAt }) {
    // const [isLoading, setIsLoading] = useState(false);

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
        <tr>
            <td data-label="SNO">{SNO}</td>
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
                <button type="button" className="reportBtn">
                    Generate Report
                </button>
            </td>
        </tr>
    );
}

export default FormCard;
