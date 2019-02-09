import React from 'react';
import '../../styles/style.min.css';
import undraw from "../../img/undraw_developer_activity_bv83.png";

const Title = () => {
  return(
    <section class="title">
      <img src={undraw} alt="Undraw developer activity"></img>
      <article>
        <h3>Hi, I'm Ryan. I'm a full-stacks developer.</h3>
        <p>I enjoy working in web and mobile development. I personally like to work back-end but I enjoy to dabble in front-end.
          I'm almost done my schooling at British Columbia Institute of Technology. In the meantime, I'm currently looking for work in Vancouver, BC.
        </p>
      </article>
    </section>
  );
};

export default Title;