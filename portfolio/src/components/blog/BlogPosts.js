import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogPosts extends React.Component {

  componentDidMount() {
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
    return this.props.api.map((posts, index) => {
      return(
        <div className="item" key={ posts.id } style={{ display: 'flex', justifyContent: 'space-around'}}>
          <div className="content">
            <Link to={ `/blog/${ posts.id }` } className="header">
              { posts.title }
            </Link>
            <div className="description">
              { posts.date }
            </div>
          </div>
          { this.renderEdit(posts.id) }
        </div>
      );
    });
  }

  render() {
    console.log(this.props.api);
    return (
      <div>
        <div className="ui relaxed divided list">
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