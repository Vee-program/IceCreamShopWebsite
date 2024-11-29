import React from "react";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <h1 className="story-heading">Login/Register</h1>
      <div className="login-container">
        <div className="login">
          <h2>Login</h2>
          <form>
            <label>Email:</label>
            <br />
            <input type="email" className="login-input" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" className="login-input" />
            <br />
            <input
              type="submit"
              value="Login"
              className="login-input login-button"
            />
          </form>
        </div>
        <div className="register">
          <h2>Register</h2>
          <label>Full name</label>
          <br />
          <input type="text" className="login-input" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" className="login-input" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" className="login-input" />
          <br />
          <label>Confirm Password</label>
          <br />
          <input type="password" className="login-input" />
          <br />
          <input
            type="submit"
            value="Register"
            className="login-input login-button"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
