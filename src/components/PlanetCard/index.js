import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const normalizeClassText = (string) => string.normalize('NFD')
  .replace(/[^a-zA-Z\s]/g, '')
  .toLowerCase();

function PlanetCard({ planetName, planetImage }) {
  return (
    <div
      className="planet-card-container"
      data-testid="planet-card"
    >
      <div>
        <img
          className={ normalizeClassText(planetName) }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
      <div className="paragraph-container">
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
