import React, { useState } from 'react'
import './blog.css'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'
import { useDispatch } from 'react-redux';
import { setLike } from '../../../redux/actions/likeAction'

function Blog() {
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
            <div className='mainDKr'>
                <div className='Dkr2'>
                    <div className='blog-container1'>
                        <div className='Dkr3-img'>
                            <img src='/image/div0.jpg' alt='img' />
                        </div>

                        <div className='Dkr4-content'>
                            <span>Creating a Cozy Retreat: Tips for Designing a Comfortable Living Space</span>
                        </div>
                        <div className='Dkr5-content1'>
                            <p>Spread the Love</p>
                        </div>
                        <div className='Dkr6-icons'>

                            <a href="https://www.facebook.com" target='_blank' >
                                <img src='/image/icons8-facebook-48.png' alt='img' />
                            </a>
                            <a href="https://www.linkedin.com" target='_blank'>
                                <img src='/image/icons8-linkedin-48.png' alt='img' />
                            </a>
                            <a href="https://www.whatsapp.com" target='_blank'>
                                <img src='/image/icons8-whatsapp-48.png' alt='img' />
                            </a>
                            <a href="https://www.instagram.com/your_username" target="_blank">
                                <img src='/image/icons8-instagram-48.png' alt='img' />
                            </a>
                            <a href="https://www.twitter.com" target='_blank'>
                                <img src='/image/icons8-twitter-circled-48.png' alt='img' />
                            </a>

                        </div>
                        <div className='Dkr7-content2'>
                            <p>Spread the love  When it comes to designing the interiors of your home, the goal is not just to make it aesthetically pleasing but also to create a space that<br /> feels like a sanctuary. Your living space should be a cozy retreat where you can unwind, relax, and truly feel at home. In this blog …
                            </p>
                        </div>
                        <div className='link'>
                            <Link to='/read' className='non' >Read More <i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                        <div className='blog-icons'><i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} onSubmit={handleSubmit}></i> <span> +1</span>
                        </div>

                    </div>
                    <div className='dkr8-container1'>

                        <div className='Dkr9-img1'>
                            <img src='/image/img1.jpg' alt='img' />
                        </div>
                        <div className='Dkr10-content'>
                            <span>
                                Why Work Zone Safety Is Important for Everyone</span>
                        </div>
                        <div className='Dkr11-content1'>
                            <p>Spread the Love</p>
                        </div>
                        <div className='Dkr6-icons'>

                            <a href="https://www.facebook.com" target='_blank' >
                                <img src='/image/icons8-facebook-48.png' alt='img' />
                            </a>
                            <a href="https://www.linkedin.com" target='_blank'>
                                <img src='/image/icons8-linkedin-48.png' alt='img' />
                            </a>
                            <a href="https://www.whatsapp.com" target='_blank'>
                                <img src='/image/icons8-whatsapp-48.png' alt='img' />
                            </a>
                            <a href="https://www.instagram.com/your_username" target="_blank">
                                <img src='/image/icons8-instagram-48.png' alt='img' />
                            </a>
                            <a href="https://www.twitter.com" target='_blank'>
                                <img src='/image/icons8-twitter-circled-48.png' alt='img' />
                            </a>
                        </div>
                        <div className='Dkr12-content2'>
                            <p>Spread the love  Work zones are essential to be able to maintain and upgrade our roadways. However, work zones can be dangerous because hazards often
                                <br /> appear unexpectedly, endangering roadway workers and motorists. So, how can we make work zones safer? Creating
                                safe work zones requires risk <br />management strategies to be implemented by employees, supervisory personnel …
                            </p></div>
                        <div className='Dkr13-link'>
                            <Link to='/read1' className='ccd' >Read More <i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                        <div className='blog-icons'><i className="fa-regular fa-heart" onChange={(e) => setLiked(e.target.value)} onSubmit={handleSubmit}></i><span>0</span></div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog;