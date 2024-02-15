import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Supplylogin() {
  return (
    <>
     <div className='container-supply'>
      <div className='img-supply'>
        <img src='/image/div2.jpg' alt='img' />
      </div>
      <div className='login-supply'>
        <div className='wel-supply'>Welcome</div>
        <div className='div-supply'>
          
          <div className='user1'><Link to='/login'>User</Link></div>
          <div className='supply1'><Link to='/supplier'>Contractor/Supplier</Link></div>
        </div>
        <div className='info-supply'>
          <div className='user-log'>
            <label>Email Address/Phone no</label>
            <input type="text" placeholder='Enter your  email address' />
          </div>
          
          <div className='user-pass'>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' />
          </div>
        </div>
        <div className='registration1'>
            <Link to='/registration'>
            <button type='submit'>Registration</button>
            </Link>
            <div className='dosulppy'> Do have this account
        <Link to='/supplylogin'>Register</Link></div>
      
          
          </div>
         
        
       
        {/* <div className='sub-sign'>
          <button>Sign UP</button>
        </div>
        <div className='do1'> Do have this account
        <Link to='/login'>Login</Link></div> */}
      </div>
    </div>
    </>
  )
}

export default Supplylogin