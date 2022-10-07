import React from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

const Mission = () => {
  const state = useSelector((state) => state.missions);
  return (
    <>
      <table className="table">
        <thead className="tableHeading">
          <tr className="tableRow">
            <th className="tableHeading">Mission</th>
            <th className="tableHeading">Description</th>
            <th className="tableHeading">Status</th>
            <th className="tableHeading">{' '}</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {
            state.payload.map((mission) => (
              <tr key={mission.mission_id} className="tableRow">
                <td className="tableData">{mission.mission_name}</td>
                <td className="tableData">{mission.description}</td>
                <td className="tableData">
                  {
                    mission.reserved
                      ? 'Active Member'
                      : 'Not A Member'
                  }
                </td>
                <td className="tableData">
                  <button type="button">Join Missio</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default Mission;
