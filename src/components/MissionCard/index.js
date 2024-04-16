import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card" className="mission-card-container col-mp-12 col-s-6">
      <table className="col-mp-9 col-s-11">
        <tbody>
          <tr>
            <th data-testid="mission-name">{name}</th>
          </tr>
          <tr>
            <td data-testid="mission-country">{country}</td>
          </tr>
          <tr>
            <td data-testid="mission-destination">{destination}</td>
          </tr>
          <tr>
            <td data-testid="mission-year">{year}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
