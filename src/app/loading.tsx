import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ClipLoader color="#01e37f" size={100} />
    </div>
  );
};

export default Loading;
