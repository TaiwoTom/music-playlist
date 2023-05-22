import React from "react";

function Header() {
  function signUpForm() {
    <div>
      <form >
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
          ></input>
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember">
              {" "}
              Remember me{" "}
            </input>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>;
  }

  return (
    <div className="header-box">
      <button type="button" className="btn">
        Contact us
      </button>
      <button
        type="submit"
        className="btn bg-warning signup-btn"
        onClick={signUpForm}>
        Signup
      </button>
    </div>
  );
}

export default Header;
