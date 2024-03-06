import React, { useState } from 'react'
import './read1.css'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
import { useDispatch } from 'react-redux'
import { setLike } from '../../../redux/actions/likeAction'

function Read() {
  const dispatch = useDispatch('')
  const [like, setLiked] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setLike(like))
    // axios.post('http://localhost:8000/api/auth/like', { like })
  }
  return (
    <>
      <Navbar />
      <div className='R1'>
        <div className='R2'>
          <div className='R3'>
            <div className='R4'>
              <span>
                Why Work Zone Safety Is Important for Everyone
              </span>
            </div>
            <div className='R5'>
              <p>Spread the Love</p>
            </div>
            <div className='R6-icon'>

              <a href="https://www.facebook.com" target='_blank'><img src='/image/icons8-facebook-48.png' alt='img' /></a>
              <a href="https://www.linkedin.com" target='_blank'><img src='/image/icons8-linkedin-48.png' alt='img' /></a>
              <a href="https://www.whatsapp.com" target='_blank'><img src='/image/icons8-whatsapp-48.png' alt='img' /></a>
              <a href="https://www.instagram.com" target='_blank'><img src='/image/icons8-instagram-48.png' alt='img' /></a>
              <a href="https://www.twitter.com" target='_blank'><img src='/image/icons8-twitter-circled-48.png' alt='img' /></a>
            </div>
            <div className='R7-img'>
              <img src='/image/img1.jpg' alt='img' />
            </div>
            <div className='R8-para'>
              <p>
                Work zones are essential to be able to maintain and upgrade our roadways. However, work zones can be dangerous because hazards often appear unexpectedly, endangering roadway workers and motorists. So, how can we make work zones safer? Creating safe work zones requires risk management strategies to be implemented by employees, supervisory personnel and contracting agencies. And putting these strategies into place is essential.
                In 2020 alone, 857 people were killed and 44,000 people were injured in work zone crashes. Of those 857 fatalities, 479 were in construction zones, 314 were in work zones of unknown types, 56 were in maintenance zones and 8 were in utility zones.
              </p> <p className='de'>To help people better understand the importance of work zone safety, National Work Zone Awareness Week was established. The annual campaign is held at the start of construction season to encourage safe driving through highway work zones.
              </p>
            </div>
            <div className='R9'>
              <h2>The Four Areas in a Traffic Control Zone</h2>
            </div>
            <div className='R10-para'>
              <p>Most temporary traffic control zones are divided into four areas:</p>
            </div>
            <div className='R11-para'>
              <p>The Advance Warning Area</p>
            </div>
            <div className='R10-para'>
              <p> This is a section of the highway where motorists are informed of the upcoming road work. This is the first notice that road users see of the work zone.3 It is important to ensure you have proper signs, arrow panels or message boards advising what motorists can expect in the upcoming work zone.</p>
            </div>
            <div className='R11-para'>
              <p>The Transition Area</p>
            </div>
            <div className='R10-para'>
              <p> This section redirects road users from their normal path away from the work zone. It is important to consider the speed limit when setting up this transition area. The higher the speed limit, the longer the transition area will need to be.3</p>
            </div>
            <div className='R11-para'>
              <p>The Activity Area</p>
            </div>
            <div className='R10-para'>
              <p> This area is the section of the highway where the work activity takes place. To ensure safety for motorists and work zone employees, it should include a space set aside for workers, equipment and materials. There should also be a space for the traffic to flow through. A work zone should include additional buffer space that separates moving vehicles from the workspace.3
              </p>
            </div>
            <div className='R11-para'>
              <p>The Termination Area</p>
            </div>
            <div className='R10-para'>
              <p> The area extends beyond the work zone and returns traffic to its normal flow. This often involves a downstream taper where drivers are directed by cone placement. Cones serve as a visual cue to drivers, directing them back into the original lane(s) that were closed at the start of the construction area.3</p>
            </div>
            <div className='blog-icod'><i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} onSubmit={handleSubmit}></i> <span> 0</span>
            </div>
          </div>
          <div className='R12'> <a href='' className='ang'> <span>Next Post</span> </a></div>
          <div className='R13'>
            <div className='R14'>
              <span>Leave a Comment</span>
            </div>
            <div className='R15-para'>Your email address will not be published. Required fields are marked *</div>
            <div className='R16'>
              <textarea type="text" rows={8} placeholder='Type here..' />
            </div>
            <div className='R17'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Website' />
            </div>
            <div className='R18'>
              <input type="checkBox" id='ted' />
              <label for='ted' > Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div className='R19-btn'>
              <button>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Read;