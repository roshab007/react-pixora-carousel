import clsx from "clsx";
import React, { useState } from "react";
import { ThumbnailItemProps } from "../../types/types";
import Placeholder from "../Placeholder";

const ThumnailItem: React.FC<ThumbnailItemProps> = ({
  thumbnailButtonClassName,
  thumbnailButtonSelectedClassName,
  thumbnailButtonSelectedStyle,
  thumbnailButtonStyle,
  thumbnailImageClassName,
  thumbnailImageStyle,
  index,
  isSelected,
  image,
  onClick,
  thumbnailOverlay,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <button
      onClick={() => onClick(image, index)}
      className={clsx(
        "thumbnail-button",
        thumbnailButtonClassName,
        { selected: isSelected },
        thumbnailButtonSelectedClassName && {
          [thumbnailButtonSelectedClassName]: isSelected,
        }
      )}
      style={{
        ...thumbnailButtonStyle,
        ...(isSelected && thumbnailButtonSelectedStyle),
      }}
    >
      {isLoading && !isError && <div className="thumbnail-skeleton" />}
      {thumbnailOverlay && !isError && !isLoading && (
        <div className="thumbnail-overlay">
          {typeof thumbnailOverlay === "function"
            ? thumbnailOverlay()
            : thumbnailOverlay}
        </div>
      )}
      {isError ? (
        <Placeholder hideMessage />
      ) : (
        <img
          src={image.src}
          alt={image?.alt || `Thumbnail ${index + 1}`}
          style={{
            ...thumbnailImageStyle,
            display: isLoading ? "none" : "block",
          }}
          className={clsx("thumbnail-image", thumbnailImageClassName)}
          onLoad={() => {
            setIsLoading(false);
          }}
          onError={() => {
            setIsError(true);
          }}
        />
      )}
    </button>
  );
};

export default ThumnailItem;
