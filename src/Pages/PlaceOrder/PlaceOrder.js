import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthContextProvider";
import Swal from "sweetalert2";

export default function PlaceOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, myCart } = useContext(AuthContext);
  const { id } = useParams();
  const [booking, setBooking] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/placeOrder/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const confirmBooking = (event) => {
    event.preventDefault();

    const orderInfo = {
      title: booking.title,
      p: booking?.p,
      src: booking?.src,
      price: booking?.price,
      des: booking?.des,
      name: event.target.name.value,
      phone: event.target.phone.value,
    };
    console.log(orderInfo);
    fetch(`http://localhost:5000/placeOrder/${user.email}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          myCart();
          Swal.fire({
            title: "Enjoy!",
            text: "You booking is confirmed!",
            icon: "success",
          });

          navigate("/cart");
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div className="text-slate-400 mt-10 ">
        <h1 className=" text-center text-4xl">Place Order</h1>
      </div>

      <div className="grid grid-cols-1    md:grid-cols-2 gap-10 p-10 ">
        <div className="card rounded-none lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={booking.src} alt="Album" className="h-full" />
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
            <form onSubmit={confirmBooking}>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="w-full p-2 border my-2"
              />
              <br></br>
              <input
                name="phone"
                type="text"
                className="w-full p-2 border my-2"
                placeholder="Enter your Phone Number"
              />{" "}
              <br></br>
              <button type="submit" className="btn btn-info text-white  btn-sm">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
