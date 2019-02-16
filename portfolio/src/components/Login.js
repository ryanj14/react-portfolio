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
      <div className="ui placeholder segment" style={{ margin: '5%'}}>
        <form className="ui form">
          <div className="field">
            <label>User</label>
            <div className="ui left icon input">
              <input 
                type="text" 
                name="username" 
                onChange={ e => this.props.user(e.target.value) }
                placeholder="Username"
              />
              <i className="user icon"></i>
            </div>
          </div>
          <div className="field">
            <label>Password</label>
            <div className="ui left icon input">
              <input 
                type="password" 
                name="password" 
                onChange={ e => this.props.password(e.target.value) }
              />
              <i class="lock icon"></i>
            </div>
          </div>
          <button 
            className="ui blue button" 
            type="submit"
            onClick={ e => this.handleFormSubmit(e) }
            style ={{ width: '100%'}}
          >
            Login
          </button>
        </form>
      </div>
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