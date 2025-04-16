import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
            ${pathMathRoute("/") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
              ${pathMathRoute("/offers") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/offers")}
            >
              offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] 
              ${pathMathRoute("/Sign-In") && "text-black border-b-red-500"}`}
              onClick={() => navigate("/Sign-In")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
