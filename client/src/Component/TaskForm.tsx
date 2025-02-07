import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskReducer/action";

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    dispatch(addTask({ title }));
    setTitle(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-gray-100 rounded-md">
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
