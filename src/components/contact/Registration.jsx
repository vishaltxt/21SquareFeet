import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Registration</h1>
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
          <button type='submit'>Register</button>
          <div className='log'>
            <Link to='/login'>
              Log in | Lost Password
            </Link></div>
          <div className='brower'>
            <div>
              <Link>Sign up with Facebook</Link>

            </div>
            <div>
              <Link to=''>Sign up with Google</Link></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration