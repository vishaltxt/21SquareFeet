import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
    <h1 style={{textAlign:'',marginBottom:'40px'}}>Registration</h1>
    <div className='form-container'>
        
        <div className='form'>
            <div className='form1'>
          <label >First Name</label>
         <input type="text" placeholder='First Name' />
        </div>
        <div className='form1'>
          <label >Last Name</label>
         <input type="text" placeholder='Last Name' />
        </div>
        <div className='form1'>
          <label >Email</label>
         <input type="email" placeholder='Enter your Email' />
        </div>
        <div className='form1'>
          <label >Username</label>
         <input type="text" placeholder='' />
        </div>
        <div className='form1'>
          <label >Password</label>
         <input type="password" placeholder='' />
        </div>
        <div className='form1'>
          <label >Confirm Password</label>
         <input type="password" placeholder='' />
        </div>
        <div className='indi'>
            <input type="text" placeholder='Strength indicator' />
        </div>
        <div className='regi'>
        <button type='submit'>Register</button>
        </div>
        
        <div className='log'>
          <Link to='/login'>
            Log in | Lost Password
        </Link></div>
        <div className='brower'>
            <div className='face-regi'>
            <span><img src='/image/facebook 1.png' alt='img'/></span><div>Sign up with Facebook</div>
              
           
            </div>
            <div className='face-ragi'>
            <span><img src='/image/google 1.png' alt='img'/></span> <div>Sign up with Google </div>
            </div>
        </div>
        </div>
         </div>
    </>
  )
}

export default Registration