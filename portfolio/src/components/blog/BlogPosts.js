import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import '../../styles/card.min.css';

class BlogPosts extends React.Component {

  componentDidMount() {
    if(!this.props.api) {
      return;
    }
    this.props.fetchBlogPosts();
  }

  renderEdit(id) {
    let isSignedIn = this.props.auth.isSignedIn;
    if(isSignedIn === true) {
      return(
        <Link to={ `/blog/edit/${ id }` } className="ui button primary">Edit</Link>
      );
    } else {
      return null;
    }
  }

  renderCreate() {
    let isSignedIn = this.props.auth.isSignedIn;
    if(isSignedIn === true) {
      return(
        <Link to="/blog/create" className="ui button primary">
          Create
        </Link>
      );
    } else {
      return null;
    }
  }

  renderList() {
    return this.props.api.map(posts => {
      console.log(posts);
      return(
        <div className="ui raised link card" key={ uuidv1() } style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="content">
            <Link to={ `/blog/${ posts.id }` } className="header">
              { posts.title }
            </Link>
            <div className="description">
              { posts.blogDate }
            </div>
          </div>
          { this.renderEdit(posts.id) }
          <div className="extra content">
            <div className="right floated author">
              Ryan Joseph
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui relaxed divided list" style={{ margin: '3%'}}>
          { this.renderList() }
        </div>
        { this.renderCreate() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api: Object.values(state.api),
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPosts);