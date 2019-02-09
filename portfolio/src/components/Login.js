import React from 'react';

const Login = () => {
  return(
    <form className="ui form">
      <div className="field">
        <label>First Name</label>
        <input type="text" name="first-name" placeholder="First Name" />
      </div>
      <div className="field">
        <label>Last Name</label>
        <input type="text" name="last-name" placeholder="Last Name" />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden" />
          <label>I agree to the Terms and Conditions</label>
        </div>
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
  );
};

export default Login;