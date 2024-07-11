// reducers.js

import { combineReducers } from "redux";

// Define your reducers here
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  // Add more reducers as needed
});

export default rootReducer;
