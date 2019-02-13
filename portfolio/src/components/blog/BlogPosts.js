import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogPosts extends React.Component {

  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderList() {
    return this.props.api.map(posts => {
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
          <Link to={ `/blog/edit/${ posts.id }` } className="ui button primary">Edit</Link>
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
        <Link to="/blog/create" className="ui button primary">
          Create
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    api: Object.values(state.api)
  }
}

export default connect(mapStateToProps, { fetchBlogPosts })(BlogPosts);