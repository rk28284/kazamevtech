import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/authReducer/action";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    bio: "",
  });

  const dispatch = useDispatch<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await dispatch(signUpUser(formData));
      toast.success("Signup successful!");
      setFormData({ username: "", email: "", password: "", name: "", bio: "" }); 
    } catch (error) {
      toast.error("Signup failed! Please try again."); 
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full border p-2"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-2"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border p-2"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="bio"
          placeholder="Bio"
          className="w-full border p-2"
          onChange={handleChange}
          value={formData.bio}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Signup
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Signup;
