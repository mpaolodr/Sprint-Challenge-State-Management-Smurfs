import axios from "axios";

// action types
export const FETCH_DATA = "FETCH_DATA";
export const LOADING = "LOADING";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

export const SET_ADD = "SET_ADD";
export const SET_EDIT = "SET_EDIT";

// action creator
export const fetchData = () => dispatch => {
  dispatch({ type: LOADING });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => console.log(err));
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};

export const editSmurf = updatedSmurf => dispatch => {
  dispatch({ type: LOADING });
  axios
    .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(res => dispatch({ type: EDIT_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};

export const deleteSmurf = smurfId => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res => dispatch({ type: FETCH_DATA, payload: res.data }))
    .catch(err => console.log(err));
};

// toggle action creators
export const setAdding = () => {
  return {
    type: SET_ADD
  };
};

export const setEditing = () => {
  return {
    type: SET_EDIT
  };
};
