
import React from 'react';
import NavBar from './NavBar';
import Title from './Title';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';

const App = () => {
  return(
    <div>
      <NavBar/>
      <Title/>
      <Skills/>
      <Projects/>
      <Education/>
    </div>
  );
};

export default App;