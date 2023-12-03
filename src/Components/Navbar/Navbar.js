import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";
import Swal from "sweetalert2";
export default function Navbar() {
  const { user, logOut, loading } = useContext(AuthContext);

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
              <Link to="/">Tour List</Link>
            </li>
            <li>
              <Link to="/register">Registration</Link>
            </li>
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
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Travel Vista</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 py-2">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Tour List</Link>
          </li>
          <li>
            <Link to="/register">Registration</Link>
          </li>
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
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex justify-center items-center">
            <div className="avatar">
              <div className="w-12 me-3 rounded-full">
                <img
                  src={user && user.photoURL}
                  className=" object-cover w-full h-full"
                />
              </div>
            </div>
            <h1 className="me-2">
              Welcome{" "}
              <span className="text-primary">{user && user.displayName}</span>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
