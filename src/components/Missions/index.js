import React from 'react';
import Title from '../Title';
import missions from '../../data/missions';
import MissionCard from '../MissionCard';
import './styles.css';

function Missions() {
  return (
    <div data-testid="missions" className="mission-container col-mp-12">
      <div className="col-mp-12">
        <Title headline="Missões" />
      </div>
      <div className="col-mp-9 cards-container col-s-12">
        {missions.map((mission, index) => (
          <MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
