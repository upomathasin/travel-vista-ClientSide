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
    <div ref={sliderRef} className="keen-slider" style={{ height: "200px" }}>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/TmbWjvD/torres-del-paine-national-park-chile-MOSTBEAUTIFUL0921-4dfe4d2e67aa4f28ace7cf7cd21f4c8c.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/BzgnXjB/1124157.jpg
         "
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src=" https://i.ibb.co/2Fc3tn0/pngegg-5.png"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/h8sTRKb/beautiful-tropical-beach-sea.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/b510QXt/2-south-island-new-zealand-getty.jpg"
        />
      </div>
      <div className="keen-slider__slide number-slide1">
        <img
          className=" object-cover w-full h-full"
          src="https://i.ibb.co/dP0mkF0/960x0.webp"
        />
      </div>
    </div>
  );
}
