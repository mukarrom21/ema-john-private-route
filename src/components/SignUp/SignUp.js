import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="form-container">
      <div className="form-area">
      <h2 className="form-title">Sign Up</h2>
      <form action="">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required/>
        </div>
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="password" required/>
        </div>
        <input type="submit" name="submit" value={"Sign Up"} />
      </form>
      <div className="new">
          <p>Already have an account? <Link to={'/login'}>Login</Link></p>
      </div>

      </div>
    </div>
    );
};

export default SignUp;