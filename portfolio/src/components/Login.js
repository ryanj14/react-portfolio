import React from 'react';
import { user, password } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.props.userInfo);
  }

  render() {
    console.log(this.props.userInfo);
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
  return { userInfo: state.userLogin };
}

export default connect(mapStateToProps, { user, password })(Login);