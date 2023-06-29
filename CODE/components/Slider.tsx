import { SliderProps } from "@/types";
import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Slider = ({ img1, img2 }: SliderProps) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={img1} alt="before" />}
      itemTwo={<ReactCompareSliderImage src={img2} alt="after" />}
    />
  );
};

export default Slider;
