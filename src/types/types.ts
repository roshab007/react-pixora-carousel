import { UseEmblaCarouselType } from "embla-carousel-react";

type Image = {
  src: string;
  alt?: string;
};

export type ThumbnailPosition = "bottom" | "left" | "right" | "top";

export type ThumbnailsProps = {
  images: Image[];
  selectedIndex: number;
  onThumbClick: (image: Image, index: number) => void;
  viewportRef: UseEmblaCarouselType[0];
  thumbnailContainerClassName?: string;
  thumbnailContainerStyle?: React.CSSProperties;
  thumbnailPosition: ThumbnailPosition;
  thumbnailButtonStyle?: React.CSSProperties;
  thumbnailButtonSelectedStyle?: React.CSSProperties;
  thumbnailButtonClassName?: string;
  thumbnailButtonSelectedClassName?: string;
  thumbnailImageClassName?: string;
  thumbnailImageStyle?: React.CSSProperties;
  thumbnailWrapperClassName?: string;
  thumbnailWrapperStyle?: React.CSSProperties;
  hideThumbnailsOnMobile?: boolean;
};

export type CarouselProps = {
  images: Image[];
  viewportRef: UseEmblaCarouselType[0];
  carouselContainerClassName?: string;
  carouselContainerStyle?: React.CSSProperties;
  carouselImageClassName?: string;
  carouselImageStyle?: React.CSSProperties;
  carouselSlideStyle?: React.CSSProperties;
  carouselSlideClassName?: string;
};

type ThumbnailUIProps = Omit<
  ThumbnailsProps,
  "viewportRef" | "onThumbClick" | "thumbnailPosition" | "selectedIndex"
>;

type CarouselUIProps = Omit<CarouselProps, "viewportRef">;

type PixoraCarouselOptions = {
  images: Image[];
  loop?: boolean;
  autoPlay?: boolean;
  stopOnInteraction?: boolean;
  autoPlayDelay?: number;
  thumbnailPosition?: ThumbnailPosition;
  onSelectThumb?: (image: Image, index: number) => void;
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
  hideThumbnails?: boolean;
};

export type PixoraCarouselProps = PixoraCarouselOptions &
  CarouselUIProps &
  ThumbnailUIProps;
