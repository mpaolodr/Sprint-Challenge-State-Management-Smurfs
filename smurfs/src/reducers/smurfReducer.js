// import actions
import { LOADING, FETCH_DATA, SET_ADD, ADD_SMURF } from "../actions";

const initialState = {
  isLoading: false,
  isAdding: false,
  isEditing: false,
  data: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      };

    case SET_ADD:
      return {
        ...state,
        isAdding: true
      };

    case FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case ADD_SMURF:
      return {
        ...state,
        isLoading: false,
        isAdding: false,
        data: action.payload
      };

    default:
      return state;
  }
};
