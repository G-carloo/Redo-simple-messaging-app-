import React, { useState } from "react";

const Login = () => {
  const [user, newUser] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const { name, phone, password } = user;

  const onChange = (e) => newUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
};

export default Login;
