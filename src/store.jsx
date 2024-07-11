import { createStore } from "redux";
import rootReducer from "./reducers"; // Replace with your actual root reducer

const store = createStore(rootReducer);

export default store;
