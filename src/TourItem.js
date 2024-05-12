// TourItem.js
import React from 'react';

const TourItem = ({ date, location, venue, tickets }) => {
  return (
    <div className="tour-item">
      <h3>{date}</h3>
      <p>{location}</p>
      <p>{venue}</p>
      <a href={tickets} target="_blank" rel="noopener noreferrer">BUY TICKETS</a>
    </div>
  );
}

export default TourItem;
