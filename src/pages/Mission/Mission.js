import React from 'react';
import { useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

const Mission = () => {
  const state = useSelector((state) => state.missions);
  console.log(state);
  // const dispatch = useDispatch();
  return (
    <>
      <p>Mission Page</p>
    </>
  );
};

export default Mission;
