import Axios from "axios";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

// SET AUTHORIZATION HEADER
const setAuthorizationHeader = (token) => {
  const firebaseIdToken = `Bearer ${token}`;
  localStorage.setItem("FirebaseIdToken", firebaseIdToken);
  Axios.defaults.headers.common["Authorization"] = firebaseIdToken;
};

export const loginUser = (
  userData,
  history,
  { resetForm, setSubmitting, setErrors, setGlobalError }
) => async (dispatch) => {
  // Submit the form

  await Axios.post("/login", userData)
    .then((res) => {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: res.data,
      });
      setAuthorizationHeader(res.data.token);
      resetForm();
      setSubmitting(false);
      history.push("/dashboard");
    })
    .catch((err) => {
      const errors = err.response.data;
      if (errors.global) {
        setGlobalError(errors.global);
      } else {
        setErrors(errors);
      }
      setSubmitting(false);
    });
};
export const signupUser = (
  userData,
  history,
  { resetForm, setSubmitting, setErrors, setGlobalError }
) => async (dispatch) => {
  // Submit the form

  await Axios.post("/signup", userData)
    .then((res) => {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: res.data,
      });
      setAuthorizationHeader(res.data.token);
      resetForm();
      setSubmitting(false);
      history.push("/dashboard");
    })
    .catch((err) => {
      const errors = err.response.data;
      if (errors.global) {
        setGlobalError(errors.global);
      } else {
        setErrors(errors);
      }
      setSubmitting(false);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("FirebaseIdToken");
  delete Axios.defaults.headers.common["Authorization"];
  dispatch({
    type: SET_UNAUTHENTICATED,
  });
};
