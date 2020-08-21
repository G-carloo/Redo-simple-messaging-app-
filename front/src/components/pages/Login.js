import React, { useState, useEffect, useContext } from "react";
import alertContext from "../../context/erroralert/eaContext";
import aContext from "../../context/auth/aContext";

const Login = (props) => {
  const alertContext = useContext(alertContext);
  const aContext = useContext(aContext);

  const { Alert } = alertContext;

  const { Login, error, clearErrors, isAuthenticated } = aContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      alert(error);
      clearErrors();
    }
    const [user, newUser] = {
      name: "",
      phone: "",
      password: "",
    };

    const { name, phone, password } = user;

    const onChange = (e) =>
      newUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
      e.preventDefault();

      if (name === "" || phone === "" || password === "") {
        alert("Please fill all the fields..");
      } else {
        Login({
          name,
          phone,
          password,
        });
      }
    };

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Please enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Phone number</label>
            <input
              type='phone'
              name='phone'
              value={phone}
              onChange={onChange}
              placeholder='Please enter your phone'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Please enter your password'
              required
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='btn btn-primary btn-block btn-sm'
          />
        </form>
      </div>
    );
  });
};

export default Login;
