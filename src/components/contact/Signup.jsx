import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
     <div className='container-log'>
      <div className='img1'>
        <img src='/image/div1.jpg' alt='img' />
      </div>
      <div className='login'>
        <div className='wel'>Welcome</div>
        <div className='div'>
          
          <div className='user'><Link>User</Link></div>
          <div className='supply'><Link to='/supplier'>Contractor/Supplier</Link></div>
        </div>
        <div className='info-log'>
          <div className='user-log'>
            <label>Email Address/Phone no</label>
            <input type="text" placeholder='Enter your  email address' />
          </div>
          <div className='user-pass'>
            <label>Username</label>
            <input type="password" placeholder='Enter your name' />
          </div>
          <div className='user-pass'>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' />
          </div>
        </div>
      
         
        
       
        <div className='sub-sign'>
          <button>Sign UP</button>
        </div>
        <div className='do1'> Do have this account
        <Link to='/login'>Login</Link></div>
      </div>
    </div>
    </>
  )
}

export default Signup