import clsx from "clsx";
import React, { useState } from "react";
import { CarouselSlideProps } from "../../types/types";
import Placeholder from "../Placeholder";

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  carouselImageClassName,
  carouselImageStyle,
  carouselSlideClassName,
  carouselSlideStyle,
  image,
  index,
  carouselOverlay,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div
      className={clsx("carousel-slide", carouselSlideClassName)}
      style={carouselSlideStyle}
    >
      {isLoading && !isError && <div className="carousel-skeleton" />}
      {carouselOverlay && !isError && !isLoading && (
        <div className="carousel-overlay">
          {typeof carouselOverlay === "function"
            ? carouselOverlay()
            : carouselOverlay}
        </div>
      )}
      {isError ? (
        <Placeholder />
      ) : (
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
          onError={() => {
            setIsError(true);
          }}
        />
      )}
    </div>
  );
};

export default CarouselSlide;
