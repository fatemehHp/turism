import React from "react";
import PageNav from "../component/PageNav";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col ">
      <PageNav />
      <div className="w-full m-auto max-w-md mt-20 bg-white p-8 rounded-xl shadow-lg border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Login to Your Account
        </h2>
        <form className="space-y-6  ">
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
