import clsx from "clsx";
import React, { useState } from "react";
import { ThumbnailsProps } from "../types/types";
import { getThumbFlexDirection } from "../utils/utils";

const Thumbnails: React.FC<ThumbnailsProps> = ({
  images,
  selectedIndex,
  onThumbClick,
  viewportRef,
  thumbnailPosition,
  thumbnailButtonClassName,
  thumbnailButtonSelectedClassName,
  thumbnailButtonSelectedStyle,
  thumbnailButtonStyle,
  thumbnailImageClassName,
  thumbnailImageStyle,
  thumbnailContainerClassName,
  thumbnailContainerStyle,
  thumbnailWrapperClassName,
  thumbnailWrapperStyle,
  hideThumbnailsOnMobile,
}) => {
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    Array(images.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) =>
      prev.map((state, i) => (i === index ? false : state))
    );
  };

  return (
    <div
      className={clsx(
        "thumbnail-wrapper",
        { hidden: hideThumbnailsOnMobile },
        thumbnailWrapperClassName
      )}
      style={thumbnailWrapperStyle}
      ref={viewportRef}
    >
      <div
        className={clsx("thumbnail-container", thumbnailContainerClassName)}
        style={{
          flexDirection: getThumbFlexDirection(thumbnailPosition),
          ...thumbnailContainerStyle,
        }}
      >
        {images.map((image, index) => (
          <button
            onClick={() => onThumbClick(image, index)}
            className={clsx(
              "thumbnail-button",
              thumbnailButtonClassName,
              { selected: index === selectedIndex },
              thumbnailButtonSelectedClassName && {
                [thumbnailButtonSelectedClassName]: index === selectedIndex,
              }
            )}
            key={index}
            style={{
              ...thumbnailButtonStyle,
              ...(index === selectedIndex && thumbnailButtonSelectedStyle),
            }}
          >
            {loadingStates[index] && <div className="thumbnail-skeleton" />}
            <img
              src={image.src}
              alt={image?.alt || `Thumbnail ${index + 1}`}
              style={{
                ...thumbnailImageStyle,
                display: loadingStates[index] ? "none" : "block",
              }}
              className={clsx("thumbnail-image", thumbnailImageClassName)}
              onLoad={() => handleImageLoad(index)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;
