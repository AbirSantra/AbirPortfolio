import Loader from "@/components/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default Loading;
