import React, { useEffect, useState } from "react";
import Choice from "../Choice/Choice";

export default function TravelChoice() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/offers")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" p-12 ">
      {" "}
      <div className="text-center my-10 ">
        <h1 className="my-2 ">Find Out The Best Travel Choice in Asia</h1>
        <h1 className="text-5xl uppercase font-bold  text-slate-700">
          Awesome Tour
        </h1>
      </div>
      <div className=" grid justify-center items-center sm:grid-cols-1  md:grid-cols-3  gap-10  ">
        {services.map((service) => {
          return <Choice choice={service} />;
        })}
      </div>
    </div>
  );
}
