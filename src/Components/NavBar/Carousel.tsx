import React, { useState, useEffect } from "react";
import Image from "next/image";
import slider from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const SliderData = [
  { color: "#c4c4c4", image: slider },
  { color: "#e1bee7", image: slider2 },
  { color: "#64b5f6", image: slider3 },
];

const ImageSlider = (props: any) => {
  const { onChangeColor } = props;
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    onChangeColor(SliderData[current === length - 1 ? 0 : current + 1].color);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    onChangeColor(SliderData[current === 0 ? length - 1 : current - 1].color);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  //   useEffect(() => {
  //     setTimeout(function () {
  //       setCurrent(current === 0 ? length - 1 : current - 1);
  //     }, 7000);
  //   }, [current]);

  return (
    <div className="slider">
      <KeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
      <KeyboardArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderData?.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <Image
              src={slide.image}
              alt="image"
              // placeholder="blur"
              layout="responsive"
              width={864}
              height={361}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
