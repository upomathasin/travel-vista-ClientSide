import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthContextProvider from "./Providers/AuthContextProvider";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { ParallaxProvider } from "react-scroll-parallax";
import TourList from "./Pages/TourList/TourList";
import MyCart from "./Pages/MyCart/MyCart";
import ManageAllOrder from "./Pages/ManageAllOrder/ManageAllOrder";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/tourList",
          element: <TourList></TourList>,
        },
        {
          path: "/placeOrder/:id",
          element: (
            <PrivateRoute>
              <PlaceOrder></PlaceOrder>,
            </PrivateRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <PrivateRoute>
              <MyCart></MyCart>
            </PrivateRoute>
          ),
        },
        {
          path: "/manageOrder",
          element: (
            <PrivateRoute>
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
          ),
        },
        {
          path: "/orders",
          element: (
            <PrivateRoute>
              <PlaceOrder></PlaceOrder>,
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <ParallaxProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ParallaxProvider>
  );
}

export default App;
