import React from 'react'
import './styles/leftBar.css'
const LeftBar = () => {
  return (
    <div className='leftbarcontainer'>
      <div className='leftbartitle'>
        <p>Online Users</p>
        <hr className='hr'/>
      </div>
      <div className='leftbarcontent'>
        <ul>
          <li>
            User1
          </li>
          <li>
            User1
          </li>
          <li>
            User1
          </li>
          <li>
            User1
          </li>
          <li>
            User1
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftBar