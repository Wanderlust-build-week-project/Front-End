import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import UserBrowsingCards from './UserBrowsingCards';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const UserBrowsing = () => {
  // const INITIAL_INDEX = 0
  // const images = ["https://picsum.photos/id/1020/300/300", "https://picsum.photos/id/1001/300/300", "https://picsum.photos/id/1005/300/300", "https://picsum.photos/id/1023/300/300"]
  const [browser, setBrowser] = useState([]);
  // const [index, setIndex] = useState(0)
  const [locations, setLocations] = useState({
    location: ""
  })

  // useEffect(() => {
  //   const interval = (() => {
  //     if (index === images.length - 1) {
  //       setIndex(INITIAL_INDEX)
  //     } else {
  //       setIndex(index + 1)
  //     }
  //   }, 2500)
  //   return () => clearInterval(interval)
  // }, [index])
  // //^ for gallery state

  useEffect(() => {
    axiosWithAuth()
      .get(`https://wanderlustbw.herokuapp.com/exp`)
      .then(res => {
        setBrowser(res.data)
        console.log(res)
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations${res.data.location_id}`)
        .then(response => {
        console.log(`this is on the choose location`, response)
        setLocations(response.data)
        })
        .catch(error => {
        console.log(error)
        });
      })
      .catch(err => console.log('Loading Error Experinces', err))
  }, [])
  // ^ for cards

  return (
    <>
      {/* <Gallery
        index={index}
        onRequestChage={i => {
          setIndex(i)
        }}
      >{images.map(image => (
        <GalleryImage objectFit="contain" src={image} />
      ))}
      </Gallery> */}
      <div>
        <button>Check out All Experinces</button>
        {browser.map(browse => {
          return (
            <UserBrowsingCards 
              id = {browse.id}
              desc={browse.description}
              title={browse.name}
              hours={browse.duration}
              date={browse.date}
              completed ={browse.complted}
              oranizerID ={browse.oranizer_id}
              location ={locations}
            />)
        })}
      </div>
    </>
  )
}

export default UserBrowsing
