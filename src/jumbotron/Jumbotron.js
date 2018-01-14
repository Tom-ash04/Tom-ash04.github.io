import React from 'react';
import PropTypes from 'prop-types';
import './Jumbotron.scss';

const Jumbotron = props =>
  (
    <div className="jumbotron">
      <div>
        <h1 className={`jumboDescription ${props.showAll}`}>
          {props.lang.title1}<span className={`span-one ${props.showFirst}`}>{props.lang.span1}</span>
          {props.lang.title2}<span className={`span-two ${props.showSecond}`}>{props.lang.span2}</span>.
        </h1>
      </div>
      <div className="scroll-down">
        <i className="fa fa-chevron-down projects" role="button" onClick={props.scrollHandle.bind(this, '.projects-items')} />
      </div>
    </div>
  );

Jumbotron.propTypes = {
  showFirst: PropTypes.string.isRequired,
  showSecond: PropTypes.string.isRequired,
  showAll: PropTypes.string.isRequired,
  scrollHandle: PropTypes.func.isRequired,
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Jumbotron;
