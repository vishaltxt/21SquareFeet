import React from 'react'
import './supplylogin.css'
import { Link } from 'react-router-dom'

function Supplylogin() {
  return (
    <>
      <div className='container-supplyl4'>
        <div className='img-supplyl4'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <form className='login-supplyl4'>
          <div className="pic210l4">
            <div></div>
            <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img>
          </div>

          <div className="bwell4">
            <div className='wel-supplyl4'>Welcome!</div>
            <div className='div-supplyl4'>

              <div  className='user1l4'>User</div>
              <div  className='supply1l4'>Contractor/Supplier</div>
            </div>
            <div className='info-supplyl4'>
              <div className='user-logl4'>
                <label>Name</label>
                <input type="text" placeholder='Enter you name of  your company' />
              </div>

              <div className='user-passl4'>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' />
              </div>
            </div>
            <div className='registration1l4'>
              {/* <Link to='/'>
                <button type='submit'>Registration</button>
              </Link> */}


               <div >
                <button type='submit'>Registration</button>
              </div>
              <div className='dosulppyl4'> Don't have an account.
                <Link to='/Supplier' className='dkrl4'>Register</Link>

                {/* <div  className='dkrl4'>Register</div> */}
                </div>


            </div>




          </div>
        </form>
      </div>
    </>
  )
}

export default Supplylogin