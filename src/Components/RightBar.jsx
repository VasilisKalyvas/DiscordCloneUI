import React from 'react'
import './styles/rightBar.css'
import { FaPlus, FaUser } from 'react-icons/fa'
import { MdExplore } from 'react-icons/md'
const RightBar = () => {
  return (
    <div className='rigthbarcontainer'>
      <div className='content'>
        <div className='profile'>
            <FaUser/>
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='servers'>
            M
        </div>
        <div className='create'>
          <FaPlus/>
        </div>
        <div className='explore'>
          <MdExplore/>
        </div>
      </div>
    </div>
  )
}

export default RightBar