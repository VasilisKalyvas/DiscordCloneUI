import React from 'react'
import { Link } from 'react-router-dom'
import './styles/signin.css'

const signin = () => {
  return (
    <div className='formBox'>
    <div className='title'>
        <h2>Login</h2>
    </div>
    <div className='inputs'>
        <label>Username:</label>
        <input type='text' placeholder='Username' required />
        <label>Password:</label>
        <input type='password' placeholder='Password' required />
    </div>
    <div className='submit'>
        <button className='buttonForm' >Login</button>
    </div>
    <Link style={{color: 'inherit', textDecoration: 'underline'}}to={'/signup'}>Dont have an Account ?</Link>
</div>
  )
}

export default signin