import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.css";

// Local imports
import Header from "./components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { red, blue } from "@material-ui/core/colors";
import Dashboard from "./pages/Dashboard";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: blue[500],
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
