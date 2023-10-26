import * as TYPES from "./ActionType";
// Create state
const initialState = {
    // Display a loading spinner in our components
  loading: true,
  // Represent data which we call from API
  data: [], 
  // Display error to the user when API request might fail 
  error: "",
};
// ACTION
export const fetchDataRequest = (data) => {
  return {
    type: TYPES.FETCH_DATA_REQUEST,
    payload: data,
  };
};
export const fetchDataSucess = (data) => {
  return {
    type: TYPES.FETCH_DATA_SUCCESS,
    payload: data,
  };
};
export const fetchDataFailture = (error) => {
  return {
    type: TYPES.FETCH_DATA_FAILTURE,
    payload: error,
  };
};
// REDUCER
const fetchDataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.FETCH_DATA_REQUEST:
      return {
// Maybe initialState is a object which will have lots of property so we'd use spread operator
        ...state, 
        loading: true,
      };

    case TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        // Instead of data:action.payload we'd use destructuring to comfort
        data: payload,// from API
      };
    case TYPES.FETCH_DATA_FAILTURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,// from API
      };
    default:
      return state;
  }
};
export default fetchDataReducer;


//Synchronous action which runs according to the logic that we setup
//Async action which  calls API to fetch data and we will use that data in your application