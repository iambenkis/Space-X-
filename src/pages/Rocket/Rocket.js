import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reservePlace } from '../../redux/Rockets/Rockets/rockets';
import './Rockets.css'

const Rocket = () => {
  const rocketStore = useSelector(state => state.rockets);
  const dispatch = useDispatch();
return (
  <div className='rockets'>
    {rocketStore.map(m =>
        <div className='rocket'>
          <img src={m.image}/>
          <div className='rocket-text'>
            <h2>{m.name}</h2>
            <p>
              <span>{m.reserved?"Reserved":''}</span>
              {m.description}
            </p>
            {
               <button type='button' className={!m.reserved?'reserve':'cancel'} onClick={() => {dispatch(reservePlace({ id : m.id }))}}> { !m.reserved? 'Reserve Rocket': 'Cancel Reservation'}</button>
            }
          </div>
        </div> )}
  </div>
);
}
export default Rocket;
