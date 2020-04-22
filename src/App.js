import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Axios from "axios";

import { red, blue } from "@material-ui/core/colors";
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import JwtDecode from "jwt-decode";

// Local imports
import "./app.css";
import { logoutUser } from "./redux/actions/userActions";
import { SET_AUTHENTICATED } from "./redux/types";
import Routes from "./Routes";

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

// API Base url setup
Axios.defaults.baseURL =
  "https://asia-east2-todoist-c686b.cloudfunctions.net/api";

const browserHistory = createBrowserHistory();

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
    <Router history={browserHistory}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
