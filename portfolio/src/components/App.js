
import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Current from './Current';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return(
    <div>
      <NavBar/>
      <Title/>
      <Skills/>
      <Projects/>
      <Education/>
      <Current/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;