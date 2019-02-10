import React from 'react';
import { connect } from 'react-redux';
import {
  title,
  author,
  blog,
  date
} from '../../actions';

class BlogCreate extends React.Component {

  componentDidMount() {
    let d = Date().toString();
    this.props.date(d);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.props);
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input 
            type="text" 
            name="title" 
            onChange={ e => this.props.title(e.target.value) }
          />
        </div>
        <div className="field">
          <label>Blog</label>
          <textarea
            onChange={ e => this.props.blog(e.target.value) }
          ></textarea>
        </div>
        <div className="field">
          <label>Author</label>
          <input 
            type="text" 
            name="author" 
            onChange={ e => this.props.author(e.target.value) }
          />
        </div>
        <button 
          className="ui button" 
          type="submit"
          onClick={ e => this.handleFormSubmit(e) }
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogInfo: state.blog
  };
}

export default connect(mapStateToProps, { title, author, blog, date })(BlogCreate);