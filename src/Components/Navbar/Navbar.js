import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  const { user, logOut, loading, cart } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tourList">Tour List</Link>
            </li>

            {!user && (
              <li>
                <Link to="/register">Registration</Link>
              </li>
            )}
            {user ? (
              <li>
                {" "}
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <li>
                {" "}
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/cart">
                  <GrCart className=" text-xl"></GrCart>
                  <p className="bg-orange-400  w-3 p-1">
                    {cart && cart.length}
                  </p>
                </Link>
              </li>
            )}

            {user && (
              <li>
                <Link to="/manageOrder">Manage Orders</Link>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Travel Vista</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-2 py-2">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/tourList">Tour List</Link>
          </li>

          {!user && (
            <li>
              <Link to="/register">Registration</Link>
            </li>
          )}
          {user && (
            <li>
              {" "}
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/cart">
                <GrCart className=" text-xl"></GrCart>
                <p className="bg-orange-400 rounded-md p-1">
                  {cart && cart.length}
                </p>
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/manageOrder">Manage Orders</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
