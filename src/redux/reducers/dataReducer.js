import { SET_TASK, SET_PROJECT, SET_PROJECTS, SET_TASKS } from "../types";

const initialState = {
  projects: [],
  project: {},
  tasks: [],
  task: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case SET_TASK:
      return {
        ...state,
        task: action.payload,
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case SET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};
