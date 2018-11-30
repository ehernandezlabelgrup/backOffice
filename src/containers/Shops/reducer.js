import { GET_SHOPS_SUCCESS, FETCH_GET_SHOPS, GET_AUTOCOMPLETE_SUCCESS } from "./constants";

const initialState = {
  data: [],
  sync: false,
  error: false,
  predictions: []
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_SHOPS:

      return {
        ...state,
        sync: true
      };
    case GET_SHOPS_SUCCESS:

      return {
        ...state,
        data: action.shops,
        sync: false,
        error: false,
      };
    case GET_AUTOCOMPLETE_SUCCESS:
      const { predictions } = action
      console.log(predictions)
      return {
        ...state,
        predictions
      };
    default:
      return state;
  }
}