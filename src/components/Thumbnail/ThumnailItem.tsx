import clsx from "clsx";
import React, { useState } from "react";
import { ThumbnailItemProps } from "../../types/types";

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
}) => {
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading && <div className="thumbnail-skeleton" />}
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
      />
    </button>
  );
};

export default ThumnailItem;
