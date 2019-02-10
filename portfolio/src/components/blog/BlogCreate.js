import React from 'react';

class BlogCreate extends React.Component {

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input 
            type="text" 
            name="title" 
          />
        </div>
        <div className="field">
          <label>Story</label>
          <textarea></textarea>
        </div>
        <div className="field">
          <label>Author</label>
          <input 
            type="text" 
            name="author" 
          />
        </div>
        <button 
          className="ui button" 
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default BlogCreate;