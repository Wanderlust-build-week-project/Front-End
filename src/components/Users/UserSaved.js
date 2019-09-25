import React from 'react'
import { Link } from "react-router-dom"

const UserSaved = (props) => {
    return (
        <div>
            <h3>Saved Experiences</h3>
            {props.list.map(trip => (
                <span>{trip.title}</span>
            ))}
            <Link to="/general-landing-page">
                <button>Save More Trips!</button>
            </Link>
        </div>

    )
}

export default UserSaved
