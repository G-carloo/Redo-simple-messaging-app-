import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import aContext from "../../context/auth/aContext";

const PrivateRoute = ({ component: Component }) => {
  const aContext = useContext(aContext);
  const { isAuthenticated, loading } = aContext;

  return (
    <Route>
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

export default PrivateRoute;
