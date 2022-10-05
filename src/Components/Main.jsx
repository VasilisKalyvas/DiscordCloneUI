import React from 'react'
import './styles/main.css'
import { MdSend, MdOutlineEmojiEmotions} from 'react-icons/md';
import { BsPaperclip }from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import { GoThreeBars } from 'react-icons/go';

const Main = () => {
  return (
    <><div className='maincontainer'>
    <div className='maintitle'>
        <GoThreeBars className='GoThreeBars' style={{cursor:'pointer', fontSize: '30px'}} />
        <p>channel 1</p>
        <FaChevronDown className='FaChevronDown' style={{cursor:'pointer', fontSize: '25px'}}/>
    </div>
    <div className='maincontent'>
      <div className='chatBox'> 
        <div className='message'>
          <div className='userdetails'>
            <p className='userpic'>M</p>
            <p>User1</p>
            <div className='messageTime'>
              <i>23/7/2022 03:33</i>
            </div>
            <div className='messageActions'>
              <BsGearFill cursor={'pointer'}/>
            </div>
          </div>
          <div className='messageContent'>
            <p>Message content</p>
          </div>
        </div>
        <div className='message'>
          <div className='userdetails'>
            <p className='userpic'>M</p>
            <p>User1</p>
            <div className='messageTime'>
              <i>23/7/2022 03:33</i>
            </div>
            <div className='messageActions'>
              <BsGearFill cursor={'pointer'}/>
            </div>
          </div>
          <div className='messageContent'>
            <p>Message content</p>
          </div>
        </div>
        <div className='message'>
          <div className='userdetails'>
            <p className='userpic'>M</p>
            <p>User1</p>
            <div className='messageTime'>
              <i>23/7/2022 03:33</i>
            </div>
            <div className='messageActions'>
              <BsGearFill cursor={'pointer'}/>
            </div>
          </div>
          <div className='messageContent'>
            <p>Message content</p>
          </div>
        </div>
      </div>
    </div>
    <div className='input'>
      <input type='text' placeholder='Send message...'/>
      <div className='actions'>
        <MdSend/>
        <BsPaperclip/>
        <MdOutlineEmojiEmotions/>
      </div>
    </div>
</div>
    </>
  )
}

export default Main