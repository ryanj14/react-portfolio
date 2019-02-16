import React from 'react';
import { connect } from 'react-redux';
import {
  title,
  author,
  blog,
  date,
  createBlogPost
} from '../../actions';
import history from '../../history';

class BlogCreate extends React.Component {

  componentDidMount() {
    let signedIn = this.props.auth.isSignedIn;
    if(signedIn === false) {
      history.push('/blog');
    }
    let d = Date().toString();
    this.props.date(d);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.createBlogPost(this.props.blogInfo);
  }

  handleCancel() {
    history.push('/blog');
  }

  render() {
    return (
      <div className="ui segment" style={{ margin: "5%"}}>
        <form className="ui form">
        <h4 className="ui dividing header">Create Post</h4>
        <div className="two fields">
          <div className="field">
            <label>Title</label>
            <input 
              type="text" 
              name="title" 
              onChange={ e => this.props.title(e.target.value) }
            />
          </div>
          <div className="field">
            <label>Author</label>
            <input 
              type="text" 
              name="author" 
              onChange={ e => this.props.author(e.target.value) }
            />
          </div>
        </div>
          <div className="field">
            <label>Body</label>
            <textarea
              onChange={ e => this.props.blog(e.target.value) }
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
            onClick={ this.handleCancel }
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogInfo: state.blog,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { title, author, blog, date, createBlogPost })(BlogCreate);