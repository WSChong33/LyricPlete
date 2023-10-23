import React from 'react';
import './Auth.css';

export const Auth = () => {
  return (
    <section className="vh-100 d-flex justify-content-center align-items-center section-style">
      <div className="card shadow-2-strong card-style">
        <div className="card-body p-5 text-center">

          <h3 className="mb-5">Sign in</h3>

          <div className="form-outline mb-4">
            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="typeEmailX-2">Email</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
            <label className="form-label" htmlFor="typePasswordX-2">Password</label>
          </div>

          <div className="form-check d-flex justify-content-start mb-4">
            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
            <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
          </div>

          <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

          <hr className="my-4"></hr>

          <button className="btn btn-lg btn-block btn-primary google-button" type="submit">
            <i className="fab fa-google me-2"></i> Sign in with Google
          </button>

          <button className="btn btn-lg btn-block btn-primary facebook-button mb-2" type="submit">
            <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
          </button>

        </div>
      </div>
    </section>
  );
};