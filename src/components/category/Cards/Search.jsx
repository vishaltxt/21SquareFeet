import React, { useState } from 'react';

import './search.css'

function Search() {

    // const availableKeywords = [
    //     'HTML', 'CSS', 'JavaScript', 'ReactJS', 'Node.js',
    //     'Where to learn coding online', 'where to learn web design', 'How to create a website'
    // ];

    // const [filteredKeywords, setFilteredKeywords] = useState([]);

    // const handleInputChange = (event) => {
    //     const input = event.target.value.toLowerCase();
    //     const filtered = availableKeywords.filter(keyword =>
    //         keyword.toLowerCase().includes(input)
    //     );
    //     setFilteredKeywords(filtered);
    // };







    return (
        <>
            <div className="main">


                <div className="row">
                    <input type="text" id="input-box" placeholder="search here" autocomplete="off"/>
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>



                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}   */}
                                </div>




                            </div>

                        </div>




                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>


                </div>


                {/* --------------------------second double------------------------------------------------------------------------ */}

                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="mm">
                            <div className="mm2"></div>
                            <span className='upper'>Construction</span>
                        </div>
                        <div className="cont1">
                            <div className="photo">

                                <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' />
                            </div>

                            <div className="right">
                                <h4>Shubham Construction Co.</h4>
                                <p className='sme'>Greater Noida</p>

                                <div className="uright">
                                    <p>City-Noida</p>
                                    <p>State-Uttar Pradesh</p>
                                </div>

                                <div className="uright1">
                                    <button type='submit' className='numbtn'>  Price :&#8377; 5099 /sqft</button>
                                    <button type='submit' className='numbtn0'>Send Enquiry</button>
                                    {/* {payment && <Send band={band} />}    */}
                                </div>




                            </div>

                        </div>




                    </div>
                    {/* </div> */}


                </div>


            </div>

        </>
    )
}

export default Search