import { AxisOptionType } from "embla-carousel/components/Axis";
import { ThumbnailPosition } from "../types/types";

export const getAxis = (
  thumbnailPosition: ThumbnailPosition
): AxisOptionType => {
  if (thumbnailPosition === "left" || thumbnailPosition === "right") {
    return "y";
  }

  return "x";
};

export const getFlexDirection = (
  thumbnailPosition: ThumbnailPosition
): React.CSSProperties["flexDirection"] => {
  if (thumbnailPosition === "left" || thumbnailPosition === "right") {
    return "row";
  }

  return "column";
};

export const getThumbFlexDirection = (
  thumbnailPosition: ThumbnailPosition
): React.CSSProperties["flexDirection"] => {
  if (thumbnailPosition === "top" || thumbnailPosition === "bottom") {
    return "row";
  }

  return "column";
};
