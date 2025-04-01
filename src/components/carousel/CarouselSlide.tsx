import clsx from "clsx";
import React, { useState } from "react";
import { CarouselSlideProps } from "../../types/types";

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  carouselImageClassName,
  carouselImageStyle,
  carouselSlideClassName,
  carouselSlideStyle,
  image,
  index,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={clsx("carousel-slide", carouselSlideClassName)}
      style={carouselSlideStyle}
    >
      {isLoading && <div className="carousel-skeleton" />}
      <img
        src={image.src}
        alt={image.alt || `Slide ${index + 1}`}
        style={{
          ...carouselImageStyle,
          display: isLoading ? "none" : "block",
        }}
        className={clsx("carousel-image", carouselImageClassName)}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default CarouselSlide;
