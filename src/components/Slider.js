import React from "react";
import { slides } from "../data/Slides";
import CardSlide from "./CardSlide";

const Slider = () => {
  return (
    <>
      {slides.slice(0, 3).map((slide) => (
        <CardSlide data={slide} />
      ))}
    </>
  );
};

export default Slider;
