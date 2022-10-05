import React from 'react'
import './styles/menu.css'
import { FaChevronDown, FaUserPlus } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
const Menu = () => {
  return (
    <div className='menucontainer'>
        <div className='menutitle'>
            <p>Server1</p>
            <FaChevronDown style={{cursor:'pointer'}}/>
        </div>
        <div className='menucontent'>
          <hr className='hr'/>
          <p>Channels:</p>
          <div className='channels'> 
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
              <div className='channel'>
                <div className='channelname'>
                  <p># channel 1</p>
                </div>
                <div className='channelactions'>
                  <FaUserPlus/>
                  <BsGearFill/>
                </div>
              </div>
          </div>
        </div>
        <div className='user'>
          <div className='userpic'>
            M
          </div>  
          <div className='username'>
            <p>User</p>
          </div>
          <div className='useactions'>
            <BsGearFill style={{cursor: 'pointer'}}/>
          </div>
        </div>
    </div>
  )
}

export default Menu