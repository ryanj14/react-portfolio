import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Root from './portfolio/Root';
import Footer from './Footer';
import Login from './Login';
import BlogCreate from './blog/BlogCreate';
import BlogPosts from './blog/BlogPosts';
import BlogPost from './blog/BlogPost';

const App = () => {
  return(
    <div>
      <NavBar/>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={ Root } />
            <Route path="/login" exact component={ Login } />
            <Route path="/blog" exact component={ BlogPosts } />
            <Route path="/blog/:id" exact component={ BlogPost } />
            <Route path="/blog/create" exact component={ BlogCreate } />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;