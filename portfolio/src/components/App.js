import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Title from './portfolio/Title';
import Skills from './portfolio/Skills';
import Projects from './portfolio/Projects';
import Education from './portfolio/Education';
import Current from './portfolio/Current';
import Contact from './portfolio/Contact';
import Footer from './Footer';
import Login from './Login';

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
      <BrowserRouter>
        <Route path="/login" component={ Login } />
      </BrowserRouter>
    </div>
  );
};

export default App;