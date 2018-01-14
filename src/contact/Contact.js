import React from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

const Contact = props =>
  (
    <div className="contact-items">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1>{props.lang.contact}</h1>
        <hr />
      </div>
      <div>
        <h3 data-aos="fade-in" data-aos-duration="3000">
          {props.lang.write}
        </h3>
        <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
            glodkowskit@gmail.com
        </span>
        <h3 className="call " data-aos="fade-in" data-aos-duration="3000">
          {props.lang.call}
        </h3>
        <span data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
            +48 660 879 702
        </span>
        <div className="social">
          <a
            href="https://github.com/Tom-ash04"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2000"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          <a
            href="../data/docs/Tomasz Glodkowski.pdf"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <i className="fa fa-file-text cv" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/tomasz-g%C5%82odkowski-9248ba145/"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="2000"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );

Contact.propTypes = {
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Contact;

