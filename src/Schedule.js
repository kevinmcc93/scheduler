import React from 'react';

function Schedule({ scheduleData, handleStaffSelection, staffMembers }) {
  const shifts = [
    'Morning UpStairs',
    'Morning Down Stairs',
    'Morning Parking Lot',
    'Lunch A',
    'Lunch B',
    'Lunch C',
    'Lunch D',
    'Afternoon UpStairs',
    'Afternoon Down Stairs',
    'Afternoon Parking Lot',
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  return (
    <div>
      <h4>Schedule</h4>
      <table className='schedule-table'>
        <thead>
          <tr>
            <th></th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift) => (
            <tr key={shift}>
              <td>{shift}</td>
              {days.map((day) => (
                <td key={`${shift}-${day}`}>
                  <select
                    className='schedule-select'
                    value={scheduleData[day][shift].assignedStaff}
                    onChange={(e) => handleStaffSelection(day, shift, e.target.value)}
                  >
                    <option value="">x</option>
                    {staffMembers.map((staff) => (
                      <option key={staff.name} value={staff.name}>
                        {staff.name}
                      </option>
                    ))}
                  </select>
                </td>
              ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )

}

export default Schedule;
