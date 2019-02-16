import React from 'react';
import { connect } from 'react-redux';
import {
  title,
  author,
  blog,
  date,
  editBlogPost,
  fetchBlogPost,
  deleteBlogPost
} from '../../actions';
import history from '../../history';

class BlogEdit extends React.Component {

  componentDidMount() {
    let signedIn = this.props.auth.isSignedIn;
    if(signedIn === false) {
      history.push('/blog');
    }
    this.props.fetchBlogPost(this.props.match.params.id);
    let d = Date().toString();
    this.props.date(d);
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteBlogPost(this.props.match.params.id);
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
    return (
      <div className="ui segment" style={{ margin: "5%"}}>
        <form className="ui form">
        <h4 className="ui dividing header">Edit Blog</h4>
        <div className="two fields">
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
              <label>Author</label>
              <input 
                type="text" 
                name="author" 
                defaultValue={ this.props.api.author }
                onChange={ e => this.props.author(e.target.value) }
              />
            </div>
        </div>
          <div className="field">
            <label>Body</label>
            <textarea
              onChange={ e => this.props.blog(e.target.value) }
              defaultValue={ this.props.api.body }
            ></textarea>
          </div>
          <button 
            className="ui button" 
            type="submit"
            onClick={ e => this.handleFormSubmit(e) }
          >
            Submit
          </button>
          <button 
            className="ui button" 
            onClick={ this.handleDelete }
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    api: state.api[ownProps.match.params.id],
    blogInfo: state.blog,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { title, author, blog, date, editBlogPost, fetchBlogPost, deleteBlogPost })(BlogEdit);