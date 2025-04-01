import clsx from "clsx";
import React from "react";
import { ThumbnailsProps } from "../../types/types";
import { getThumbFlexDirection } from "../../utils/utils";
import ThumnailItem from "./ThumnailItem";

const Thumbnails: React.FC<ThumbnailsProps> = ({
  images,
  selectedIndex,
  onThumbClick,
  viewportRef,
  thumbnailPosition,
  hideThumbnailsOnMobile,
  thumbnailWrapperClassName,
  thumbnailWrapperStyle,
  thumbnailContainerClassName,
  thumbnailContainerStyle,
  thumbnailButtonClassName,
  thumbnailButtonSelectedClassName,
  thumbnailButtonSelectedStyle,
  thumbnailButtonStyle,
  thumbnailImageClassName,
  thumbnailImageStyle,
}) => {
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
          <ThumnailItem
            image={image}
            index={index}
            isSelected={selectedIndex === index}
            onClick={onThumbClick}
            key={index}
            thumbnailButtonClassName={thumbnailButtonClassName}
            thumbnailButtonStyle={thumbnailButtonStyle}
            thumbnailButtonSelectedClassName={thumbnailButtonSelectedClassName}
            thumbnailButtonSelectedStyle={thumbnailButtonSelectedStyle}
            thumbnailImageClassName={thumbnailImageClassName}
            thumbnailImageStyle={thumbnailImageStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;
