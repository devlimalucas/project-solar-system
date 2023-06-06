import React from 'react';
import Title from '../Title';
import PlanetCard from '../PlanetCard';
import Planets from '../../data/planets';
import './styles.css';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {Planets.map((planets, index) => (
        <PlanetCard
          key={ index }
          planetName={ planets.name }
          planetImage={ planets.image }
        />
      ))}
    </div>
  );
}

export default SolarSystem;
