import React from "react";
import TravelChoice from "../../Components/TravelChoice/TravelChoice";
import { useParallax } from "react-scroll-parallax";

export default function TourList() {
  const parallax = useParallax({
    speed: -10,
  });
  return (
    <div>
      <div
        ref={parallax.ref}
        className="hero"
        style={{
          backgroundImage: `url('https://i.ibb.co/Gss8jgj/female-tourists-spread-their-arms-held-their-wings-3518152-20231003092457.jpg')`,
          backgroundSize: "cover",
        }}
      ></div>
      <TravelChoice></TravelChoice>
    </div>
  );
}
