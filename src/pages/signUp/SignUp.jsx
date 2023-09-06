import React, { useReducer } from "react";
import "./signUp.css";
import Contact from "../contact/Contact";
import InputField from "../../components/inputField/InputField";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/ContextProvider";

const reducer = (state, action) => {
  switch (action.type) {
    case "email": {
      return { ...state, email: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    default: {
      return state;
    }
  }
};
const initialState = {
  email: "",
  password: "",
};

const SignUp = () => {
  const navigator = useNavigate();
  const [user, dispatch] = useReducer(reducer, initialState);
  const { login } = useUserContext();

  const handleChange = (e) =>
    dispatch({ type: e.target.name, payload: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(user);
    alert("User Register Successfully");
  };
  return (
    <div name="/signUp">
      <h5 className="login-logo" onClick={() => navigator("/")}>
        Enity
      </h5>
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
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <InputField
                placeholder="Password"
                type="password"
                required
                onChange={handleChange}
                value={user.password}
                name="password"
                className="input-box"
              />
            </span>
            <div className="login-remember  ">
              <InputField
                value="Sign up"
                type="submit"
                className="input-sign-in"
              />
            </div>
          </form>
          <h4 className="login-sign-up">
            Already subscribed to Enity?
            <b className="bold" onClick={() => navigator("/login")}>
              Sign In now.
            </b>
          </h4>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default SignUp;
