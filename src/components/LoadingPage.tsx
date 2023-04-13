import { CircularProgress } from "@mui/material";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen bg-primary">
      <div className="absolute flex items-center justify-center gap-4 top-1/2 rigth-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-7xl font-bold mb-6">Tasker</h1>
        <CircularProgress className="text-white" />
      </div>
    </div>
  );
};

export default LoadingPage;
