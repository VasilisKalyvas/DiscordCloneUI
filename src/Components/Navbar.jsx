import React from 'react'
import './styles/navbar.css'
import { FaBell, FaUser, FaUserFriends } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbarcontainer'>
      <div className='title'>
        Discord
      </div>
      
      <div className='actions'>
        <div className='search'>
            <input type='text' placeholder='Search'/>
        </div>
        <FaUser/>
        <FaBell/>
        <FaUserFriends/>
      </div>
    </div>
  )
}

export default Navbar