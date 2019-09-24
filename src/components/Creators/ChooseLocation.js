import React, { useEffect } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'


const ChooseLocation = () => {

    useEffect(() => {
        axiosWithAuth()
        .get(`https://wanderlustbw.herokuapp.com/locations`)
        .then(response => {
        console.log(`this is on the choose location`, response)
        })
        .catch(error => {
        console.log(error)
        });
    }, [])

      return (
          <>
          </>
      )
  }

  export default ChooseLocation