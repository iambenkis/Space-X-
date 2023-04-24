import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rocket from './pages/Rocket/Rocket';
import Mission from './pages/Mission/Mission';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import { getRockets } from './redux/Rockets/Rockets/rockets';
import { getMission } from './redux/Missions/MissionSlice';
import Signup from './pages/Signup/signup';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
    dispatch(getMission());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/rockets" element={<Rocket />} />
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
