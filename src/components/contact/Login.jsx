import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <>

      <div className='container-log'>
        <div className='img1'>
          <img src='/image/div1.jpg' alt='img' />
        </div>
        <div className='login'>
          <div className='wel'>Welcome</div>
          <div className='div'>

            <div className='user' ><Link>User</Link></div>
            <div className='supply'><Link to='/supplier'>Contractor/Supplier</Link></div>
          </div>

          {/* {active === "userbtn" &&('rinfgfgnndkl')} */}
          <div className='info-log'>
            <div className='user-log'>
              <label>User Name</label>
              <input type="text" placeholder='Enter your user name' />
            </div>
            <div className='user-pass'>
              <label>Password</label>
              <input type="password" placeholder='Enter your password' />
            </div>
          </div>
          <div className='me'>
            <div className='checkbox' >
              <input type="checkBox" />

            </div>
            <small>Remember me</small>
            <div className='for'>Forget Password?</div>
          </div>
          <div className='icon'>
            <div className='iconbtn'>
              <span><img src='/image/google 1.png' alt='img' /></span> <div>Login with Google </div>
            </div>

            <div className='iconbtn'>
              <span><img src='/image/facebook 1.png' alt='img' /></span><div>Login with Facebook</div>

            </div>
          </div>
          <div className='sub-login'>
            <button>Login</button>
          </div>
          <div className='do'> Do have this account
            <Link to='/signup'>Signup</Link></div>
        </div>
      </div>
    </ >
  )
}

export default Login