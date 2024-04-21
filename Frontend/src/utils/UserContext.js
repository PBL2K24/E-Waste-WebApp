import {createContext} from 'react'

const UserContext =  createContext({ 
    user: {
    name: "dummmy_name",
    email: "dummy@gmail",
    points: 0,
    id: -1
    }
})

export default UserContext