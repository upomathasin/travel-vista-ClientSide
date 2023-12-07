import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Choice({ choice }) {
  const { src, title, p, price, des } = choice;
  const navigate = useNavigate();
  const handleBooking = () => {
    navigate("/placeOrder", { state: { booking: choice } });
  };
  return (
    <div className="card  w-96 bg-base-100 shadow-xl rounded-none ">
      <figure>
        <img src={src} style={{ width: "350px", height: "300px" }} />
      </figure>
      <div className="card-body">
        <p className=" bg-slate-500 text-white text-center w-20">${price}</p>
        <p>{p}</p>
        <h2 className="card-title">{title}</h2>
        <p>{des}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleBooking}
            className="btn w-full btn-outline rounded-none"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
