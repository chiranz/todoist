import React from "react";
import { Switch } from "react-router-dom";

// Local imports
import { Minimal, Main } from "./layouts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import RouteWithLayout from "./components/RouteWithLayout";
// API Base url setup

function Routes() {
  return (
    <Switch>
      <RouteWithLayout exact path="/" component={Landing} layout={Minimal} />
      <RouteWithLayout
        exact
        path="/dashboard"
        component={Dashboard}
        layout={Main}
        auth
      />
      <RouteWithLayout exact path="/login" component={Login} layout={Minimal} />
      <RouteWithLayout
        exact
        path="/signup"
        component={Signup}
        layout={Minimal}
      />
    </Switch>
  );
}

export default Routes;
