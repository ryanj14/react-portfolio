import React from 'react';
import { user, password, checkUser } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {

  handleFormSubmit(e) {
    let user = this.props.userInfo.user;
    let password = this.props.userInfo.password;
    e.preventDefault();
    this.props.checkUser(user, password);
  }

  render() {
    return(
      <form className="ui form">
        <div className="field">
          <label>User</label>
          <input 
            type="text" 
            name="username" 
            onChange={ e => this.props.user(e.target.value) }
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            onChange={ e => this.props.password(e.target.value) }
          />
        </div>
        <button 
          className="ui button" 
          type="submit"
          onClick={ e => this.handleFormSubmit(e) }
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    userInfo: state.userLogin,
    isSignedIn: state.auth 
  };
}

export default connect(mapStateToProps, { user, password, checkUser })(Login);