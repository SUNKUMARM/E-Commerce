import React, { useState } from "react";
import "./signUp.css";
import Contact from "../contact/Contact";
import InputField from "../../components/inputField/InputField";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <h5 className="login-logo">Enity</h5>
      <div className="login-grand-parent  ">
        <div className="login-parent ">
          <form className="login  " onSubmit={handleSubmit}>
            <h1 className="login-title">Register</h1>
            <h4>Welcome back! Joining Enity is easy.</h4>
            <span className="input-parent  ">
              <InputField
                placeholder="Email adders"
                type="email"
                required
                className="input-box"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
              />
              <InputField
                placeholder="Password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name="password"
                className="input-box"
              />
            </span>
            <div className="login-remember  ">
              <InputField
                value="Sign in"
                type="submit"
                className="input-sign-in"
              />
            </div>
          </form>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default SignUp;
