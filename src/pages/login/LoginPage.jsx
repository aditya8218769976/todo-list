import React from "react";
import "../login/LoginPage.css";

const LoginPage = () => {
  return (
    <form>
      <div className="login-form-container">
        <div className="login-form-wrapper">
          <div className="login-form-style">
            <div className="login-form-style-email">
              <label htmlFor="email">E-mail</label>
              <input type="email" placeholder="Type Your E-mail" />
            </div>
            <div className="login-form-style-password">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Type Your Password" />
            </div>
          </div>
          <button>Login</button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
