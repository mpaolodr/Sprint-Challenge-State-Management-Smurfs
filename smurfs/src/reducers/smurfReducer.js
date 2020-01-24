// import actions
import { LOADING, FETCH_DATA, SET_ADD, SET_EDIT, ERROR } from "../actions";

const initialState = {
  isLoading: false,
  isAdding: false,
  isEditing: false,
  data: [],
  error: ""
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

    case SET_EDIT:
      return {
        ...state,
        isEditing: true
      };

    case FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isAdding: false,
        isEditing: false,
        data: action.payload
      };

    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
