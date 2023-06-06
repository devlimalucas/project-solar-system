import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './reset.css';
import './App.css';

function App() {
  return (
    <div id="root">
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  );
}

export default App;
