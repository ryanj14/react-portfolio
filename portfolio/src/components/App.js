import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Root from './portfolio/Root';
import Footer from './Footer';
import Login from './Login';

const App = () => {
  return(
    <div>
      <NavBar/>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Root } />
          <Route path="/login" component={ Login } />
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;