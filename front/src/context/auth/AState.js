import React, { useReducer } from "react";
import axios from "axios";
import aContext from "./aContext";
import aReducer from "./aReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGOUT,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../Functions";
import { response } from "express";
import Token from "../Authentication/token";
import { exit } from "process";

const AState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: null,
    error: null,
    user: null,
  };

  const [state, dispatch] = useReducer(aReducer, initialState);

  // Register User
  const Register = async (user) => {
    const web = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/users", user, web);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      loaduser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.res.data.msg,
      });
    }
  };

  //Login User
  const Login = async (useri) => {
    const web = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/", useri, web);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loaduser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Load User
  const loaduser = async (token) => {
    if (localStorage.token) {
      Token(localStorage.token);
    }

    try {
      const res = await axios.get("/authentication");

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearerrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <aContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        Register,
        Login,
        loaduser,
        logout,
        clearerrors,
      }}
    >
      {props.children}
    </aContext.Provider>
  );
};

export default AState;
