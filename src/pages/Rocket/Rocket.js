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
            <span>{m.reserved?"Reserved":"bejjk"}</span>
            <p>{m.description}</p>
            <button type='button' >Reserve Rocket</button>
          </div>
        </div>
    )
    )}
  </div>
);
}
export default Rocket;
