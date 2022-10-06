import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../../redux/Rockets/Rockets/rockets';

const Rocket = () => {
  const rockets = useSelector(state => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  console.log(rockets)
return (
  <>
    <p>Rocket Page</p>
  </>
);
}
export default Rocket;
