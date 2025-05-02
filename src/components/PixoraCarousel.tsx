"use client";

import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useEffect, useState } from "react";
import { PixoraCarouselProps } from "../types/types";
import { getAxis, getFlexDirection } from "../utils/utils";
import Carousel from "./carousel/Carousel";
import Thumbnails from "./Thumbnail/Thumbnails";

const PixoraCarousel: React.FC<PixoraCarouselProps> = ({
  images,
  loop,
  autoPlay = false,
  stopOnInteraction = false,
  autoPlayDelay = 3000,
  containerClassName,
  containerStyle,
  carouselContainerClassName,
  carouselContainerStyle,
  thumbnailContainerClassName,
  thumbnailContainerStyle,
  carouselOverlay,
  carouselImageClassName,
  carouselImageStyle,
  thumbnailImageClassName,
  thumbnailImageStyle,
  thumbnailPosition = "bottom",
  thumbnailButtonStyle,
  thumbnailButtonSelectedStyle,
  thumbnailButtonClassName,
  thumbnailButtonSelectedClassName,
  thumbnailOverlay,
  onSelectThumb,
  carouselSlideClassName,
  carouselSlideStyle,
  hideThumbnails,
  hideThumbnailsOnMobile,
  thumbnailWrapperClassName,
  thumbnailWrapperStyle,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel({ loop: loop }, [
    Autoplay({
      active: autoPlay,
      stopOnInteraction: stopOnInteraction,
      delay: autoPlayDelay,
    }),
  ]);

  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: getAxis(thumbnailPosition),
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;

    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);

    return () => {
      emblaMainApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <div
      className={clsx("container", containerClassName)}
      style={{
        flexDirection: getFlexDirection(thumbnailPosition),
        ...containerStyle,
      }}
    >
      {!hideThumbnails && ["left", "top"].includes(thumbnailPosition) && (
        <Thumbnails
          images={images}
          selectedIndex={selectedIndex}
          onThumbClick={(image, index) => {
            onThumbClick(index);
            onSelectThumb?.(image, index);
          }}
          thumbnailContainerClassName={thumbnailContainerClassName}
          thumbnailContainerStyle={thumbnailContainerStyle}
          thumbnailWrapperClassName={thumbnailWrapperClassName}
          thumbnailWrapperStyle={thumbnailWrapperStyle}
          thumbnailButtonClassName={thumbnailButtonClassName}
          thumbnailButtonSelectedClassName={thumbnailButtonSelectedClassName}
          thumbnailButtonStyle={thumbnailButtonStyle}
          thumbnailButtonSelectedStyle={thumbnailButtonSelectedStyle}
          thumbnailImageClassName={thumbnailImageClassName}
          thumbnailImageStyle={thumbnailImageStyle}
          viewportRef={thumbViewportRef}
          thumbnailPosition={thumbnailPosition}
          hideThumbnailsOnMobile={hideThumbnailsOnMobile}
          thumbnailOverlay={thumbnailOverlay}
        />
      )}

      <Carousel
        images={images}
        carouselContainerClassName={carouselContainerClassName}
        carouselContainerStyle={carouselContainerStyle}
        carouselSlideClassName={carouselSlideClassName}
        carouselSlideStyle={carouselSlideStyle}
        carouselImageClassName={carouselImageClassName}
        carouselImageStyle={carouselImageStyle}
        viewportRef={mainViewportRef}
        carouselOverlay={carouselOverlay}
      />

      {!hideThumbnails && ["right", "bottom"].includes(thumbnailPosition) && (
        <Thumbnails
          images={images}
          selectedIndex={selectedIndex}
          onThumbClick={(image, index) => {
            onThumbClick(index);
            onSelectThumb?.(image, index);
          }}
          thumbnailContainerClassName={thumbnailContainerClassName}
          thumbnailContainerStyle={thumbnailContainerStyle}
          thumbnailWrapperClassName={thumbnailWrapperClassName}
          thumbnailWrapperStyle={thumbnailWrapperStyle}
          thumbnailButtonClassName={thumbnailButtonClassName}
          thumbnailButtonSelectedClassName={thumbnailButtonSelectedClassName}
          thumbnailButtonStyle={thumbnailButtonStyle}
          thumbnailButtonSelectedStyle={thumbnailButtonSelectedStyle}
          thumbnailImageClassName={thumbnailImageClassName}
          thumbnailImageStyle={thumbnailImageStyle}
          viewportRef={thumbViewportRef}
          thumbnailPosition={thumbnailPosition}
          hideThumbnailsOnMobile={hideThumbnailsOnMobile}
          thumbnailOverlay={thumbnailOverlay}
        />
      )}
    </div>
  );
};

export default PixoraCarousel;
