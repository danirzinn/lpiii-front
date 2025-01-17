import React, {useState} from 'react'
import UserProfile from '../Layouts/UserProfile'
import { Button } from 'react-bootstrap';
import axiosInstance from '../myaxios';
import notDefinedUser from '../images/userNotDefined.jpg';

const Users = () => {
  const [user, setUser] = useState(null)

  const getUserById = async (id) => {
    const res = await axiosInstance.get(`/users/${id}`);
    const user = await res.data;
    setUser(user);
  }

  return (
    <div>
         <Button variant="primary" onClick={() => getUserById("4")}>
            Load User
         </Button>
         <UserProfile id="1234" 
         name={user ? user.name : "0"} email={user ? user.email : "0"} 
         image={user && user.profileImage ? user.profileImage : notDefinedUser} 
         />
    </div>
  )
}

export default Users