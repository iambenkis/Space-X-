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
  const newState = rockets.map(rocket => {
      if(rocket.id !== 45)
          return rocket;
      return { ...rocket, reserved: true };
  });
  console.log(newState, "bb")

return (
  <div className='rockets'>
    {rockets.map(r =>
      r.map(m =>
        <div className='rocket'>
          <img src={m.image}/>
          <div className='rocket-text'>
            <h2>{m.name}</h2>
            <p>
              <span>{m.reserved?"Reserved":''}</span>
              {m.description}
            </p>
            {
              !m.reserved?
              <button type='button' className='reserve'>Reserve Rocket</button>:
              <button type='button' className='cancel'>Cancel Reservation</button>
            }

          </div>
        </div>
    )
    )}
  </div>
);
}
export default Rocket;
