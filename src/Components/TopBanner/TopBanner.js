import React, { useRef, useState } from "react";
import "./TopBanner.css";
export default function TopBanner() {
  return (
    <div className="carousel w-full ">
      <div
        id="slide2"
        className="carousel-item relative w-full  h-[600px] "
        style={{
          backgroundImage: `url('https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div>
            <h1
              className="text-4xl text-center mb-4  "
              style={{ color: "white", fontFamily: "Bitter, serif" }}
            >
              travel Vista
            </h1>
            <h1
              className="text-5xl text-center font-bold mb-2  "
              style={{ color: "white" }}
            >
              DISCOVER THE
            </h1>
            <h1
              className="text-5xl text-center  font-bold"
              style={{ color: "white" }}
            >
              JOURNEY OF LIFETIME
            </h1>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px] ">
        <img
          src="https://i.ibb.co/80DcyGZ/beautiful-tropical-beach-sea.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div>
            <h1
              className="text-4xl text-center mb-4  "
              style={{ color: "white", fontFamily: "Bitter, serif" }}
            >
              travel Vista
            </h1>
            <h1
              className="text-5xl text-center font-bold mb-2  "
              style={{ color: "white" }}
            >
              DISCOVER THE
            </h1>
            <h1
              className="text-5xl text-center  font-bold"
              style={{ color: "white" }}
            >
              JOURNEY OF LIFETIME
            </h1>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full   h-[600px] ">
        <img src="https://i.ibb.co/0Bh0Yvs/1124157.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div>
            <h1 className="text-5xl text-center font-bold mb-2  ">
              DISCOVER THE
            </h1>
            <h1 className="text-5xl text-center  font-bold">
              JOURNEY OF LIFETIME
            </h1>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
