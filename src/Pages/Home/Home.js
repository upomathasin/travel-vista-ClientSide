import React from "react";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Slider from "../../Components/Slider/Slider";

export default function Home() {
  // console.log(process.env.REACT_APP_UPOMA);
  return (
    <div>
      <TopBanner></TopBanner>
      <Slider></Slider>
    </div>
  );
}
