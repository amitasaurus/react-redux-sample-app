import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

/**
 * 
 * So, we create a function named configureStore in which we send a default state, 
 * and we create our store using the created reducer and the default state.
 */
function configureStore(state = { rotating: true }) {
	return createStore(rotateReducer, state);
}

export default configureStore;