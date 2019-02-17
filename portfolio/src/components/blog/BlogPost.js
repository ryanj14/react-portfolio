import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogPost } from '../../actions';

class BlogPost extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchBlogPost(id);
  }

  render() {
    if(!this.props.api) {
      return null;
    }
    const { title, author, body, blogDate } = this.props.api;
    return (
      <div className="ui piled segment" style={{ margin: "5%"}}>
        <div className="ui header">
          { title }
          <div className="sub header">
            { author }
          </div>
          <div className="sub header">
            { blogDate }
          </div>
        </div>
        <p style={{ whiteSpace: "pre-line"}}>
          { body }
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    api: state.api[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchBlogPost })(BlogPost);