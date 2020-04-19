import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function AuthRoute({ component: Component, ...rest }) {
  const authenticated = useSelector((state) => state.user.authenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
