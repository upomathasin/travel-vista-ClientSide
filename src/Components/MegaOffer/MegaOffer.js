import React from "react";

export default function MegaOffer() {
  return (
    <div
      className="hero min-h-screen bg-base-100 mb-10 p-20"
      style={{
        backgroundImage: `url('https://i.ibb.co/hx0NBfD/beach-1449008-1280.jpg')`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse text-slate-900">
        <div className="card  rounded-none  border-t-8 border-t-blue-400 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control mt-6">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Join Now</h1>
                <p className="py-6 text-2xl  md:text-3xl">
                  and get 30% Mega discount for family tour !!
                </p>
              </div>
              <button className="btn  bg-blue-400   rounded-none">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
