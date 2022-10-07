import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketStore = useSelector((state) => state.rockets);
  const missionStore = useSelector((state) => state.missions);
  const reservedRocket = rocketStore.filter((r) => r.reserved);
  const joinedMission = missionStore.payload.filter((r) => r.joined);

  return (
    <>
      <div className="profile">
        <div className="rocket-profile">
          <h3>My Rockets</h3>
          <ul>
            {
              reservedRocket.map((r) => <li key={r.id}>{r.name}</li>)
            }
          </ul>
        </div>

        <div className="mission-profile">
          <h3>My Missions</h3>
          <ul>
            {
              joinedMission.map((r) => <li key={r.mission_id}>{r.mission_name}</li>)
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
