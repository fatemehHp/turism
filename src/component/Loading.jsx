import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500 border-solid"></div>
      <span className="ml-4 text-lg font-medium text-purple-700">
        Loading...
      </span>
    </div>
  );
};

export default Loading;
