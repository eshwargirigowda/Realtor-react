import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button
      className="flex w-full items-center justify-center uppercase 
      bg-red-700 px-7 py-3 text-white text-sm font-medium
      hover:bg-red-800 rounded active:bg-red-900 shadow-md
      hover:shadow-lg active:shadow-lg transition duration-150
      ease-in-out"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with google
    </button>
  );
}
