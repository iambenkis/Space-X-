import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css'

const Profile = () => {
  const rocketStore = useSelector(state => state.rockets);
  const reservedRocket = rocketStore.filter(r => r.reserved);
  return(
  <>
    <div className='profile'>
      <h3>My Rockets</h3>
      <ul>
        {
          reservedRocket.map(r =>
            <li>{r.name}</li>
          )
        }
      </ul>
    </div>
  </>
)};

export default Profile;
