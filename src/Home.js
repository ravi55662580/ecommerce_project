// Home.js
import React from 'react';
import TourItem from './TourItem';

const Home = () => {
  return (
    <div className="home">
      <h2>TOURS</h2>
      <TourItem
        date="JUL 16"
        location="DETROIT, MI"
        venue="DTE ENERGY MUSIC THEATRE"
        tickets="https://example.com/tickets/jul16"
      />
      <TourItem
        date="JUL 19"
        location="TORONTO, ON"
        venue="BUDWEISER STAGE"
        tickets="https://example.com/tickets/jul19"
      />
      <TourItem
        date="JUL 22"
        location="BRISTOW, VA"
        venue="JIGGY LUBE LIVE"
        tickets="https://example.com/tickets/jul22"
      />
      <TourItem
        date="JUL 29"
        location="PHOENIX, AZ"
        venue="AK-CHIN PAVILION"
        tickets="https://example.com/tickets/jul29"
      />
      <TourItem
        date="AUG 2"
        location="LAS VEGAS, NV"
        venue="T-MOBILE ARENA"
        tickets="https://example.com/tickets/aug2"
      />
      <TourItem
        date="AUG 7"
        location="CONCORD, CA"
        venue="CONCORD PAVILION"
        tickets="https://example.com/tickets/aug7"
      />
    </div>
  );
}

export default Home;
