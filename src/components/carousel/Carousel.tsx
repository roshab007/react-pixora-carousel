import clsx from "clsx";
import React from "react";
import { CarouselProps } from "../../types/types";
import CarouselSlide from "./CarouselSlide";

const Carousel: React.FC<CarouselProps> = ({
  images,
  viewportRef,
  carouselContainerClassName,
  carouselContainerStyle,
  carouselImageClassName,
  carouselImageStyle,
  carouselSlideStyle,
  carouselSlideClassName,
}) => {
  return (
    <div
      className={clsx("carousel-container", carouselContainerClassName)}
      style={carouselContainerStyle}
    >
      <div className={clsx("carousel-viewport")} ref={viewportRef}>
        <div className={clsx("carousel-viewport-inner")}>
          {images.map((image, index) => (
            <CarouselSlide
              key={index}
              image={image}
              index={index}
              carouselImageClassName={carouselImageClassName}
              carouselImageStyle={carouselImageStyle}
              carouselSlideClassName={carouselSlideClassName}
              carouselSlideStyle={carouselSlideStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
