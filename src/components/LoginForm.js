import React, { useState } from "react";

const LoginForm = ({ onSwitchToSignup, onLogin }) => {
  const [email, setEmail] = useState(""); // Track email input
  const [password, setPassword] = useState(""); // Track password input
  const [username, setUsername] = useState(""); // Track username input

  // Handle form submission and pass the username to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onLogin function from the parent component and pass the username
    if (username &&  password) {
      onLogin(username); // Trigger login with username
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="bg-white p-8 shadow-lg rounded-md border w-96">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Username input */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
          />
        </div>

        {/* Email input */}
        {/* <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div> */}

        {/* Password input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </div>

        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="bg-orange-300 text-white py-2 px-4 rounded-md shadow hover:bg-orange-400"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-blue-300 text-white py-2 px-4 rounded-md shadow hover:bg-blue-400"
            onClick={onSwitchToSignup}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
