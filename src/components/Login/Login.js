import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-area">
      <h2 className="form-title">Login</h2>
      <form action="">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required/>
        </div>
        <input type="submit" name="submit" value={"Login"} />
      </form>
      <div className="new">
          <p>New to Ema-john? <Link to={'/signup'}>Create New Account</Link></p>
      </div>

      </div>
    </div>
  );
};

export default Login;
