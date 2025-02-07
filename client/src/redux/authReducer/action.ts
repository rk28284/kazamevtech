import axios from "axios";
import { Dispatch } from "redux";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

// Signup Action
const API_URL=`https://kazamevtech-backend.onrender.com`
export const signUpUser = (newUser: any) => async (dispatch: Dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  try {
    const res = await axios.post(`${API_URL}/register`, newUser);
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    console.log("jkHDKJWDHK");
    
  } catch (error) {
    dispatch({ type: SIGNUP_FAILURE });
  }
};

// Login Action
export const loginUser = (credentials: any) => async (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const res = await axios.post(`${API_URL}/login`, credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    console.log(res.data);
sessionStorage.setItem("token", res.data.token);
    
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
  }
};
