import React from 'react';

class BlogCreate extends React.Component {

  render() {
    return (
      <div className="ui form">
        <div className="ten wide field">
          <label>Story</label>
          <textarea></textarea>
        </div>
        <div className="field">
          <label>Short Text</label>
          <textarea rows="4"></textarea>
        </div>
      </div>
    );
  }
}

export default BlogCreate;