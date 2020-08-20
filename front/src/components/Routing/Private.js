import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import aContext from "../../context/auth/aContext";

export const Private = ({ component: Component, ...rest }) => {
  const aContext = useContext(aContext);
  const { isAuthenticated, loading } = aContext;

  return (
    <Route>
      {...rest}
      render=
      {(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='./login' />
        ) : (
          <Component {...props} />
        )
      }
    </Route>
  );
};
