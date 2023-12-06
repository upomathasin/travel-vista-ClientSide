import React from "react";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Slider from "../../Components/Slider/Slider";
import TravelChoice from "../../Components/TravelChoice/TravelChoice";

export default function Home() {
  // console.log(process.env.REACT_APP_UPOMA);
  return (
    <div>
      <TopBanner></TopBanner>

      <TravelChoice></TravelChoice>
      <Slider></Slider>
    </div>
  );
}
