import React from 'react';
import '../../styles/style.min.css';

const Skills = () => {
  return(
    <section className="skills">
      <h3>Skills</h3>
      <article className="skillsGrid">
        <figure>
            <img src={require("../../img/HTML5_Badge.png")} alt="HTML5 logo"></img>
            <figcaption>HTML5</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/CSS3_logo.png")} alt="CSS3 logo"></img>
            <figcaption>CSS3</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/sass.png")} alt="Sass logo"></img>
            <figcaption>Sass</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/php-logo.png")} alt="PHP logo"></img>
            <figcaption>PHP</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/c-logo.png")} alt="C# logo"></img>
            <figcaption>C#</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/JavaScript-logo.png")} alt="JavaScript logo"></img>
            <figcaption>JavaScript</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/Git-Icon.png")} alt="Git logo"></img>
            <figcaption>Git</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/2000px-Swift_logo.png")} alt="Swift logo"></img>
            <figcaption>Swift 4</figcaption>
        </figure>
        <figure>
            <img src={require("../../img/bootstrap-logo.png")} alt="Bootstrap logo"></img>
            <figcaption>Bootstrap</figcaption>
        </figure>
        <figure>
          <img src={require("../../img/mysql.png")} alt="MySQL logo"></img>
          <figcaption>MySQL</figcaption>
        </figure>
        <figure>
          <img src={require("../../img/react.png")} alt="React logo"></img>
          <figcaption>React.js</figcaption>
        </figure>
        <figure>
          <img src={require("../../img/redux.png")} alt="Redux logo"></img>
          <figcaption>Redux</figcaption>
        </figure>
        <figure>
          <img src={require("../../img/heroku.png")} alt="Redux logo"></img>
          <figcaption>Heroku</figcaption>
        </figure>
        <figure>
          <img src={require("../../img/postgresql.png")} alt="Redux logo"></img>
          <figcaption>PostGreSQL</figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Skills;