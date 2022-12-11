import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const loginHandle = () => {
    navigate('/Home');
  };

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form
      action=""
      name="loginform"
      onSubmit={loginHandle}
      className="logincontainer_form"
    >
      <div className="logincontainer_champs">
        <label htmlFor="email" className="logincontainer_form--label">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={emailHandle}
          value={email}
          required
          placeholder="Email"
          className="logincontainer_form--input"
        />
      </div>

      <div className="logincontainer_champs">
        <label htmlFor="email" className="logincontainer_form--label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={passwordHandle}
          value={password}
          required
          placeholder="Password"
          className="logincontainer_form--input"
        />
      </div>

      <div className="bouton" onClick={loginHandle}>
        VALIDER
      </div>

      <div className="logincontainer_form--error">{errorMsg}</div>
    </form>
  );
};

export default LoginForm;
