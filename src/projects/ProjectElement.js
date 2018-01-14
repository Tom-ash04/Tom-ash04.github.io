import React from 'react';
import PropTypes from 'prop-types';

const ProjectElement = props =>
  (
    <div className="project-element" data-aos="fade-up" data-aos-duration="1500">
      <img src={props.src} alt={props.alt} />
      <div className="project-info">
        <h1>{props.alt}</h1>
        <p>{props.info}</p>
        <a href={props.watchHref}>{props.watch}</a>
        <p>{props.or}</p>
        <a href={props.githubHref} className="git">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
    </div>
  );

ProjectElement.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  watchHref: PropTypes.string.isRequired,
  githubHref: PropTypes.string.isRequired,
  watch: PropTypes.string.isRequired,
  or: PropTypes.string.isRequired,
};

export default ProjectElement;
