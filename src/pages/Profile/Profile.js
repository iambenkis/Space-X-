import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const rocketStore = useSelector(state => state.rockets);
  const dispatch = useDispatch();
  const reservedRocket = rocketStore.filter(r => r.reserved);
  console.log(reservedRocket,"profile")
  return(
  <>
    <p>Profile Page</p>

  </>
)};

export default Profile;
