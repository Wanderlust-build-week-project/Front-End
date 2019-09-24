import React, { useState, useEffect} from 'react'
import axios from 'axios'
import UserBrowsingCards from './UserBrowsingCards'

const UserBrowsing = () => {
  const [browse, setBrowse] = useState([{
    id: 1,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 1PM",
    duration: 1,
    location_id: 1,
    completed: false
  }, {
    id: 2,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 2PM",
    duration: 1,
    location_id: 1,
    completed: false
  }, {
    id: 2,
    name: "Preview Experience",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "09/23/2019 3PM",
    duration: 1,
    location_id: 1,
    completed: false
  }]);
  const [id, setId] = useState(1)

  // useEffect(() => {
  //   axios
  //   .get(`https://wanderlustbw.herokuapp.com/exp/experience/${id}`)
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => console.log('Loading Error Experinces', err))
  // }, [id])

  return (
    <div>
      <h2>Checking</h2>
      <UserBrowsingCards />
    </div>
  )
}

export default UserBrowsing
