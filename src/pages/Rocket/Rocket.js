import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../../redux/Rockets/Rockets/rockets';

const Rocket = () => {
  const rocketStore = useSelector(state => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const rockets = rocketStore.map(r => r);
return (
  <>
    <p>Rocket Page</p>
    {rockets.map(r =>
      r.map(m =>
        <div>
          <h2>{m.name}</h2>
        </div>
    )
    )}
  </>
);
}
export default Rocket;
