import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { updateMission } from '../../redux/Missions/MissionSlice';
import './Mission.css';

const Mission = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const TableHeading = [
    {
      heading: 'Mission',
      id: nanoid(),
    },
    {
      heading: 'Description',
      id: nanoid(),
    },
    {
      heading: 'Status',
      id: nanoid(),
    },
    {
      heading: '',
      id: nanoid(),
    },
  ];

  const missionHandler = (id, joined) => {
    dispatch(updateMission({ id, joined }));
  };

  return (
    <>
      <table className="table">
        <thead className="tableHeading">
          <tr className="tableRow">
            {
              TableHeading.map((eachHeading) => (
                <th className="tableHeading" key={eachHeading.id}>{eachHeading.heading}</th>))
            }
          </tr>
        </thead>
        <tbody className="tableBody">
          {
            state.payload.map((mission) => (
              <tr key={mission.mission_id} className="tableRow">
                <td className="tableData missionName">{mission.mission_name}</td>
                <td className="tableData description">{mission.description}</td>
                <td className="tableData label">
                  {
                    mission.joined
                      ? <span className="activeMember">Active Member</span>
                      : <span className="notAMember">Not A Member</span>
                  }
                </td>
                <td className="tableData">
                  <button type="button" className={`missionButton ${mission.joined ? 'joined' : ''}`} onClick={() => missionHandler(mission.mission_id, mission.joined)}>
                    {
                      mission.joined
                        ? 'Leave Mission'
                        : 'Join Mission'
                    }
                  </button>
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
