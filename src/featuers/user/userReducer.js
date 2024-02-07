import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
