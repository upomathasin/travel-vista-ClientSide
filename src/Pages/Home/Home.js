import React from "react";
import TopBanner from "../../Components/TopBanner/TopBanner";
import Slider from "../../Components/Slider/Slider";
import TravelChoice from "../../Components/TravelChoice/TravelChoice";
import MegaOffer from "../../Components/MegaOffer/MegaOffer";
import TravelChoiceSection from "../../Components/TravelChoiceSection/TravelChoiceSection";

export default function Home() {
  return (
    <div>
      <TopBanner></TopBanner>
      <Slider></Slider>
      <TravelChoiceSection></TravelChoiceSection>
      <MegaOffer></MegaOffer>
    </div>
  );
}
