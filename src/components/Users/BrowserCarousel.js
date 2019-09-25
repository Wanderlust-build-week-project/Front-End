import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
function BrowserCarousel() {
  const INITIAL_INDEX = 0;
  const images = [
    "https://picsum.photos/id/1020/300/300",
    "https://picsum.photos/id/1001/300/300",
    "https://picsum.photos/id/1005/300/300",
    "https://picsum.photos/id/1023/300/300"
  ];
  const [browsers, setBrowsers] = useState([{}]);
  const [index, setIndex] = useState(INITIAL_INDEX);

  useEffect(() => {
    const interval =
      (() => {
        if (index === images.length - 1) {
          setIndex(INITIAL_INDEX);
        } else {
          setIndex(index + 1);
        }
      },
      2500);
    return () => clearInterval(interval);
  }, [index]);
  //^ for gallery state

  return (
    <Gallery
      index={index}
      onRequestChage={i => {
        setIndex(i);
      }}
    >
      {images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
    </Gallery>
  );
}

export default BrowserCarousel;
