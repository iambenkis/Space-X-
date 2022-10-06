import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Rocket from './pages/Rocket/Rocket';
import Mission from './pages/Mission/Mission';
import Profile from './pages/Profile/Profile';
import Header from './components/Header/Header';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from './redux/Rockets/Rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);
  return (
  <>
    <Header />
    <Routes>
      <Route path="/rockets" element={<Rocket />} />
      <Route path="/" element={<Navigate replace to="/rockets" />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
)};

export default App;
