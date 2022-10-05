import React from 'react';
import Menu from '../Components/Menu';
import Navbar from '../Components/Navbar';
import RightBar from '../Components/RightBar';
import Main from '../Components/Main';
import LeftBar from '../Components/LeftBar';
import './styles/home.css'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <RightBar/>
            <Menu/>
            <Main/>
            <LeftBar/>
        </div>
    </div>
  )
}

export default Home