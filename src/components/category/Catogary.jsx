import React, { useState } from 'react'

import "./category.css"
import Send from './POPup/Send'
import Navbar from '../homepage/Navbar/navbar'
import Footer from '../homepage/footer/footer'

function Catogary() {
    const [payment, setPayment] = useState(false)

    const band = () => setPayment(false)
    const Mymodel = () => {

        setPayment(true);

    }



    return (
        <>
            <Navbar />
            <div className="main">
                <div className="imgc">
                    <img className='imghead' src='https://s3-alpha-sig.figma.com/img/c9d6/33d1/c15e5e78a1c3e43b8d1289ad583a5fd4?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekRU8sGiEglmifzKQ32aotspCsyCZQodEIUn4msFp-CTfsQcB7jdOxYXlPi3kNTTC0BLKlwYgWRKCLHc7gqoghB5~r2vWpWFmSxLjLnC5xk-w3w6IZ9J0eYn24Upkp8mo71e4x1m5WriDO5OnPgNApvnAxN1hU3~TnbLPA6-XbMqrQtDCU-aR0-J1KsM4CIEhb36H~Fr5wCIvxdjJgds5EY5rNTjKeoXI-T0iJPX-CxFtpIYfwgZuh1uC6zKOoVRmXh00F3nssL~UyeeckrdezaQOnN7Gg75S2HQqs1wYd~NgyY2Rf4ZK2FOogbcffcegOT4CeEaRPk9roNjhNezhQ__' alt="Description" />
                </div>
                <div className="bannert">
                    <h2>Categories</h2>
                    <p>Home-Categories</p>
                </div>

                <div className="onimage">
                    <button type='submit' className='btn01'><p>Location <p className='mm'>Ex Noida</p></p> </button>
                    <button type='submit' className='btn1'>Services<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn1'>Budget<span class="material-symbols-outlined">
                        expand_more
                    </span> </button>
                    <button type='submit' className='btn2'><span class="material-symbols-outlined">
                        search
                    </span>Search</button>

                </div>


                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">
                        <div className="cont1">
                            <span className='upper'>Construction</span>
                            <img className='img1' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                        </div>

                        <div className="right">
                            <h4>Shubham Construction Co.</h4>
                            <p className='sme'>Greater Noida</p>

                            <div className="uright">
                                <p>City-Noida</p>
                                <p>State-Uttar Pradesh</p>
                            </div>

                            <div className="uright1">
                                <button type='submit' className='numbtn'>  <span className='numm'> price :&#8377; 5099</span></button>
                                <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                                {payment && <Send band={band} />}
                            </div>



                        </div>

                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="cont1">
                            <span className='upper'>Construction</span>
                            <img className='img1' src='https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=1024x1024&w=is&k=20&c=UrKkZnZYm4O146XzgU6HAuvSK8RxCyJWkznmhZSEKPQ=' alt='' />
                        </div>

                        <div className="right">
                            <h4>Shubham Construction Co.</h4>
                            <p className='sme'>H,17,H Block,Sector 9</p>

                            <div className="uright">
                                <p>City-Noida</p>
                                <p>State-Uttar Pradesh</p>
                            </div>

                            <div className="uright1">
                                <button type='submit' className='numbtn'>  <span className='numm'>  Price : &#8377;  5099</span></button>
                                <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                            </div>



                        </div>

                    </div>
                    {/* </div> */}


                </div>


                {/* --------------------------second double------------------------------------------------------------------------ */}

                <div className="doubleCard">


                    {/* <div className="full0"> */}

                    {/*  */}

                    <div className="construction">
                        <div className="cont1">
                            <span className='upper'>Construction</span>
                            <img className='img1' src='https://media.istockphoto.com/id/1351571961/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.jpg?s=1024x1024&w=is&k=20&c=w66hXE0hFdhDestn9AFOaTSR9tUbNLQeCdW8a8fXMDU=' alt='' />
                        </div>

                        <div className="right">
                            <h4>Shubham Construction Co.</h4>
                            <p className='sme'>T-5A/6,KP-2,Jaypee Greens Wishtown</p>

                            <div className="uright">
                                <p>City-Noida</p>
                                <p>State-Uttar Pradesh</p>
                            </div>

                            <div className="uright1">
                                <button type='submit' className='numbtn'>  <span className='numm'>  Price : &#8377; 5099 </span></button>
                                <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                            </div>



                        </div>

                    </div>




                    {/*------------------- 2nd------------------------------------------------------------------------------------- */}


                    {/* <div className="full1"> */}
                    {/* <span className='upper'>Construction</span> */}

                    <div className="construction">

                        <div className="cont1">
                            <span className='upper'>Construction</span>
                            <img className='img1' src='https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=1024x1024&w=is&k=20&c=1golptGIidGvd8qhQ7FvKAT2lFl7hIu8KGCJzBT_H8o=' alt='' />
                        </div>

                        <div className="right">
                            <h4>Shubham Construction Co.</h4>
                            <p className='sme'>H,17,H Block,sector 40</p>

                            <div className="uright">
                                <p>City-Noida</p>
                                <p>State-Uttar Pradesh</p>
                            </div>

                            <div className="uright1">
                                <button type='submit' className='numbtn'>  <span className='numm'> price : &#8377; 5099 </span></button>
                                <button type='submit' onClick={Mymodel} className='numbtn0'>Send Enquiry</button>
                            </div>



                        </div>

                    </div>
                    {/* </div> */}


                </div>


            </div>

            <Footer />
        </>
    )
}

export default Catogary