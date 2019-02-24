import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import uuidv1 from 'uuid/v1';
import '../../styles/card.min.css';

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
    return this.props.api.map(api => {
      return(
        <Link 
          className="ui raised link card" 
          key={ uuidv1() } 
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          to={ `/blog/${ api.id }` }
        >
          <div className="content">
            <div className="header">
              { api.title }
            </div>
            <div className="description">
              { api.blogdate }
            </div>
          </div>
          <div className="extra content">
            <div className="left floated">
              { this.renderEdit(api.id) }
            </div>
            <div className="right floated author">
              Ryan Joseph
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list" style={{ margin: '3%'}}>
        { this.renderList() }
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