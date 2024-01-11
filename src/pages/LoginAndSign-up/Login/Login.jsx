import React, { useRef, useState } from "react";
import "../LoginAndSign-up.css";
import { Link } from "react-router-dom";
import { useNewUsersContext } from "../../../Context/NewUsersContext";

export default function Login() {
  const { users, userLogin } = useNewUsersContext();
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  function handleOnSubmit(e) {
    e.preventDefault();
    userLogin({
      email: emailValue,
      password: passwordValue,
    });
  }
  return (
    <main className="login login-sign-up">
      <h5 className="title">
        <span id="join-word" className="login-title">
          Login
        </span>{" "}
        and start reading for more power
      </h5>
      <div className="big-container">
        <div className="left-container">
          <div className="books-img"></div>
        </div>

        <div className="right-container">
          <h3>Login</h3>
          <form onSubmit={handleOnSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />

            <button type="submit" className="register">
              Continue
            </button>
          </form>
          <p className="login">
            Not a member?{" "}
            <Link className="link" to={"/sign-up"}>
              Sign-up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
