import React from 'react';
import PropTypes from 'prop-types';
import './Technologies.scss';

const Technologies = props =>
  (
    <div className="technology-items">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1>{props.lang.technologies}</h1>
        <hr />
        <h2>{props.lang.fundamentals}</h2>
        <div className="tech-container">
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/js.png"
            alt="JS"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/react.png"
            alt="REACT"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/css3.png"
            alt="CSS"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/HTML5.png"
            alt="HTML"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/sass.png"
            alt="SASS"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/rwd.png"
            alt="RWD"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/jquery.png"
            alt="JQUERY"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/bootstrap.png"
            alt="BOOTSTRAP"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962213/Portfolio/webpack.png"
            alt="WEBPACK"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/grunt.png"
            alt="GRUNT"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/git.png"
            alt="GIT"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/eslint.png"
            alt="ESLINT"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/npm.png"
            alt="NPM"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
        </div>
        <h2>{props.lang.learn}</h2>
        <div className="tech-container">
          <img
            src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/nodejs.png"
            alt="NODEJS"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
            data-aos-anchor-placement="center-bottom"
          />
        </div>
      </div>
    </div>
  );

Technologies.propTypes = {
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Technologies;
