import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketStore = useSelector(state => state.rockets);
  const reservedRocket = rocketStore.filter(r => r.reserved);
  return(
  <>
    <h3>My Rockets</h3>
    <ul>
      {
        reservedRocket.map(r =>
          <li>{r.name}</li>
        )
      }
    </ul>
  </>
)};

export default Profile;
