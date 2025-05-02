import { UseEmblaCarouselType } from "embla-carousel-react";

type Image = {
  src: string;
  alt?: string;
};

export type CarouselProps = {
  images: Image[];
  viewportRef: UseEmblaCarouselType[0];
  carouselContainerClassName?: string;
  carouselContainerStyle?: React.CSSProperties;
} & Omit<CarouselSlideProps, "image" | "index">;

export type CarouselSlideProps = {
  carouselImageClassName?: string;
  carouselImageStyle?: React.CSSProperties;
  carouselSlideStyle?: React.CSSProperties;
  carouselSlideClassName?: string;
  carouselOverlay?: React.ReactNode | (() => React.ReactNode);
  image: Image;
  index: number;
};

export type ThumbnailPosition = "bottom" | "left" | "right" | "top";

export type ThumbnailsProps = {
  images: Image[];
  selectedIndex: number;
  onThumbClick: (image: Image, index: number) => void;
  viewportRef: UseEmblaCarouselType[0];
  thumbnailPosition: ThumbnailPosition;
  hideThumbnailsOnMobile?: boolean;
  thumbnailWrapperClassName?: string;
  thumbnailWrapperStyle?: React.CSSProperties;
  thumbnailContainerClassName?: string;
  thumbnailContainerStyle?: React.CSSProperties;
  thumbnailOverlay?: React.ReactNode | (() => React.ReactNode);
} & Omit<ThumbnailItemProps, "isSelected" | "index" | "image" | "onClick">;

export type ThumbnailItemProps = {
  thumbnailButtonStyle?: React.CSSProperties;
  thumbnailButtonSelectedStyle?: React.CSSProperties;
  thumbnailButtonClassName?: string;
  thumbnailButtonSelectedClassName?: string;
  thumbnailImageClassName?: string;
  thumbnailImageStyle?: React.CSSProperties;
  thumbnailOverlay?: React.ReactNode | (() => React.ReactNode);
  isSelected: boolean;
  index: number;
  image: Image;
  onClick: (image: Image, index: number) => void;
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
