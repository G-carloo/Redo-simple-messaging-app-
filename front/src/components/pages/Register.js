import React, { useState, useContext, useEffect } from "react";
import EaContext from "../extras/errors";
import aContext from "../../context/auth/aContext";

const Register = (props) => {
  const alertcontext = useContext(EaContext);
  const authContext = useContext(aContext);

  const { Alert } = EaContext;

  const { Register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      alert(error);
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, newUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const { name, email, phone, password, password2 } = user;

  const onChange = (e) => newUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      Alert("Please fill all fields", "danger");
    } else if (password !== password2) {
      Alert("Passwords do not match", "danger");
    } else {
      Register({
        name,
        email,
        phone,
        password,
      });
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            placeholder='Please enter your email'
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
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            placeholder='Confirm password'
            minLength='6'
            required
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
