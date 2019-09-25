import React from 'react'

const UserSaved = (props) => {
    return (
        <div>
           <h3>Saved Experiences</h3> 
           {props.list.map(thing => (
               <span>{thing.title}</span>
           ))}
        </div>
    )
}

export default UserSaved
