import React, { useEffect, useState } from "react";
import Choice from "../Choice/Choice";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function TravelChoiceSection() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://travel-vista-server-side.vercel.app/offers")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" p-12 ">
      <SectionTitle
        subTitle="Find Out The Best Travel Choice in Asia"
        title=" Awesome Tour"
      ></SectionTitle>

      <div className=" grid justify-center items-center sm:grid-cols-1  md:grid-cols-3  gap-10  ">
        {services.map((service) => {
          return <Choice choice={service} />;
        })}
      </div>
    </div>
  );
}
