import React from 'react';
import '../../styles/style.min.css';

const Projects = () => {
  return(
    <section class="project">
      <h3>Personal Work</h3>
      <div class="projectStory">
        <article>
          <h3>Crowd Vote</h3>
          <p>
            A web app that lets you ask a question with four possible answers. 
            The audience to decides which of the four answers they perfer and after the selection it displays the results from the audience. 
            Similar to Straw poll in a sense.
            The website uses HTML5, CSS3, Bootstrap, PHP, and MySQL.
          </p>
            <a href="https://crowdvote.000webhostapp.com/">Crowd Vote Link</a><br/>
            <a href="https://github.com/ryanj14/CrowdVote">Crowd Vote Github Repo</a>
        </article>
        <article>
          <h3>Hangman</h3>
          <p>
            The classic hangman game where you can guess the word with seven guesses before you loose.
            You can signup and keep your highest running score. This also has a leaderboard.
            The website uses HTML5, CSS3, JavaScript, PHP, and MySQL.
          </p>
          <a href="https://nonionic-ohm.000webhostapp.com/">Hangman Link</a><br/>
          <a href="https://github.com/ryanj14/hangman">Hangman Github Repo</a>  
        </article>
      </div>
      <div class="projectStory">
        <article>
          <h3>Craigslist Clone</h3>
          <p>
            Garel Bucknor and I created a Craigslist website clone from scratch. It's not done, but I wanted to show off what we could do.
            The front page works with some of the links actually connect to their respective category page.
            The website uses HTML5, CSS3, PHP, MySQL.
          </p>
          <a href="https://garelryan.000webhostapp.com/index.php">Craigslist Clone Link</a><br/>
          <a href="https://github.com/GBucknor/CraigslistClone">Craigslist Clone Github Repo</a>  
        </article>
        <article>
          <h3>Group Project</h3>
          <p>
            This is a group project of four where we designed a website that has some backend functionality.
            The website uses HTML5, CSS3, JavaScript, PHP, and MySQL.
          </p>
          <a href="https://project3900.000webhostapp.com/index.html">School Project Link</a><br/>
          <a href="https://github.com/ryanj14/group10">Group Project Github Repo</a>
        </article>
      </div>
    </section>
  );
};

export default Projects;