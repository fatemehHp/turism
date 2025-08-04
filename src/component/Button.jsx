import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="  cursor-pointer px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl shadow transition duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
