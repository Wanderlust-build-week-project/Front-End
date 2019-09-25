import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import unSplashData from "../../images/gerneral-landing-images/unSplashData"


function BrowserCarousel() {
  const INITIAL_INDEX = 0;
 
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(INITIAL_INDEX);

// setImages(unSplashData)

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
  }, []);
//   ^ for gallery state

  return (
    <Gallery
      index={index}
      onRequestChage={i => {
        setIndex(i + 1);
      }}>
      {images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
    </Gallery>
  );
}

export default BrowserCarousel;
