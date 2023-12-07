import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthContextProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  } else {
    alert("Please Login first");
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
      ></Navigate>
    );
  }
}
