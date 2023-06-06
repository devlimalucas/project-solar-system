import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function MissionCard({ name, year, country, destination }) {
  return (
    <div data-testid="mission-card">
      <table>
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
