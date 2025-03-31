# PixoraCarousel

PixoraCarousel is a highly customizable React carousel component that offers seamless autoplay, looping, and thumbnail navigation. Designed to create flexible and responsive image carousels, it provides a smooth user experience with minimal setup.

## Showcase

### Web

 <table>
        <tr>
            <th>Bottom Thumbnail Position</th>
        </tr>
        <tr>
            <td>
            <img src="https://raw.githubusercontent.com/roshab007/react-pixora-carousel/main/gifs/web-carousel.gif" alt="Web Bottom Thumbnail Position">
            </td>
        </tr>
    </table>

  <table>
        <tr>
            <th>Left Thumbnail Position</th>
        </tr>
        <tr>
            <td>
             <img src="https://raw.githubusercontent.com/roshab007/react-pixora-carousel/main/gifs/web-carousel-left.gif" alt="Web Left Thumbnail Position" >
             </td>
        </tr>
    </table>

### Mobile

   <table>
        <tr>
            <th>Bottom Thumbnail Position</th>
            <th>Left Thumbnail Position</th>
        </tr>
        <tr>
            <td>
            <img src="https://raw.githubusercontent.com/roshab007/react-pixora-carousel/main/gifs/mobile-carousel.gif" alt="Bottom Thumbnail Position">
            </td>
            <td>
             <img src="https://raw.githubusercontent.com/roshab007/react-pixora-carousel/main/gifs/mobile-carousel-left.gif" alt="Left Thumbnail Position" >
             </td>
        </tr>
    </table>

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

| Prop                       | Type       | Default                   | Description                                                                                                                                            |
| -------------------------- | ---------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **images**                 | `Image[]`  | **Required**              | Array of image objects, where each object contains a src (required) and an optional alt text. Example: { src: "image-url", alt: "image description" }. |
| **loop**                   | `boolean`  | `false`                   | Enables looping of carousel items.                                                                                                                     |
| **autoPlay**               | `boolean`  | `false`                   | Enables or disables autoplay.                                                                                                                          |
| **stopOnInteraction**      | `boolean`  | `false`                   | Stops autoplay on user interaction.                                                                                                                    |
| **autoPlayDelay**          | `number`   | `3000`                    | Time in milliseconds between slide transitions.                                                                                                        |
| **thumbnailPosition**      | `string`   | `"bottom"`                | Position of the thumbnails. Can be `"bottom"`, `"left"`, `"right"`, or `"top"`.                                                                        |
| **onSelectThumb**          | `function` | `undefined`               | Callback function when a thumbnail is selected, receiving the image: { src: string, alt:string } and index: number as arguments.                       |
| **containerClassName**     | `string`   | [`container`](#container) | Custom class for the main container.                                                                                                                   |
| **containerStyle**         | `object`   | `undefined`               | Inline styles for the main container.                                                                                                                  |
| **hideThumbnails**         | `boolean`  | `false`                   | Hides the thumbnails in the carousel.                                                                                                                  |
| **hideThumbnailsOnMobile** | `boolean`  | `false`                   | Hides the thumbnails on mobile devices.                                                                                                                |

## Carousel Props

| Prop                           | Type     | Default                           | Description                                   |
| ------------------------------ | -------- | --------------------------------- | --------------------------------------------- |
| **carouselContainerClassName** | `string` | [`carousel-container`](#carousel) | Custom class for the carousel container.      |
| **carouselContainerStyle**     | `object` | `undefined`                       | Inline styles for the carousel container.     |
| **carouselSlideClassName**     | `string` | [`carousel-slide`](#carousel)     | Custom class for individual carousel slides.  |
| **carouselSlideStyle**         | `object` | `undefined`                       | Inline styles for individual carousel slides. |
| **carouselImageClassName**     | `string` | [`carousel-image`](#carousel)     | Custom class for carousel images.             |
| **carouselImageStyle**         | `object` | `undefined`                       | Inline styles for carousel images.            |

## Thumbnail Props

| Prop                                 | Type     | Default                                   | Description                                               |
| ------------------------------------ | -------- | ----------------------------------------- | --------------------------------------------------------- |
| **thumbnailWrapperClassName**        | `string` | [`thumbnail-wrapper`](#thumbnail)         | Custom class for the thumbnail wrapper.                   |
| **thumbnailWrapperStyle**            | `object` | `undefined`                               | Inline styles for the thumbnail wrapper.                  |
| **thumbnailContainerClassName**      | `string` | [`thumbnail-container`](#thumbnail)       | Custom class for the thumbnail container.                 |
| **thumbnailContainerStyle**          | `object` | `undefined`                               | Inline styles for the thumbnail container.                |
| **thumbnailButtonClassName**         | `string` | [`thumbnail-button`](#thumbnail)          | Custom class for the thumbnail button.                    |
| **thumbnailButtonStyle**             | `object` | `undefined`                               | Inline styles for the thumbnail button.                   |
| **thumbnailButtonSelectedClassName** | `string` | [`thumbnail-button.selected`](#thumbnail) | Custom class for the selected thumbnail button.           |
| **thumbnailButtonSelectedStyle**     | `object` | `undefined`                               | Inline styles for the selected selected thumbnail button. |
| **thumbnailImageClassName**          | `string` | [`thumbnail-image`](#thumbnail)           | Custom class for the thumbnail image.                     |
| **thumbnailImageStyle**              | `object` | `undefined`                               | Inline styles for the thumbnail image.                    |

## Default Styles

PixoraCarousel provides default styles for various elements to ensure a seamless experience. You can override these styles using the provided props.

### Container

```css
container {
  max-width: min(800px, 100vw);
  max-height: min(750px, 100svh, 100vh);
  padding: 16px;
  display: flex;
  gap: 16px;
  width: 100%;
  height: 100%;
}
```

### Carousel

```css
carousel-container {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
}

carousel-slide {
  flex: 0 0 100%;
  min-width: 0;
  margin-right: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

carousel-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}
```

### Thumbnail

```css
thumbnail-wrapper {
  overflow: hidden;
  flex-shrink: 0;
}

/* Hide thumbnails on mobile devices if hideThumbnailsOnMobile Prop is true */
@media (max-width: 480px) {
  thumbnail-wrapper.hidden {
    display: none;
  }
}

thumbnail-container {
  display: flex;
  gap: 8px;
  justify-content: start;
  max-height: 100%;
}

thumbnail-button {
  cursor: pointer;
  opacity: 0.7;
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

/* Adjust thumbnail button size for tablet screens */
@media (max-width: 768px) {
  thumbnail-button {
    width: 90px;
    height: 90px;
  }
}

/* Adjust thumbnail button size for small mobile screens */
@media (max-width: 480px) {
  thumbnail-button {
    width: 70px;
    height: 70px;
  }
}

thumbnail-button:hover {
  opacity: 1;
}

thumbnail-button.selected {
  opacity: 1;
  border: 2px solid;
  border-color: #3b82f6;
  border-radius: 8px;
}

thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## License

MIT
