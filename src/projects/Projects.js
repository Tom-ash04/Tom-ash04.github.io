import React from 'react';
import PropTypes from 'prop-types';
import ProjectElement from './ProjectElement';
import './Projects.scss';

const Projects = props =>
  (
    <div className="projects-items">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1>{props.lang.projects}</h1>
        <hr />
      </div>
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/active-box.jpg"
        alt="Active Box"
        info="Sample single page layout project."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/activebox/activebox.html"
        githubHref="https://github.com/Tom-ash04/Second_Layout"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/kanban.jpg"
        alt="Kanban"
        info="Drag & Drop Kanban project."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/kanban/kanban.html"
        githubHref="https://github.com/Tom-ash04/Kanban"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/photo-page.jpg"
        alt="Photo Page"
        info="Second single page layout project."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/photopage/photo_page.html"
        githubHref="https://github.com/Tom-ash04/Third_layout"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962210/Portfolio/countries.jpg"
        alt="Country Search"
        info="Sample search powered by API."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/countries/countries.html"
        githubHref="https://github.com/Tom-ash04/Countries"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962211/Portfolio/design-lab.jpg"
        alt="Design Lab"
        info="Another single page layout project."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/designlab/design_lab.html"
        githubHref="https://github.com/Tom-ash04/fourth-layout"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/piano.jpg"
        alt="Piano"
        info="Virtual keyboard."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/piano/index.html"
        githubHref="https://github.com/Tom-ash04/Piano"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/solar.jpg"
        alt="Solar System"
        info="Solar System in real distance and planets size scale."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/solar/index.html"
        githubHref="https://github.com/Tom-ash04/Solar-System"
      />
      <ProjectElement
        src="https://res.cloudinary.com/tomy04/image/upload/v1515962212/Portfolio/stoper.jpg"
        alt="Stoper"
        info="Sample JS stoper."
        watch={props.lang.watch}
        or={props.lang.or}
        watchHref="../data/projects/stoper/stoper.html"
        githubHref="https://github.com/Tom-ash04/stoper"
      />
    </div>
  );

Projects.propTypes = {
  lang: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Projects;
