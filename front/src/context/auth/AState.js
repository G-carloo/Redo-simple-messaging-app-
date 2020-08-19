import React, { useReducer } from "react";
import axios from "axios";
import aContext from "./aContext";
import aReducer from "./aReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../Functions";
import { response } from "express";

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
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.res.data.msg,
      });
    }
  };

  //Login User
  const login = async (useri) => {
    let useri = {
      name,
      email,
      phone,
      password,
    };

    try {
      const user = await axios.post();
    } catch (err) {}
  };

  // Load User
  const loaduser = () => console.log("loaduser");

  // Logout
  const logout = () => console.log("logout");

  // Clear Errors
  const clearerrors = () => console.log("clear errors");

  return (
    <aContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        user: state.user,
        Register,
        login,
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
