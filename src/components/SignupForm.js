import React from "react";

const SignupForm = ({ onSwitchToLogin }) => {
  return (
    <div className="bg-white p-8 shadow-lg rounded-md border w-96">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Sign up</h2>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between space-x-4">
          <button
            type="submit"
            className="bg-green-400 text-white py-2 px-4 rounded-md shadow hover:bg-green-500"
          >
            Register
          </button>
          <button
            type="button"
            className="bg-orange-300 text-white py-2 px-4 rounded-md shadow hover:bg-orange-400"
            onClick={onSwitchToLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
