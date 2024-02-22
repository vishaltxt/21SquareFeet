import React, { useState } from 'react'
import './supplier.css'
import { Link } from 'react-router-dom'

function Supplier() {
  const [profilePic, setProfilePic] = useState('');

  const handleFileChanger = (event) => {
    const file = event.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };


  return (
    <>

      <div className='container-supplyl3'>
        <div className='img-supplyl3'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl3'>
          <div className="pic210l3">
            <div></div>
            <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img>
          </div>

          <form className="bwell3">
            <div className='wel-supplyl3'>Welcome!</div>
            <div className='div-supplyl3'>

              <Link to='/login' className='user1l3'>User</Link>
              <Link to='/supplier' className='supply1l3'>Contractor/Supplier</Link>
            </div>
            <div className='info-supplyl3'>
              <div className="Bhrl3">

                <div className="bhrl3">
                  <div className='user-logl3'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter you name of  your company' />
                  </div>
                  <div className="honeservl3">
                    <div className="pn1l3">
                      <label>Phone no</label>
                      <input type="text" placeholder='Enter your phone no' />

                    </div>
                    <div className="pn2l3">
                      <label>Service</label>
                      <input type="text" placeholder='Enter Service you provide' />

                    </div>
                  </div>
                </div>
                <div className="pniml3" src={profilePic}>
                  <input type="file" id="file-inputl3" className="upload-inputl3" onChange={handleFileChanger} accept="image/jpeg, image/png" />
                  <label for="file-inputl3" className="upload-labell3"><div className="dragerl3" for="file-input" ></div></label>
                  <label for="file-inputl3"><p>+ Upload profile picture</p></label>
                </div>
              </div>
              <div className="Adrpn3l3">
                <div>Addreess</div>
                <input type="text" placeholder='' />
              </div>
              <div className="city-Statel3">
                <div className="pn4l3">
                  <div>City</div>
                  <input type="text" placeholder='' />
                </div>
                <div className="pn5l3">
                  <div>State</div>
                  <input type="text" placeholder='' />
                </div>
              </div>
              <div className='user-passl3'>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className='registration1l3'>
              <div to='/'>
                <button type='submit'>Registration</button>
              </div>
              <div className='dosulppyl3'> Already have an account
                <Link to='/Supplylogin' className='dkrl3'>Login</Link></div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Supplier;