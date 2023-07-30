import React, { useState ,useEffect} from 'react'
import "./UserCard.scss"
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/slices/userSLices';

const UserCard = ({user}) => {

  const dispatch=useDispatch();
  const [userEmail, setUserEmail] = useState({email:""})

  useEffect(() => {
    if(userEmail.email){
      dispatch(deleteUser(userEmail));
    } 
  }, [userEmail]);

  const dltUser=()=>{
    const obj={email:user.email}
    setUserEmail(obj)
    // console.log("Emmmailll ",userEmail);
  }

  return (
    <div className="UserCard">
      <div className="UserImg"></div>
      <div className="UserText">
        <div className="inputss">Role:{user.role}</div>
        <div className="inputss">Name:{user.username}</div>
      </div>
      <div className="userButtons">
        <button className="editUser">Edit</button>
        <button className="deleteUser" onClick={dltUser}>Delete</button>
      </div>
    </div>
    // hii
  )
}

export default UserCard
