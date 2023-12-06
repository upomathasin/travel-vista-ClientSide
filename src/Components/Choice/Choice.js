import React from "react";

export default function Choice({ pic, title, p, price }) {
  return (
    <div className="card  w-96 bg-base-100 shadow-xl rounded-none ">
      <figure>
        <img src={pic} style={{ width: "350px", height: "300px" }} />
      </figure>
      <div className="card-body">
        <p className=" bg-slate-500 text-white text-center w-20">${price}</p>
        <p>{p}</p>
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn w-full btn-outline rounded-none">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
