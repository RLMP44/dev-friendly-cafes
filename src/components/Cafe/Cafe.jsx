// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

import React from 'react';
import './Cafe.css';

function Cafe({cafe}) {
  return (
    <div className='cafe-card'>
      <img src={cafe.picture} alt={cafe.title}></img>
      <div>
        <div>
          <h3>{cafe.criteria.map( criterion => <span key={criterion}>{ criterion }</span>) }</h3>
          <p>
            <span>wifi</span>
            <span>cafe</span>
            <span>quiet</span>
          </p>

        </div>
        <a target="_blank" href=''>Show the map 📍</a>
      </div>

    </div>
  );
}

export default Cafe;
