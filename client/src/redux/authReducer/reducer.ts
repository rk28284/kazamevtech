import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
 
  } from "./actionType";
  
  interface AuthState {
    isLoading: boolean;
    isError: boolean;
    user: any;
    isAuthenticated: boolean;
  }
  
  const initialState: AuthState = {
    isLoading: false,
    isError: false,
    user: null,
    isAuthenticated: false,
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, isLoading: true };
  
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false, user: action.payload, isAuthenticated: true };
  
      case LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true, isAuthenticated: false };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  