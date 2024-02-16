import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Navbar from '../../homepage/Navbar/navbar'
import Footer from '../../homepage/footer/footer'

function Blog() {
    return (
        <>
            <Navbar />
            <div className='blog-container_0'>
                <div className='blog-container-form0'>
                    <div className='blog-container1'>
                        <div className='blog-img'>
                            <img src='/image/div0.jpg' alt='img' />
                        </div>
                        <div className='blog-content'>
                            <span>Creating a Cozy Retreat: Tips for Designing a Comfortable Living Space</span>
                        </div>
                        <div className='blog-content1'>
                            <p>Spread the Love</p>
                        </div>
                        <div className='blog-icon'>

                            <p><img src='/image/icons8-facebook-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-linkedin-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-whatsapp-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-instagram-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-twitter-circled-48.png' alt='img' /></p>

                        </div>
                        <div className='blog-content2'>
                            <p>Spread the love  When it comes to designing the interiors of your home, the goal is not just to make it aesthetically pleasing but also to create a space that<br /> feels like a sanctuary. Your living space should be a cozy retreat where you can unwind, relax, and truly feel at home. In this blog …
                            </p></div>
                        <div className='link'>
                            <Link to='/read'>Read More </Link>
                        </div>
                        <div className='blog-icons'></div>

                    </div>
                    <div className='blog-container1'>

                        <div className='blog-img1'>
                            <img src='/image/img1.jpg' alt='img' />
                        </div>
                        <div className='blog-content'>
                            <span>
                                Why Work Zone Safety Is Important for Everyone</span>
                        </div>
                        <div className='blog-content1'>
                            <p>Spread the Love</p>
                        </div>
                        <div className='blog-icon'>

                            <p><img src='/image/icons8-facebook-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-linkedin-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-whatsapp-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-instagram-48.png' alt='img' /></p>
                            <p><img src='/image/icons8-twitter-circled-48.png' alt='img' /></p>
                        </div>
                        <div className='blog-content2'>
                            <p>Spread the love  Work zones are essential to be able to maintain and upgrade our roadways. However, work zones can be dangerous because hazards often
                                <br /> appear unexpectedly, endangering roadway workers and motorists. So, how can we make work zones safer? Creating
                                safe work zones requires risk <br />management strategies to be implemented by employees, supervisory personnel …
                            </p></div>
                        <div className='blog-link'>
                            <Link to='/read1'>Read More </Link>
                        </div>
                        <div className='blog-icons'></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog