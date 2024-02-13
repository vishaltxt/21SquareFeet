import React from 'react'
import './banner.css'
// import rectangle1 from './banner images/Rectangle 7.png'
// import rectangle2 from './banner images/Rectangle 8.png'
import layer from './banner images/rs-layer-wrap → rs-loop-wrap → rs-mask-wrap → rs-layer.png'
import search1 from './banner images/Group 3.png'
// import cement from './banner images/cement 1.png'

const Banner = () => {
    return (
        <div>
            <div className='background-container'>
                <div id='banner'>
                    <div className='banner-div-1'>
                        <p className='banner-p-1'>Looking for Reliable</p>
                        <img className='banner-layer' src={layer} alt=''></img>
                        <p className='banner-p-2'>Cement Suppliers?</p>
                        <p className='banner-p-3'>Build with Confidence Using Our High-Quality Cement Materials.</p>
                        <button className='banner-btn'>Connect Now</button>
                    </div>
                    <div>
                        {/* <img className='rectangle-1' src={rectangle1} alt=''></img> */}
                        {/* <img className='rectangle-2' src={rectangle2} alt=''></img> */}
                    </div>
                </div>
                <div className='lower-container'>
                    <div className='lw-2'>
                        <p className='your-city'>Your City</p>
                        <p className='ex-noida'>Ex Noida</p>
                    </div>
                    <div>
                        <select className='banner-services your-city'>
                            <option>Services</option>
                        </select>
                    </div>
                    <img className='banner-search' src={search1} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default Banner;
