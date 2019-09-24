import React, { useState, useEffect } from 'react'
import UserExpCard from "./UserExpCard"

const UserExpList = () => {
    const [exp, setExp] = useState([])
    useEffect(() => {
        
    })
    return (
        <div>
            <UserExpCard />
        </div>
    )
}

export default UserExpList
