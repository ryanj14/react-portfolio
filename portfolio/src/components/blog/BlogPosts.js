import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid/v1';

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
    console.log(this.props.api[0]);
    return this.props.api.map((posts, index) => {
      return(
        <div className="item" key={ uuidv1() } style={{ display: 'flex', justifyContent: 'space-around'}}>
          <div className="content">
            <Link to={ `/blog/${ posts[index].id }` } className="header">
              { posts[index].title }
            </Link>
            <div className="description">
              { posts[index].date }
            </div>
          </div>
          { this.renderEdit(posts[index].id) }
        </div>
      );
    });
  }

  render() {
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