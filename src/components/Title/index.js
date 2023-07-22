import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Title({ headline }) {
  return (
    <div className="title-container">
      <h2 className="col-mp-9">{headline}</h2>
    </div>
  );
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
