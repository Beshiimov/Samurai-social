import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import dialogsPage from "./dialogsPage-reducer";
import usersPageReducer from "./usersPage-reducer";
import profileReducer from "./profile-reducer";
import weatherReducer from "./weather-reducer";

const reducers = combineReducers({
  authReducer,
  dialogsPage,
  usersPageReducer,
  profileReducer,
  weatherReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

window.store = store.getState();

export default store;
