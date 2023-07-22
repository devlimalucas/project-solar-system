import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';
import './reset.css';
import './App.css';

function App() {
  return (
    <div id="root row">
      <Header />
      <SolarSystem />
      <Missions />
      <Footer />
    </div>
  );
}

export default App;
