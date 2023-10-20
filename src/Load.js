import React from 'react';

function Load({ staffMembers }) {
  const calculateTotals = (loads) => loads.reduce((acc, load) => acc + load, 0);
  console.log(staffMembers)

  return (
    <div>
      <h4>Load</h4>
      <table>
        <thead>
          <tr>
            <th>Staff Member</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Totals</th>
          </tr>
        </thead>
        <tbody>
          {staffMembers.map((staff) => (
            <tr key={staff.name}>
              <td>{staff.name}</td>
              {staff.loads.map((loads, index) => (
                <td key={index}>{loads}</td>
              ))}
              <td>{calculateTotals(staff.loads)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Load;
