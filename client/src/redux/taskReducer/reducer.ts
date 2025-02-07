import {
    GET_TASKS_REQUEST, GET_TASKS_SUCCESS, GET_TASKS_FAILURE,
    ADD_TASK_REQUEST, ADD_TASK_SUCCESS, ADD_TASK_FAILURE,
    UPDATE_TASK_REQUEST, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE,
    DELETE_TASK_REQUEST, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE
  } from "./actionType";
  
  interface Task {
    _id: string;
    title: string;
    completed: boolean;
  }
  
  interface TaskState {
    isLoading: boolean;
    isError: boolean;
    tasks: Task[];
  }
  
  const initialState: TaskState = {
    isLoading: false,
    isError: false,
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case GET_TASKS_REQUEST:
      case ADD_TASK_REQUEST:
      case UPDATE_TASK_REQUEST:
      case DELETE_TASK_REQUEST:
        return { ...state, isLoading: true };
  
      case GET_TASKS_SUCCESS:
        return { ...state, isLoading: false, tasks: action.payload };
  
      case ADD_TASK_SUCCESS:
        return { ...state, isLoading: false, tasks: [...state.tasks, action.payload] };
  
      case UPDATE_TASK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tasks: state.tasks.map((task) =>
            task._id === action.payload._id ? action.payload : task
          ),
        };
  
      case DELETE_TASK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tasks: state.tasks.filter((task) => task._id !== action.payload),
        };
  
      case GET_TASKS_FAILURE:
      case ADD_TASK_FAILURE:
      case UPDATE_TASK_FAILURE:
      case DELETE_TASK_FAILURE:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };
  
  export default taskReducer;
  