import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, updateTask, deleteTask } from "../redux/taskReducer/action";
import { RootState } from "../redux/store";

const TaskList: React.FC = () => {
 const dispatch = useDispatch();
 const { tasks, isLoading } = useSelector((state: RootState) => state.task);
 console.log(tasks,isLoading);
 
const data=useSelector((state:RootState)=>state)
console.log(data);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleToggleComplete = (taskId: string, completed: boolean) => {
    dispatch(updateTask(taskId, { completed: !completed }));
  };

  const handleDelete = (taskId: string) => {
    dispatch(deleteTask(taskId));
  };

  if (isLoading) return <p className="text-center">Loading tasks...</p>;

  return (
    <div className="p-4 bg-white rounded-md shadow">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task:any) => (
            <li key={task._id} className="flex justify-between items-center p-2 border-b">
              <span
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
                onClick={() => handleToggleComplete(task._id, task.completed)}
              >
                {task.title}
              </span>
              <button onClick={() => handleDelete(task._id)} className="text-red-500">
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
