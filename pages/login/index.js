import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
