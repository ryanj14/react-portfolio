import React from 'react';
import { email, subject, body, postEmail } from '../../actions';
import { connect } from 'react-redux';

class Email extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.postEmail(this.props.userEmail);
  }

  render() {
    return(
      <div className="ui segment" style={{ width: "60%" , marginLeft: "auto", marginRight: "auto", marginTop: "2%", marginBottom: "2%"}}>
        <form className="ui form">
        <h4 className="ui dividing header">Email Me!</h4>
        <div className="two fields">
          <div className="field">
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              onChange={ e => this.props.email(e.target.value) }
            />
          </div>
          <div className="field">
            <label>Subject</label>
            <input 
              type="text" 
              name="subject" 
              onChange={ e => this.props.subject(e.target.value) }
            />
          </div>
        </div>
          <div className="field">
            <label>Body</label>
            <textarea
              wrap="hard"
              name="body"
              onChange={ e => this.props.body(e.target.value) }
            ></textarea>
          </div>
          <button 
            className="ui button" 
            type="submit"
            onClick={ e => this.handleFormSubmit(e) }
          >
            Submit
          </button>
        </form>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    userEmail: state.email
  };
}

export default connect(mapStateToProps, { email, subject, body, postEmail })(Email);