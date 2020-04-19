import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

// MUI imports
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import MuiLink from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// Local imports
import { registerValidationSchema } from "../utils/yupValidation";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.dark,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    position: "relative",
  },
  progress: {
    position: "absolute",
  },
}));

export default function Signup({ history }) {
  const [globalError, setGlobalError] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (values, { resetForm, setSubmitting, setErrors }) => {
    // Submit the form
    const actions = { resetForm, setSubmitting, setErrors, setGlobalError };
    dispatch(signupUser(values, history, actions));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography variant="body2" color="error">
          {globalError && globalError}
        </Typography>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: "",
            password: "",
            username: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email ? true : false}
                helperText={errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.username && touched.username ? true : false}
                helperText={errors.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password ? true : false}
                helperText={errors.password}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.confirmPassword && touched.confirmPassword
                    ? true
                    : false
                }
                helperText={errors.confirmPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Sign Up
                {isSubmitting ? (
                  <CircularProgress size={30} className={classes.progress} />
                ) : (
                  ""
                )}
              </Button>
              <Grid container>
                <Grid item>
                  <MuiLink
                    color="secondary"
                    component={Link}
                    to="/login"
                    variant="body2"
                  >
                    {"Already have an account? Sign In"}
                  </MuiLink>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
