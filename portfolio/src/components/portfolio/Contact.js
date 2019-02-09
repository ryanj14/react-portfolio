import React from 'react';
import '../../styles/style.min.css'

const Contact = () => {
  return(
    <section class="contact">
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
        <div className="contact3">
          <img src={require("../../img/email.png")} alt="Email"></img>
          <p>josephmryan14@gmail.com</p>
        </div>
      </article>
    </section>
  );
};

export default Contact;