import React from 'react'

function Table({tableData=[]}) { // destrctured props i.e props={tableData}
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Reason</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tableData.map((row,i) => (
            <tr key={i}>
              <td>{row.date}</td>
              <td>{row.reason}</td>
              <td>{row.type}</td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table