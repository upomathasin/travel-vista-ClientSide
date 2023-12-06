import React from "react";
import Choice from "../Choice/Choice";

export default function TravelChoice() {
  const photos = [
    {
      title: "PARIS SPECIAL TOUR",
      p: "France/Paris",
      src: "https://i.ibb.co/mHFg577/pngegg-6.png",
      price: 100,
    },
    {
      title: "INDIA SPECIAL TOUR",
      p: "Tajmahal/India",
      src: "https://i.ibb.co/9c0X8Z3/India-Is-Worlds-Most-Beautiful-Country-Says-Research-Something-We-Already-Know.jpg",
      price: 60,
    },
    {
      title: "MALAYSIA SPECIAL TOUR",
      p: "Malaysia",
      src: "https://i.ibb.co/TqVDxrJ/iskandar-malaysia-city-768x436.jpg",
      price: 110,
    },
    {
      title: "CANADA SPECIAL TOUR",
      p: "Canada",
      src: "https://i.ibb.co/r7D2HFB/CN-Tower-Getty-Images-615764386.webp",
      price: 130,
    },
    {
      title: "Switzerland SPECIAL TOUR",
      p: "Switzerland",
      src: "https://i.ibb.co/Vv2yCHP/588661nitsa.jpg",
      price: 110,
    },
    {
      title: "AMERICA SPECIAL TOUR",
      p: "America",
      src: "https://i.ibb.co/kmb9R4h/pexels-pixabay-356844.jpg",
      price: 190,
    },
  ];

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
        {photos.map((photo) => {
          return (
            <Choice
              pic={photo.src}
              title={photo.title}
              p={photo.p}
              price={photo.price}
            />
          );
        })}
      </div>
    </div>
  );
}
