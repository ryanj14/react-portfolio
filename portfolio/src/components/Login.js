import React from 'react';
import { user, password } from '../actions';
import { connect } from 'react-redux';

class Login extends React.Component {

  handleFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props);
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

export default connect(null, { user, password })(Login);