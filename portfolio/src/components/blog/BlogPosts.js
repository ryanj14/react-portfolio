import React from 'react';
import { fetchBlogPosts } from '../../actions';
import { connect } from 'react-redux';

class BlogPosts extends React.Component {

  componentDidMount() {
    this.props.fetchBlogPosts();
  }

  renderList() {
    return this.props.api.map(posts => {
      return(
        <div className="item" key={ posts.id }>
          <div className="content">
            <div className="header">
              { posts.title }
            </div>
            <div className="description">
              { posts.date }
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        { this.renderList() }
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