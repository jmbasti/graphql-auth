import React, { useState } from "react";

const AuthForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(props.errors);

  return (
    <div className="container">
      <h3>{props.label}</h3>
      <div className="row">
        <form
          className="col s12"
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit(email, password);
            setEmail("");
            setPassword("");
          }}
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div style={{ color: "red" }}>
            {props.errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
          <button className="btn-large">{props.label}</button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
