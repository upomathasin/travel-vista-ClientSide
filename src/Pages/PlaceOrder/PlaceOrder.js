import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";

export default function PlaceOrder() {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  // console.log(location.state.booking);
  const { booking } = location.state;
  const confirmBooking = () => {
    fetch(`http://localhost:5000/placeOrder/${user.email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="min-h-screen">
      <div className="text-slate-400 mt-10 ">
        <h1 className=" text-center text-4xl">Place Order</h1>
      </div>

      <div className="grid grid-cols-1    md:grid-cols-2 gap-10 p-10">
        <div className="card rounded-none lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={booking.src} alt="Album" className=" h-full" />
          </figure>
          <div className="card-body ">
            <p className="font-bold text-4xl">${booking.price}</p>
            <p className="  text-info">{booking.p}</p>
            <h2 className="text-3xl">{booking.title}</h2>

            <p>{booking.des}</p>
          </div>
        </div>

        <div className="card lg:card-side bg-base-100 shadow-xl border rounded-none">
          <div className="card-body">
            <h2 className="card-title">Email: {user.email}</h2>
            <form>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-2 border my-2"
              />
              <br></br>
              <input
                type="text"
                className="w-full p-2 border my-2"
                placeholder="Enter your Phone Number"
              />{" "}
              <br></br>
            </form>
            <div className="card-actions justify-center  ">
              <button
                onClick={confirmBooking}
                className="btn btn-info text-white  btn-sm"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
