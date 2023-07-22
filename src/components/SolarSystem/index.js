import React from 'react';
import Title from '../Title';
import PlanetCard from '../PlanetCard';
import Planets from '../../data/planets';
import './styles.css';

function SolarSystem() {
  return (
    <div data-testid="solar-system" className="col-mp-12 solarsystem-container">
      <div className="col-mp-12">
        <Title headline="Planetas" />
      </div>
      <div>
        {Planets.map((planets, index) => (
          <PlanetCard
            key={ index }
            planetName={ planets.name }
            planetImage={ planets.image }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
