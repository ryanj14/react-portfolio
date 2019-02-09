import React from 'react';
import Title from './Title';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Current from './Current';
import Contact from './Contact';

const Root = () => {
  return(
    <div>
      <Title/>
      <Skills/>
      <Projects/>
      <Education/>
      <Current/>
      <Contact/>
    </div>
  );
};

export default Root;