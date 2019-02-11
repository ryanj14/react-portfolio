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
      return <div></div>;
    }
    console.log(this.props.api);
    const { title, author, blog, date } = this.props.api;
    return (
      <div>
        <div className="ui header">
          { title }
          <div className="sub header">
            { author } { date }
          </div>
        </div>
        <div className="content">
          { blog }
        </div>
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