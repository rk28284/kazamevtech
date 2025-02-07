import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import TaskList from "./TaskList";

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/task" element={<TaskList />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AllRoutes;
