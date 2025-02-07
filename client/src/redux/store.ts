import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from './authReducer/reducer'
import { thunk } from "redux-thunk";
import taskReducer from "./taskReducer/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  task:taskReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
