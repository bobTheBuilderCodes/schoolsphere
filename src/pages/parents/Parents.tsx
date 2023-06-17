import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Parents = () => {
  return (
    <>
      <div className="flex justify-around px-5">
        <NavLink
          to=""
          end
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Mother
        </NavLink>
        <NavLink
          to="father"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Father
        </NavLink>
        <NavLink
          to="guardian"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Guardian
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Parents;
