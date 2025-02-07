import axios from "axios";
import {
  GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASKS_FAILURE,
  ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE,
  UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE,
  DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE
} from "./actionType";

// Base URL
const API_URL = "https://kazamevtech-backend.onrender.com/api"; 
//const API_URL=`http://localhost:8080/api`

// Fetch Tasks
export const fetchTasks = () => async (dispatch: any) => {
  dispatch({ type: GET_TASKS_REQUEST });
  try {
const res = await axios.get(`${API_URL}/task`);
    dispatch({ type: GET_TASKS_SUCCESS, payload: res.data });
console.log(res.data,"get data task");
    
  } catch (error) {
    dispatch({ type: GET_TASKS_FAILURE, payload: error.message });
  }
};

// Add Task
export const addTask = (taskData: { title: string }) => async (dispatch: any) => {
  dispatch({ type: ADD_TASK_REQUEST });
  try {
    const res = await axios.post(`${API_URL}/task/add`, taskData);
    dispatch({ type: ADD_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADD_TASK_FAILURE, payload: error.message });
  }
};

// Update Task
export const updateTask = (taskId: string, updatedData: { completed: boolean }) => async (dispatch: any) => {
  dispatch({ type: UPDATE_TASK_REQUEST });
  try {
    const res = await axios.put(`${API_URL}/task/${taskId}`, updatedData);
    dispatch({ type: UPDATE_TASK_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: UPDATE_TASK_FAILURE, payload: error.message });
  }
};

// Delete Task
export const deleteTask = (taskId: string) => async (dispatch: any) => {
  dispatch({ type: DELETE_TASK_REQUEST });
  try {
    await axios.delete(`${API_URL}/task/${taskId}`);
    dispatch({ type: DELETE_TASK_SUCCESS, payload: taskId });
  } catch (error) {
    dispatch({ type: DELETE_TASK_FAILURE, payload: error.message });
  }
};
