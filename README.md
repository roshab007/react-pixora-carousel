# PixoraCarousel

PixoraCarousel is a highly customizable React carousel component that offers seamless autoplay, looping, and thumbnail navigation. Designed to create flexible and responsive image carousels, it provides a smooth user experience with minimal setup.

## Showcase

### Web

| Bottom Thumbnail Position                                                                       | Left Thumbnail Position                                                                                 |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Web Demo](https://github.com/roshab007/react-pixora-carousel/blob/main/gifs/web-carousel.gif) | ![Mobile Demo](https://github.com/roshab007/react-pixora-carousel/blob/main/gifs/web-carousel-left.gif) |

### Mobile

| Bottom Thumbnail Position                                                                             | Left Thumbnail Position                                                                                 |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| ![Mobile Demo](https://github.com/roshab007/react-pixora-carousel/blob/main/gifs/mobile-carousel.gif) | ![Web Demo](https://github.com/roshab007/react-pixora-carousel/blob/main/gifs/mobile-carousel-left.gif) |

## Installation

### Using npm:

```sh
npm install react-pixora-carousel
```

### Using Yarn:

```sh
yarn add react-pixora-carousel
```

## Usage

```tsx
import PixoraCarousel from "react-pixora-carousel";

const images = [
  {
    src: "https://picsum.photos/500/500?random=1",
  },
  {
    src: "https://picsum.photos/500/500?random=2",
  },
  {
    src: "https://picsum.photos/500/500?random=3",
  },
  {
    src: "https://picsum.photos/500/500?random=4",
  },
  {
    src: "https://picsum.photos/500/500?random=5",
  },
  {
    src: "https://picsum.photos/500/500?random=6",
  },
  {
    src: "https://picsum.photos/500/500?random=7",
  },
];

const App: React.FC = () => {
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <PixoraCarousel
        images={images}
        loop={true}
        containerClassName="h-[50%]! md:h-full!"
        thumbnailPosition="left"
      />
    </div>
  );
};

export default App;
```

## Usage with Tailwind CSS

When using **Tailwind CSS**, you can apply the `!` prefix to a utility class to **force override** the default styles and ensure that your custom styles take precedence.

For detailed information, check out the [Tailwind CSS documentation on using the `!` prefix for overriding styles](https://tailwindcss.com/docs/styling-with-utility-classes#using-the-important-modifier).

## Props

| Prop                       | Type                                    | Default                                                                                                                                                   | Description                                                                     |
| -------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **images**                 | `{ src: string; alt?: string; }[]`      | **Required**                                                                                                                                              | Array of image objects.                                                         |
| **loop**                   | `boolean`                               | `false`                                                                                                                                                   | Enables looping of carousel items.                                              |
| **autoPlay**               | `boolean`                               | `false`                                                                                                                                                   | Enables or disables autoplay.                                                   |
| **stopOnInteraction**      | `boolean`                               | `false`                                                                                                                                                   | Stops autoplay on user interaction.                                             |
| **autoPlayDelay**          | `number`                                | `3000`                                                                                                                                                    | Time in milliseconds between slide transitions.                                 |
| **thumbnailPosition**      | `ThumbnailPosition`                     | `"bottom"`                                                                                                                                                | Position of the thumbnails. Can be `"bottom"`, `"left"`, `"right"`, or `"top"`. |
| **onSelectThumb**          | `(image: Image, index: number) => void` | `undefined`                                                                                                                                               | Callback function when a thumbnail is selected.                                 |
| **containerClassName**     | `string`                                | `undefined`                                                                                                                                               | Custom class for the main container.                                            |
| **containerStyle**         | `object`                                | `{ maxWidth: 'min(800px, 100vw)', maxHeight: 'min(750px, 100svh, 100vh)', padding: '16px', display: 'flex', gap: '16px', width: '100%', height: '100%' }` | Inline styles for the main container.                                           |
| **hideThumbnails**         | `boolean`                               | `false`                                                                                                                                                   | Hides the thumbnails in the carousel.                                           |
| **hideThumbnailsOnMobile** | `boolean`                               | `false`                                                                                                                                                   | Hides the thumbnails on mobile devices.                                         |

## Carousel Props

| Prop                           | Type     | Default                                                                                                                                                               | Description                                     |
| ------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **carouselContainerClassName** | `string` | `undefined`                                                                                                                                                           | Custom class for the inner carousel container.  |
| **carouselContainerStyle**     | `object` | `{ overflow: 'hidden', display: 'flex', width: '100%', height: '100%' }`                                                                                              | Inline styles for the inner carousel container. |
| **carouselSlideClassName**     | `string` | `undefined`                                                                                                                                                           | Custom class for individual carousel slides.    |
| **carouselSlideStyle**         | `object` | `{ flex: '0 0 100%', minWidth: '0', marginRight: '8px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }` | Inline styles for individual carousel slides.   |
| **carouselImageClassName**     | `string` | `undefined`                                                                                                                                                           | Custom class for carousel images.               |
| **carouselImageStyle**         | `object` | `{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }`                                                                                          | Inline styles for carousel images.              |

## Thumbnail Props

| Prop                                 | Type     | Default                                                                                                                                                  | Description                                               |
| ------------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **thumbnailContainerClassName**      | `string` | `undefined`                                                                                                                                              | Custom class for the thumbnail container.                 |
| **thumbnailContainerStyle**          | `object` | `{ display: 'flex', gap: '8px', justifyContent: 'start', maxHeight: '100%' }`                                                                            | Inline styles for the thumbnail container.                |
| **thumbnailWrapperClassName**        | `string` | `undefined`                                                                                                                                              | Custom class for the thumbnail wrapper.                   |
| **thumbnailWrapperStyle**            | `object` | `{ overflow: 'hidden', flexShrink: '0' }`                                                                                                                | Inline styles for the thumbnail wrapper.                  |
| **thumbnailButtonClassName**         | `string` | `undefined`                                                                                                                                              | Custom class for the thumbnail button.                    |
| **thumbnailButtonStyle**             | `object` | `{ cursor: 'pointer', opacity: '0.7', flexShrink: '0', width: '120px', height: '120px', borderRadius: '8px', position: 'relative', overflow: 'hidden' }` | Inline styles for the thumbnail button.                   |
| **thumbnailButtonSelectedClassName** | `string` | `undefined`                                                                                                                                              | Custom class for the selected thumbnail button.           |
| **thumbnailButtonSelectedStyle**     | `object` | `{ opacity: '1', border: '2px solid', borderColor: '#3b82f6', borderRadius: '8px' }`                                                                     | Inline styles for the selected selected thumbnail button. |
| **thumbnailImageClassName**          | `string` | `undefined`                                                                                                                                              | Custom class for the thumbnail image.                     |
| **thumbnailImageStyle**              | `object` | `{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: '8px' }`                                                                             | Inline styles for the thumbnail image.                    |

### Responsive Styling for Thumbnail Button

PixoraCarousel uses **media queries** to automatically adjust the size of the thumbnail button on different screen sizes for a responsive experience.

```css
/* Adjust thumbnail button size for tablet screens (max-width: 768px) */
@media (max-width: 768px) {
  .thumbnail-button {
    width: 90px;
    height: 90px;
  }
}

/* Adjust thumbnail button size for small mobile screens (max-width: 480px) */
@media (max-width: 480px) {
  .thumbnail-button {
    width: 70px;
    height: 70px;
  }
}
```

These media queries are applied automatically for the **thumbnail button** within the **PixoraCarousel** component, ensuring it looks great on tablet and mobile devices.

## License

MIT
