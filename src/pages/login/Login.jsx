import React, { useState } from "react";
import "./login.css";
import InputField from "../../components/inputField/InputField";
import Contact from "../contact/Contact";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("login success");
    setEmail("");
    setPassword("");
  };

  return (
    <div name="/login">
      <h5 className="login-logo" onClick={() => navigator("/")}>
        Enity
      </h5>
      <div className="login-grand-parent  ">
        <div className="login-parent ">
          <form className="login  " onSubmit={handleSubmit}>
            <h1 className="login-title">Sign In</h1>
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
              <div className="remember ">
                <span className="login-checkbox  ">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Remember me</p>
                </span>
                <p>Need help?</p>
              </div>
            </div>
          </form>
          <div className="login-description">
            <h4 className="login-sign-up">
              New to Enity?
              <b className="bold" onClick={() => navigator("/signUp")}>
                Sign up now.
              </b>
            </h4>
            <p className="content-learn">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <button className="learn-more" onClick={() => setShow(!show)}>
                Learn more
              </button>
            </p>
            {show && (
              <p className="learn-more-description">
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google).
              </p>
            )}
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Login;
