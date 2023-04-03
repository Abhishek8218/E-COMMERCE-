import React from 'react';
import { ImSpinner9 } from "react-icons/im";

function Loading() {
  return <div className="flex justify-center items-center h-screen gap-2">
    <div className="text-4xl font-semibold"></div>
    <ImSpinner9 className="text-5xl animate-spin" />
  </div>
}

export default Loading;