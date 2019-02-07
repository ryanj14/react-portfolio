import React from 'react';
import '../styles/style.min.css'

const Current = () => {
  return(
    <section className="current">
      <article>
        <h3>Current</h3>
        <div className="currentStory">
            <p>
              Webapp - I'm currently working on a coffee webapp with my good friend Akemi. 
              We're using technologies such as React.js, Redux, and Firebase.
            </p>
            <p>
              Python - Learning it for AI and machine learning.
            </p>
        </div>
      </article>
    </section>
  );
};

export default Current;