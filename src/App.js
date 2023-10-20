import React, { useState } from 'react';
import Schedule from './Schedule';
import Load from './Load';

function App() {
  const initialScheduleData = {
    Monday: {
      'Morning UpStairs': { assignedStaff: '' },
      'Morning Down Stairs': { assignedStaff: '' },
      'Morning Parking Lot': { assignedStaff: '' },
      'Lunch A': { assignedStaff: '' },
      'Lunch B': { assignedStaff: '' },
      'Lunch C': { assignedStaff: '' },
      'Lunch D': { assignedStaff: '' },
      'Afternoon UpStairs': { assignedStaff: '' },
      'Afternoon Down Stairs': { assignedStaff: '' },
      'Afternoon Parking Lot': { assignedStaff: '' },
    },
    Tuesday: {
      'Morning UpStairs': { assignedStaff: '' },
      'Morning Down Stairs': { assignedStaff: '' },
      'Morning Parking Lot': { assignedStaff: '' },
      'Lunch A': { assignedStaff: '' },
      'Lunch B': { assignedStaff: '' },
      'Lunch C': { assignedStaff: '' },
      'Lunch D': { assignedStaff: '' },
      'Afternoon UpStairs': { assignedStaff: '' },
      'Afternoon Down Stairs': { assignedStaff: '' },
      'Afternoon Parking Lot': { assignedStaff: '' },
    },
    Wednesday: {
      'Morning UpStairs': { assignedStaff: '' },
      'Morning Down Stairs': { assignedStaff: '' },
      'Morning Parking Lot': { assignedStaff: '' },
      'Lunch A': { assignedStaff: '' },
      'Lunch B': { assignedStaff: '' },
      'Lunch C': { assignedStaff: '' },
      'Lunch D': { assignedStaff: '' },
      'Afternoon UpStairs': { assignedStaff: '' },
      'Afternoon Down Stairs': { assignedStaff: '' },
      'Afternoon Parking Lot': { assignedStaff: '' },
    },
    Thursday: {
      'Morning UpStairs': { assignedStaff: '' },
      'Morning Down Stairs': { assignedStaff: '' },
      'Morning Parking Lot': { assignedStaff: '' },
      'Lunch A': { assignedStaff: '' },
      'Lunch B': { assignedStaff: '' },
      'Lunch C': { assignedStaff: '' },
      'Lunch D': { assignedStaff: '' },
      'Afternoon UpStairs': { assignedStaff: '' },
      'Afternoon Down Stairs': { assignedStaff: '' },
      'Afternoon Parking Lot': { assignedStaff: '' },
    },
    Friday: {
      'Morning UpStairs': { assignedStaff: '' },
      'Morning Down Stairs': { assignedStaff: '' },
      'Morning Parking Lot': { assignedStaff: '' },
      'Lunch A': { assignedStaff: '' },
      'Lunch B': { assignedStaff: '' },
      'Lunch C': { assignedStaff: '' },
      'Lunch D': { assignedStaff: '' },
      'Afternoon UpStairs': { assignedStaff: '' },
      'Afternoon Down Stairs': { assignedStaff: '' },
      'Afternoon Parking Lot': { assignedStaff: '' },
    }
  };

  const [scheduleData, setScheduleData] = useState(initialScheduleData);
  const [staffMembers, setStaffMembers] = useState([
    { name: 'X1', loads: [0, 0, 0, 0, 0] },
    { name: 'X2', loads: [0, 0, 0, 0, 0] },
    { name: 'X3', loads: [0, 0, 0, 0, 0] },
    { name: 'X4', loads: [0, 0, 0, 0, 0] },
    { name: 'X5', loads: [0, 0, 0, 0, 0] },
    { name: 'X6', loads: [0, 0, 0, 0, 0] },
    { name: 'X7', loads: [0, 0, 0, 0, 0] },
  ]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleStaffSelection = (day, shift, selectedStaff) => {
    const updatedScheduleData = { ...scheduleData };
    updatedScheduleData[day][shift].assignedStaff = selectedStaff;
    setScheduleData(updatedScheduleData);
  
    // Map staff members to update the load for the selected day and shift
    const updatedStaffMembers = staffMembers.map((staff) => {
      if (staff.name === selectedStaff) {
        // Create a new object to avoid mutating the original staff member
        const updatedStaff = { ...staff };
        // Find the index of the selected day within the 'days' array
        const dayIndex = days.indexOf(day);
        // Update the load for the selected day and shift
        updatedStaff.loads[dayIndex] += 1; // Increase the load
        return updatedStaff;
      }
      return staff;
    });
  
    setStaffMembers(updatedStaffMembers);
  };
  
  return (
    <div>
      <Schedule
        scheduleData={scheduleData}
        handleStaffSelection={handleStaffSelection}
        staffMembers={staffMembers}
        days={days}
      />
      <Load staffMembers={staffMembers} />
    </div>
  );
}

export default App;
