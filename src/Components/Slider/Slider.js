import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 10000, easing: (t) => t };

export default function Slider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: "300px" }}>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/RjxpwfK/young-woman-hiker-taking-photo-with-smartphone-mountains-peak-winter.jpg"
        />
      </div>
    </div>
  );
}
