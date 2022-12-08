import React from "react";
import "../signup/SignUp.css";
const SignUp = () => {
  return (
    <form>
      <span className="signup-name">
        <label htmlFor="name">Full Name</label>
        <input type="text" placeholder="Type Your Name" />
      </span>
      <span className="signup-email">
        <label htmlFor="email">E-mail</label>
        <input type="email" placeholder="Type Your E-mail" />
      </span>
      <span className="signup-password">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Type Your Password" />
      </span>
    </form>
  );
};

export default SignUp;
