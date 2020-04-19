import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./app.css";
import Axios from "axios";

// Local imports

import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";
import Dashboard from "./pages/Dashboard";
import AuthRoute from "./routes/AuthRoute";
import { useDispatch } from "react-redux";
import JwtDecode from "jwt-decode";
import { logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";
import GuestRoute from "./routes/GuestRoute";
// API Base url setup

let theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: blue[500],
    },
  },
});
theme = responsiveFontSizes(theme);

Axios.defaults.baseURL =
  "https://asia-east2-todoist-c686b.cloudfunctions.net/api";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.FirebaseIdToken;
    if (token) {
      const decodedToken = JwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        dispatch(logoutUser());
      } else {
        Axios.defaults.headers.common["Authorization"] = token;
        dispatch({
          type: SET_AUTHENTICATED,
          payload: { token },
        });
      }
    }
  }, [dispatch]);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <GuestRoute exact path="/" component={Landing} />
          <AuthRoute exact path="/dashboard" component={Dashboard} />
          <GuestRoute exact path="/login" component={Login} />
          <GuestRoute exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
