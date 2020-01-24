import axios from "axios";

// action types
export const FETCH_DATA = "FETCH_DATA";
export const LOADING = "LOADING";

export const SET_ADD = "SET_ADD";

// action creator
export const fetchData = () => dispatch => {
  dispatch({ type: LOADING });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => console.log(err));
};

// toggle action creators
export const setAdding = () => {
  return {
    type: SET_ADD
  };
};
