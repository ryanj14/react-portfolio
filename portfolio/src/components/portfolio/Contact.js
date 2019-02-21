import React from 'react';
import '../../styles/style.min.css'
import Email from './Email';

const Contact = () => {
  return(
    <section className="contact">
      <article>
        <h3>Contact</h3>
        <div className="contact1">
          <img src={require("../../img/GitHub-Mark-64px.png")} alt="Github logo"></img>
          <a href="https://github.com/ryanj14">github.com/ryanj14</a>
        </div>
        <div className="contact2">
          <img src={require("../../img/linkedin.png")} alt="Linkedin logo"></img>
          <a href="https://www.linkedin.com/in/ryan-joseph-226682163/">linkedin.com/in/ryan-joseph-226682163</a>
        </div>
        <Email />
      </article>
    </section>
  );
};

export default Contact;