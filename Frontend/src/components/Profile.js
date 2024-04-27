import React from 'react'
import { useSelector } from 'react-redux';


const Profile = () => {
    const user = useSelector((store)=>store.user);
    return (
    <div>
        <div>Profile</div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.points}</h3>
    </div>

  )
}

export default Profile;