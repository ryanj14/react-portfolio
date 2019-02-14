import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import NavBar from './NavBar';
import Root from './portfolio/Root';
import Footer from './Footer';
import Login from './Login';
import BlogCreate from './blog/BlogCreate';
import BlogPosts from './blog/BlogPosts';
import BlogPost from './blog/BlogPost';
import BlogEdit from './blog/BlogEdit';
import history from '../history';

const App = () => {
  return(
    <div>
      <HashRouter history={ history } >
        <div>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={ Root } />
            <Route path="/login" component={ Login } />
            <Route path="/blog" component={ BlogPosts } />
            <Route path="/blog/create" exact component={ BlogCreate } />
            <Route path="/blog/:id" exact component={ BlogPost } />
            <Route path="/blog/edit/:id" exact component={ BlogEdit } />
          </Switch>
        </div>
      </HashRouter>
      <Footer/>
    </div>
  );
};

export default App;