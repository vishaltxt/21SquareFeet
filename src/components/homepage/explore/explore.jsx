import React from 'react'
import './explore.css'
import { useNavigate } from 'react-router-dom';

import left from './exploreimages/span.each-object.png'
import image1 from './exploreimages/Group 234.png'
import image2 from './exploreimages/Group 235.png'
import image3 from './exploreimages/Group 236.png'
import image4 from './exploreimages/Group 237.png'
import image5 from './exploreimages/Group 238.png'
import image6 from './exploreimages/Group 239.png'
import image7 from './exploreimages/Group 240.png'
import image8 from './exploreimages/Group 241.png'
import image9 from './exploreimages/Group 242.png'
import image10 from './exploreimages/Group 243.png'
import image11 from './exploreimages/Group 244.png'
import image12 from './exploreimages/Group 247.png'
import image13 from './exploreimages/Group 246.png'
import image14 from './exploreimages/Group 248.png'
import image15 from './exploreimages/Group 253.png'
import image16 from './exploreimages/Group 252.png'
import image17 from './exploreimages/Group 251.png'
import image18 from './exploreimages/Group 250.png'
import image19 from './exploreimages/Group 249.png'
import right from './exploreimages/span.each-object (1).png'

const Explore = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/suppliers');
    };
    return (
        <div>
            <img className='explore-left' src={left} alt=''></img>
            <div className='explore-upper'>
                <p className='explore-p1'>CATEGORIES</p>
                <p className='explore-p2'>Explore our categories</p>
            </div>
            <div className='explore-main-buttons'>
                <button className='explore-contractors'>Contractors</button>
                <button className='explore-materials' onClick={handleClick}>Materials Vendors/ Suppliers</button>
            </div>
            <div className='explore-grid'>
                <div>
                    <img className='explore-width ew-three' src={image1} alt=''></img>
                    <p className='explore-pp'>Construction Contractors</p>
                </div>
                <div>
                    <img className='explore-width' src={image2} alt=''></img>
                    <p className='explore-pp'>Paint Contractors</p>
                </div>
                <div>
                    <img className='explore-width' src={image3} alt=''></img>
                    <p className='explore-pp'>Pop Contractors</p>
                </div>
                <div>
                    <img className='explore-width' src={image4} alt=''></img>
                    <p className='explore-pp'>Carpenter</p>
                </div>
                <div>
                    <img className='explore-width' src={image5} alt=''></img>
                    <p className='explore-pp'>Shuttering</p>
                </div>
                <div>
                    <img className='explore-width' src={image6} alt=''></img>
                    <p className='explore-pp'>Plumbing Contractors</p>
                </div>
                <div>
                    <img className='explore-width' src={image7} alt=''></img>
                    <p className='explore-pp'>Interior Designers</p>
                </div>
                <div>
                    <img className='explore-width ew-three' src={image8} alt=''></img>
                    <p className='explore-pp'>Waterproofing</p>
                </div>
                <div>
                    <img className='explore-width' src={image9} alt=''></img>
                    <p className='explore-pp'>Heat Insulation</p>
                </div>
                <div>
                    <img className='explore-width' src={image10} alt=''></img>
                    <p className='explore-pp'>False Ceiling</p>
                </div>
                <div>
                    <img className='explore-width' src={image11} alt=''></img>
                    <p className='explore-pp'>Upvc Fittings</p>
                </div>
                <div>
                    <img className='explore-width' src={image12} alt=''></img>
                    <p className='explore-pp'>Flooring</p>
                </div>
                <div>
                    <img className='explore-width' src={image13} alt=''></img>
                    <p className='explore-pp'>Electric Contractors</p>
                </div>
                <div>
                    <img className='explore-width' src={image14} alt=''></img>
                    <p className='explore-pp'>Jcb Movers</p>
                </div>
                <div>
                    <img className='explore-width ew-three' src={image15} alt=''></img>
                    <p className='explore-pp'>Aluminum Fittings</p>
                </div>
                <div>
                    <img className='explore-width' src={image16} alt=''></img>
                    <p className='explore-pp'>Glass</p>
                </div>
                <div>
                    <img className='explore-width' src={image17} alt=''></img>
                    <p className='explore-pp'>Fire system</p>
                </div>
                <div>
                    <img className='explore-width' src={image18} alt=''></img>
                    <p className='explore-pp'>Landscapers</p>
                </div>
                <div>
                    <img className='explore-width' src={image19} alt=''></img>
                    <p className='explore-pp'>Architects</p>
                </div>
            </div>
            <img className='explore-right' src={right} alt=''></img>
        </div>
    )
}

export default Explore;
