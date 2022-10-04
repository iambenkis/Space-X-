import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Rocket from './pages/Rocket/Rocket';
import Mission from './pages/Mission/Mission';
import Profile from './pages/Profile/Profile';

const App = () => (
  <>
    <Routes>
      <Route path="/rockets" element={<Rocket />} />
      <Route path="/" element={<Navigate replace to="/rockets" />} />
      <Route path="/missions" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
