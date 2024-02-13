import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

function Supplier() {
  return (
    <>
         <div className='container-log'>
      <div className='img1'>
        <img src='/image/div2.jpg' alt='img'/>
      </div>
      <div className='login'>
        <div className='wel'>Welcome</div>
        <div className='div'>
          
          <div className='user1'><Link>User</Link></div>
          <div className='supply1'><Link to='/supplier'>Contractor/Supplier</Link></div>
        </div>
        <div className='info-log'>
          <div className='user-log'>
            <label> Name</label>
            <input type="text" placeholder='Enter you name of company' />
          </div>
          <div className='sup'>
            <div>
            <label>Phone no</label>
            <input type="text" placeholder='Enter your phone no' />
            </div>
            <div>
            <label>Service</label>
            <input type="text" placeholder='Enter servicxe you provide' />
            </div>
          </div>
          
          <div className='user-log'>
            <label>Address</label>
            <input type="text"  />
          </div>
          <div className='sup'>
            <div>
            <label>City</label>
            <input type="text"  />
            </div>
            <div>
            <label>State</label>
            <input type="text"  />
            </div>
          </div>
          <div className='registration'>
          <button type='submit'>Registration</button>
          </div>
          
          </div>
        </div>
      </div>
</>
  )
}

export default Supplier