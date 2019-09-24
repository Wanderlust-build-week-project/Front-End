import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserBrowsingCards from './UserBrowsingCards';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const UserBrowsing = () => {
  const INITIAL_INDEX = 0
  const images = ["https://picsum.photos/id/1020/300/300", "https://picsum.photos/id/1001/300/300", "https://picsum.photos/id/1005/300/300", "https://picsum.photos/id/1023/300/300"]
  const [browser, setBrowser] = useState([]);
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = (() => {
      if (index === images.length - 1) {
        setIndex(INITIAL_INDEX)
      } else {
        setIndex(index + 1)
      }
    }, 2500)
    return () => clearInterval(interval)
  }, [index])
  //^ for gallery state

  useEffect(() => {
    axios
      .get(`https://wanderlustbw.herokuapp.com/exp/experience/${index}`)
      .then(res => {
        setBrowser(res)
        console.log(res)
      })
      .catch(err => console.log('Loading Error Experinces', err))
  }, [index])
  //^ for cards

  return (
    <>
      <Gallery
        index={index}
        onRequestChage={i => {
          setIndex(i)
        }}
      >{images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
      </Gallery>

      <div>
        
       {/* {browser.map(browse => {
         <UserBrowsingCards />
       })} */}
        {/* ^ to map over after error clears */}
      </div>
    </>
  )
}

export default UserBrowsing
