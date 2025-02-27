import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 ${className}`}>
      {text}
    </button>
  );
};

export default Button;
