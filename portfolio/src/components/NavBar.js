import React from 'react';

const NavBar = () => {
  return(
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href=" ">Ryan Joseph</a>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="https://crowdvote.000webhostapp.com/">Crowd Vote</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://nonionic-ohm.000webhostapp.com/">Hangman</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://project3900.000webhostapp.com/index.html">Group Project</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/ryan-joseph-226682163/">Linkedin Profile</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="https://github.com/ryanj14">Github Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://garelryan.ca">Craigslist Clone</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://docs.google.com/document/d/1hye3N65a7Ot9HToe-BHYB3jIsWHtZxSJxuMVHP58FEg/edit?usp=sharing">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;