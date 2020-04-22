import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, auth, ...rest } = props;
  const { authenticated } = useSelector((state) => state.user);

  if (auth) {
    return (
      <Route
        {...rest}
        render={(matchProps) =>
          authenticated ? (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        authenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
