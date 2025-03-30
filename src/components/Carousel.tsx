import clsx from "clsx";
import React, { useState } from "react";
import { CarouselProps } from "../types/types";

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
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    Array(images.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div
      className={clsx("carousel-container", carouselContainerClassName)}
      style={carouselContainerStyle}
    >
      <div className={clsx("main-viewport")} ref={viewportRef}>
        <div className={clsx("main-viewport-inner")}>
          {images.map((image, index) => (
            <div
              className={clsx("carousel-slide", carouselSlideClassName)}
              key={index}
              style={carouselSlideStyle}
            >
              {loadingStates[index] && <div className="carousel-skeleton" />}
              <img
                src={image.src}
                alt={image?.alt}
                style={{
                  ...carouselImageStyle,
                  display: loadingStates[index] ? "none" : "block",
                }}
                className={clsx("carousel-image", carouselImageClassName)}
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
