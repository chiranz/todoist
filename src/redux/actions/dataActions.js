import Axios from "axios";
import { SET_TASKS, SET_PROJECTS } from "../types";

export const getAllTasks = () => async (dispatch) => {
  await Axios.get("/tasks")
    .then((res) => {
      dispatch({
        type: SET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getAllProjects = () => async (dispatch) => {
  await Axios.get("/projects")
    .then((res) => {
      dispatch({
        type: SET_PROJECTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
