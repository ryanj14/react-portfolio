import React from 'react';
import { connect } from 'react-redux';
import {
  title,
  author,
  blog,
  date,
  editBlogPost,
  fetchBlogPost
} from '../../actions';

class BlogEdit extends React.Component {

  componentDidMount() {
    this.props.fetchBlogPost(this.props.match.params.id);
    let d = Date().toString();
    this.props.date(d);
  }

  handleChange = (e) => {
    this.props.title(e.target.value);
  }

  handleFormSubmit(e) {
    let id = this.props.match.params.id;
    e.preventDefault();
    this.props.editBlogPost(id,this.props.blogInfo);
  }

  render() {
    if(!this.props.api) {
      return null;
    }
    console.log(this.props.blogInfo);
    return (
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input 
            type="text" 
            name="title" 
            defaultValue={ this.props.api.title }
            onChange={ this.handleChange }
          />
        </div>
        <div className="field">
          <label>Blog</label>
          <textarea
            onChange={ e => this.props.blog(e.target.value) }
            defaultValue={ this.props.api.blog }
          ></textarea>
        </div>
        <div className="field">
          <label>Author</label>
          <input 
            type="text" 
            name="author" 
            defaultValue={ this.props.api.author }
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

const mapStateToProps = (state, ownProps) => {
  return {
    api: state.api[ownProps.match.params.id],
    blogInfo: state.blog
  };
};

export default connect(mapStateToProps, { title, author, blog, date, editBlogPost, fetchBlogPost })(BlogEdit);