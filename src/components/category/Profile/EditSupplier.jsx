import React, { useState } from 'react'
import './editsupplier.css'

function EditSupplier({ changed0 }) {


  const [profilePic, setProfilePic] = useState('');
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };
  // const[name,setName]=useState()
  // const[phone,setPhone]=useState()
  // const[email,setEmail]=useState()
  // const[msg,setMsg]=useState()

  // const handle=(e)=>{
  //     e.preventDefault()
  //     onSubmit={(e) => handle}




  // }
  return (
    <>


      <div className="wrap" onClick={changed0}></div>


      <div className="main002">
        <form className="Emain">
          <div className="onest">
            <div className="enam">Name</div>
            <input type='text' name='' className='e1' placeholder='Enter you name of your company' />
          </div>

          <div className="pser">

            <div className="ps1">

              <div className="phone">Phone no</div>
              <input type='' className='pin' placeholder='Enter your phone no' />


            </div>

            <div className="ps2">
              <div id="serv">Service</div>
              <input type='' className='ser1' placeholder='Enter service You provide' />


            </div>










          </div>

          <div className="eadd">Address</div>
          <input type='text' name='' className='e4' placeholder=' ' />


          <div className="cs">

            <div className="inoutc">
              <div className="ecity">City</div>
              <input type='text' name='' className='e5' />
            </div>

            <div className="inouts">
              <div className="estate">State</div>
              <input type='text' name='' className='e6' />
            </div>

            <div className="inoutp">
              <div className="eprice">Price</div>
              <input type='number' name='' className='e7' />
            </div>


          </div>

          <div className="shortdes">

            <div className="sdes">Short Description</div>
            <input type='text' name='' className='e8' />
          </div>

          <div className="maindes">

            <div className="des00">Description</div>
            <textarea id="area0" value='' rows="2" cols="70" placeholder='Enter your description'></textarea>
          </div>

          <div className="uploadimg">
            <div className="up00">Upload Photos</div>
            <div className="dotted-box">

              <div className="load">
                <div className="load1">
              <input type="file" id="file-input" className="upload-input"onChange={handleFileChange} accept="image/jpeg, image/png" />
              
              <label for="file-input" className="upload-label"><div className="drag" for="file-input" ><i className="fa-solid fa-cloud-arrow-up"></i></div><p>Drag and Drop</p></label>
              <p>Browse to upload. only png,jpeg, upto 1.5 mb</p>
              </div>


              </div>

              <div className="boximg">
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes" src={profilePic}></div>
                </div>
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes"></div>
                </div>
                <div className="bo1">
                  <div className="contain"> X
                  </div>
                  <div id="boxes"></div>
                </div>

                <div className="bo1">
               <div className="contain"> X
                </div>
                <div id="boxes"></div>
               </div>

              </div>


            </div>

          </div>

          <button type='submit' className='b1'>Save</button>







        </form>

      </div>



    </>
  )
}

export default EditSupplier