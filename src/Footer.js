import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4">
      <div className="container">
        <p>The Generics</p>
        <div>
          <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} className="mr-3" /></a>
          <a href="https://www.spotify.com/"><FontAwesomeIcon icon={faSpotify} className="mx-3" /></a>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} className="ml-3" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
