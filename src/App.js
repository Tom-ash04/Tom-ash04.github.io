import React from 'react';
import AOS from 'aos';
import Jumbotron from './jumbotron/Jumbotron';
import Navbar from './Navbar';
import Projects from './projects/Projects';
import Technologies from './technologies/Technologies';
import About from './about/About';
import Contact from './contact/Contact';
import './App.scss';

AOS.init();

function goTo(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirst: '',
      showSecond: '',
      showAll: '',
      showNav: false,
      changeHamburger: false,
      lang: {
        projects: 'Projects',
        technologies: 'Technologies',
        about: 'About Me',
        contact: 'Contact',
        watch: 'Watch',
        or: 'or',
        fundamentals: 'Fundamentals',
        learn: 'Want to learn',
        description: 'I have a solid skills in the field of Front End technology supported by many of my own projects. I specialize in JavaScrypt (ES6) and React, but I also want to broaden my competences with Back End (NodeJS). My path of development is constantly evolving, which is why I am completely open to adopting new technologies and participating in interesting projects. I can participate in long-term cooperation, but if you are looking for help in the implementation of individual projects, do not hesitate to contact me and I will be happy to help you.',
        write: 'Write me an email',
        call: 'or call me',
        title1: 'In ',
        title2: ', I like challenges and feeling of satisfaction, when I\'m looking at the final ',
        span1: 'coding',
        span2: 'effect',
      },
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.goTo = goTo.bind(this);
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ showFirst: 'show' }); }, 3500);
    setTimeout(() => { this.setState({ showSecond: 'show' }); }, 8500);
    setTimeout(() => { this.setState({ showAll: 'show' }); }, 15000);
  }

  toggleNav() {
    if (this.state.showNav) {
      this.setState({ showNav: false });
      this.setState({ changeHamburger: false });
    } else {
      this.setState({ showNav: true });
      this.setState({ changeHamburger: true });
    }
  }

  changeLanguage(lang) {
    if (lang === 'pol') {
      this.setState({
        lang: {
          projects: 'Projekty',
          technologies: 'Technologie',
          about: 'O Mnie',
          contact: 'Kontakt',
          watch: 'Popatrz',
          or: 'lub',
          fundamentals: 'Fundamenty',
          learn: 'Kierunek nauki',
          description: 'Posiadam solidne umiejętności z zakresu technologii Front End poparte wieloma własnymi projektami. Specjalizuję się w JavaScrypt (ES6) oraz React, ale chcę również poszerzyć swoje kompetencje o Back End (NodeJS). Moja ścieżka rozwoju ciągle ewoluuje, przez co jestem całkowicie otwarty na przyswajanie nowych technologi i udział w ciekawych projektach. Mogę uczestniczyć w długoterminowej współpracę, ale jeżeli poszukujesz pomocy w realizacji pojedynczych projektów, nie wahaj się ze mną skontaktować, a z chęcią ci pomogę.',
          write: 'Napisz do mnie',
          call: 'lub zadzwoń',
          title1: 'W ',
          title2: ', lubię wyzwania i poczucie satysfakcji, gdy patrzę na końcowy ',
          span1: 'kodowaniu',
          span2: 'efekt',
        },
      });
    } else {
      this.setState({
        lang: {
          projects: 'Projects',
          technologies: 'Technologies',
          about: 'About Me',
          contact: 'Contact',
          watch: 'Watch',
          or: 'or',
          fundamentals: 'Fundamentals',
          learn: 'Want to learn',
          description: 'I have a solid skills in the field of Front End technology supported by many of my own projects. I specialize in JavaScrypt (ES6) and React, but I also want to broaden my competences with Back End (NodeJS). My path of development is constantly evolving, which is why I am completely open to adopting new technologies and participating in interesting projects. I can participate in long-term cooperation, but if you are looking for help in the implementation of individual projects, do not hesitate to contact me and I will be happy to help you.',
          write: 'Write me an email',
          call: 'or call me',
          title1: 'In ',
          title2: ', I like challenges and feeling of satisfaction, when I\'m looking at the final ',
          span1: 'coding',
          span2: 'effect',
        },
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className={`hamb-menu${this.state.changeHamburger ? ' hamb-change' : ''}`} role="button" onClick={() => this.toggleNav()}>
          <span className={`top${this.state.changeHamburger ? ' top-change' : ''}`} />
          <span className={`middle${this.state.changeHamburger ? ' middle-change' : ''}`} />
          <span className={`bottom${this.state.changeHamburger ? ' bottom-change' : ''}`} />
        </div>
        <Jumbotron
          scrollHandle={props => this.goTo(props)}
          {...this.state}
        />
        <Navbar
          scrollHandle={(props) => {
            this.goTo(props);
            this.toggleNav();
          }}
          language={props => this.changeLanguage(props)}
          {...this.state}
        />
        <Projects {...this.state} />
        <Technologies {...this.state} />
        <About {...this.state} />
        <Contact {...this.state} />
      </div>
    );
  }
}

export default App;
