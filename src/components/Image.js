import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      //   width={image.width}
      effect="blur"
    />
  </div>
);

export default Image;
