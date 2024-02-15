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
      <div className='loginsupplier'>
        <div className='wel'>Welcome</div>
        <div className='div'>
          
          <div className='user1'><Link to='/login'>User</Link></div>
          <div className='supply1'><Link to='/supplier'>Contractor/Supplier</Link></div>
        </div>
        <div className='info-log'>
          <div className='userlogsupply'>
          <div className='user-logsupply'>
            <label> Name</label>
            <input type="text" placeholder='Enter you name of company' />
            <div className='supsupply'>
            <div>
            <label>Phone no</label>
            <input type="text" placeholder='Enter your phone no' />
            </div>
            <div>
            <label>Service</label>
            <input type="text" placeholder='Enter service you provide' />
            </div>
          </div>
          </div>
          {/* <div className='sup'>
            <div>
            <label>Phone no</label>
            <input type="text" placeholder='Enter your phone no' />
            </div>
            <div>
            <label>Service</label>
            <input type="text" placeholder='Enter service you provide' />
            </div>
          </div> */}
          <div className='imagesupply'>
          <div className='imagesupply1'>+ Upload profile picture</div>
          </div>
        
          </div>
          
          
          <div className='user-log1'>
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
          <div className='user-log1'>
            <label>Password</label>
            <input type="text"  />
          </div>

          <div className='registration'>
            <Link to='/registration'>
            <button type='submit'>Registration</button>
            </Link>
            <div className='dosulppy'>Already have this account
        <Link to='/supplylogin'>login</Link></div>
      
          
          </div>
          
          
          </div>
        </div>
      </div>
</>
  )
}

export default Supplier