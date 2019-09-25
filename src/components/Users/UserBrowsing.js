import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import UserBrowsingCards from './UserBrowsingCards';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { Search } from 'semantic-ui-react';
import { AnimatedProps } from '@react-spring/animated';

const UserBrowsing = (props) => {
  // const INITIAL_INDEX = 0
  // const images = ["https://picsum.photos/id/1020/300/300", "https://picsum.photos/id/1001/300/300", "https://picsum.photos/id/1005/300/300", "https://picsum.photos/id/1023/300/300"]
  const [browser, setBrowser] = useState([]);
  // const [index, setIndex] = useState(0)
  const [search, setSearch] = useState("")

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
        // console.log(res)
      })
      .catch(err => console.log('Loading Error Experinces', err))
  }, [])
  // ^ for cards

  const handleChange = e => {
    setSearch({...search, [e.target.name]: e.target.value});
  }

  const submitSearch = e => {
    e.preventDefault();
    axiosWithAuth()
    .get(`https://wanderlustbw.herokuapp.com/exp`)
    .then(res => {
      // console.log(res.data)
      res.data.map(item => {
        // console.log(item)
        console.log(`this is item.name`, JSON.stringify(item.name))
        console.log(`this is search`, search.search)
        var check = item.name.match(JSON.stringify(/Hike/gi))
        console.log(`this is check`, check)
        if (check) {
          console.log('found')
          // props.history.push(`/search-results/${item.id}`)
        } else {
          console.log('not found')
        }
      })
    })
    .catch(err => console.log('Loading Error Experinces', err))
  }

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
        <button>Check out All Experiences</button>
        {browser.map(browse => {
          return (
            <UserBrowsingCards 
              id = {browse.id}
              desc={browse.description}
              title={browse.name}
              hours={browse.duration}
              date={browse.date}
              completed ={browse.complted}
              organizerID ={browse.organizer_id}
              location ={browse.location_id}
            />)
        })}
        <form onSubmit = {submitSearch}>
          <input
            name = "search"
            type = "text"
            placeholder = "Search Experiences"
            onChange = {handleChange}
            >
          </input>
        </form>
      </div>
    </>
  )
}

export default UserBrowsing
