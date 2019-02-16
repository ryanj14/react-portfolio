import React from 'react';
import '../../styles/style.min.css'

const Current = () => {
  return(
    <section className="current">
      <article>
        <h3>Current</h3>
        <div className="currentStory">
            <p>
              Personal blog - I'm using a RESTful API approach with the blog design.
              The blog is currently up but still in development.
              Checkout the Github repo!
            </p>
        </div>
      </article>
    </section>
  );
};

export default Current;