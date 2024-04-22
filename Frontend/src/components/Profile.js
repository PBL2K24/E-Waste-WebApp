import React, {useContext} from 'react'
import UserContext from '../utils/UserContext'

const Profile = () => {
  const {user}=useContext(UserContext);
  console.log("UserContext ",UserContext);
    return (
    <div>
        <div>Profile</div>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.points}</h3>
        <h3>{user.location}</h3>
    </div>

  )
}

export default Profile;