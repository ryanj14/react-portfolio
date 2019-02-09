import React from 'react';

const Login = () => {
  return(
    <form className="ui form">
      <div className="field">
        <label>User</label>
        <input type="text" name="username" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  );
};

export default Login;