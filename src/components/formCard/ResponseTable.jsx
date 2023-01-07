import ResponseTableRow from './ResponseTableRow';

const ResponseTable = ({ responseData, title }) => {
    console.log(responseData);

    // responseData.forEach(element => {

    // });
    return (
        <table className="reportTable">
            <thead>
                <tr>
                    <th
                        style={{
                            fontSize: '2rem',
                        }}
                        className="head"
                        colSpan="12"
                    >
                        {title}
                    </th>
                </tr>
                <tr>
                    <th className="head" rowSpan="2">
                        S. No.{' '}
                    </th>
                    <th className="head" rowSpan="2" colSpan="2">
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
                    <th className="head" rowSpan="2" colSpan="2">
                        {' '}
                        Average Percentage %{' '}
                    </th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(responseData).map((key, i) => (
                    <ResponseTableRow
                        responseData={responseData[key]}
                        faculty={key}
                        key={i}
                        SNo={i + 1}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ResponseTable;
