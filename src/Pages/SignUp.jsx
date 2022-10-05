import React from 'react'
import { Link } from 'react-router-dom'
import './styles/signin.css'
const signup = () => {
  return (
    <div className='page'>
    <div className='formBox'>
        <div className='title'>
            <h2>Register</h2>
        </div>
        <div className='inputs'>
            <label>Username:</label>
            <input type='text' placeholder='Username' required/>
            <label>Email:</label>
            <input type='email' placeholder='Email' required/>
            <label>Password:</label>
            <input type='password' placeholder='password' required/>
        </div>
        <div className='submit'>
            <button className='buttonForm'>Register</button>
        </div>
        <Link style={{color: 'inherit', textDecoration: 'underline'}} to={'/signin'}>Already have an Account ?</Link>
    </div>
  </div>
  )
}

export default signup