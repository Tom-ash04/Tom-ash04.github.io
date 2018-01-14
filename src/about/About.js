import React from 'react';
import PropTypes from 'prop-types';
import './About.scss';

const About = props =>
  (
    <div className="about-items">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1>{props.lang.about}</h1>
        <hr />
      </div>
      <div className="myDescription">
        <p data-aos="fade-right" data-aos-duration="1000">
          {props.lang.description}
        </p>
        <img
          src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/myPhoto.jpg"
          alt="Tomasz Głodkowski"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );

About.propTypes = {
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default About;
