import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props =>
  (
    <div className={`nav-container${props.showNav ? ' show' : ''}`}>
      <ul>
        <li className="home" onClick={props.scrollHandle.bind(this, '.jumbotron')}>HOME</li>
        <li className="projects" onClick={props.scrollHandle.bind(this, '.projects-items')}>{props.lang.projects.toUpperCase()}</li>
        <li className="technologies" onClick={props.scrollHandle.bind(this, '.technology-items')}>{props.lang.technologies.toUpperCase()}</li>
        <li className="about" onClick={props.scrollHandle.bind(this, '.about-items')}>{props.lang.about.toUpperCase()}</li>
        <li className="contact" onClick={props.scrollHandle.bind(this, '.contact-items')}>{props.lang.contact.toUpperCase()}</li>
      </ul>
      <div className="language">
        <img id="POL" alt="polIcon" src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/polish.png" onClick={props.language.bind(this, 'pol')} />
        <img id="ENG" alt="engIcon" src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/english.png" onClick={props.language.bind(this, 'engl')} />
      </div>
    </div>
  );

Navbar.propTypes = {
  showNav: PropTypes.bool.isRequired,
  scrollHandle: PropTypes.func.isRequired,
  language: PropTypes.func.isRequired,
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Navbar;
