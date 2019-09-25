import React from 'react'
import { Link } from "react-router-dom"

const UserSaved = (props) => {
    return (
        <div>
            <h3>Saved Experiences</h3>
            {props.list.map(thing => (
                <span>{thing.title}</span>
            ))}
            <Link to='/'>
                <button>Save More Trips!</button>
            </Link>
        </div>

    )
}

export default UserSaved
